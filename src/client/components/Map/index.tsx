import React from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { theme } from '../../../config';
import MapView from 'react-native-maps';
import { IMapCoordinates } from '../../../typings/misc';
import { light, dark } from './styles';

interface IProps {
  initialPosition: IMapCoordinates;
  fullScreen?: boolean;
  border?: boolean;
  margin?: boolean;
  disableScroll?: boolean;
}

export default class Map extends React.Component<IProps, {}> {
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
  }

  render(): JSX.Element {
    return (
      <View style={{ height: this.props.fullScreen ? this.height * 1.25: 300, width: this.mapStyles.width, overflow: 'hidden' }}>
        <MapView
          style={this.mapStyles}
          showsCompass={false}
          initialRegion={this.props.initialPosition}
          scrollEnabled={!this.props.disableScroll}
          customMapStyle={theme.theme === 'dark' ? dark : light}
          provider="google"
        />
      </View>
    );
  } 
}
