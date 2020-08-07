import React from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { theme } from '../../../config';
import MapView, { Heatmap } from 'react-native-maps';
import { IMapCoordinates } from '../../../typings/misc';
import { light, dark } from './styles';
import Loader from '../Loader';
import { IHeatMapData } from '../../../typings/report';
import { ReportService } from '../../../services/report';

interface IProps {
  initialPosition: IMapCoordinates;
  fullScreen?: boolean;
  border?: boolean;
  margin?: boolean;
  disableScroll?: boolean;
}

interface IState {
  isLoading: boolean;
}

export default class Map extends React.Component<IProps, IState> {
  protected heatMapData: IHeatMapData[] = []
  protected mapStyles: any = null;
  protected width: number;
  protected height: number;
  
  constructor(props: IProps) {
    super(props);

    this.width = Dimensions.get('window').width;
    this.height = Dimensions.get('window').height;
    this.mapStyles = {
      width: this.props.fullScreen ? this.width : '100%',
      height: this.props.fullScreen ? this.height * 1.25 : 400,
      borderRadius: this.props.border ? 10 : 0,
      marginBottom: this.props.margin ? 10 : 0,
      opacity: 0.85,
    };

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount = async (): Promise<void> => {
    this.heatMapData = await ReportService.getHeatMapData(this.props.initialPosition);
    this.setState({ isLoading: false });
  };

  render(): JSX.Element {
    return (
      <View style={{ height: this.props.fullScreen ? this.height * 1.25: 300, width: this.mapStyles.width, overflow: 'hidden' }}>
        {!this.state.isLoading ?
          <MapView
            style={this.mapStyles}
            showsCompass={false}
            initialRegion={this.props.initialPosition}
            scrollEnabled={!this.props.disableScroll}
            customMapStyle={theme.theme === 'dark' ? dark : light}
            provider="google" >
            <Heatmap points={this.heatMapData} radius={40}/>
          </MapView>
        : <Loader />
        }
      </View>
    );
  } 
}
