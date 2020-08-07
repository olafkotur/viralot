import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles';
import { IMapCoordinates } from '../../../typings/misc';
import { LocationService } from '../../../services/location';
import Loader from '../../components/Loader';
import { Searchbar } from 'react-native-paper';
import _ from 'lodash';
import Navigation from '../../components/Navigation';
import { theme } from '../../../config';
import Map from '../../components/Map';

interface IProps {
  navigation: any;
}

interface IState {
  isLoading: boolean;
  searchQuery: string;
}

export default class FreeView extends React.Component<IProps, IState> {
  protected intialPosition: IMapCoordinates;
  protected debouncedSearchHandler: () => void;

  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoading: true,
      searchQuery: '',
    };

    this.intialPosition = { latitude: 0, longitude: 0, latitudeDelta: 0, longitudeDelta: 0 };
    this.debouncedSearchHandler = _.debounce(this.handleSearch.bind(this), 500, { maxWait: 1000 });
  }

  componentDidMount = async (): Promise<void> => {
    this.intialPosition = await LocationService.getCurrentPosition();
    this.setState({ isLoading: false });
  }

  componentDidUpdate = (_prevProps: IProps, prevState: IState): void => {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.debouncedSearchHandler();
    }
  }

  handleChange = (key: 'searchQuery', value: string): void => {
    this.setState({ [key]: value });
  }

  handleSearch = (): void => {
    console.log(`Searching: ${this.state.searchQuery}`);
  }
  
  handleNavigate = (page: 'Reports'): void => {
    this.props.navigation.navigate(page);
  }

  handleCurrentLocation = (): void => {
    console.log('TODO: Current location pressed');
  }

  render(): JSX.Element {
    if (!this.state.isLoading) {
      return (
        <View style={styles.container} >
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle={theme.theme ==='dark' ? 'light-content' : 'dark-content'}
          />

          <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={value => this.handleChange('searchQuery', value)}
            value={this.state.searchQuery}
            iconColor={theme.secondary}
            placeholderTextColor={theme.secondary}
            inputStyle={styles.searchBarText}
          />
          <Map
            initialPosition={this.intialPosition}
            fullScreen
          />

          <Navigation
            navigation={this.props.navigation}
            handleCurrentLocation={this.handleCurrentLocation}
          />
        </View>
      );
    } else return <Loader />
  } 
}
