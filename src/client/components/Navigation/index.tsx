import React from 'react';
import { IconButton } from 'react-native-paper';
import styles from './styles';
import { View, TouchableOpacity } from 'react-native';
import { theme } from '../../../config';
import Loader from '../Loader';

interface IProps {
  navigation: any;
  isSearching: boolean;
  handleCurrentLocation: () => Promise<void>;
}

export default class Navigation extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={(): void => this.props.navigation.navigate('Settings')} >
          <IconButton icon="settings" size={20} color={theme.secondary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={this.props.handleCurrentLocation} >
          <IconButton icon="crosshairs-gps" size={35} color={theme.secondary}/>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={(): void => this.props.navigation.navigate('Reports')} >
          <IconButton icon="alert-circle-outline" size={20} color={theme.secondary}/>
        </TouchableOpacity>
      </View>
    );
  } 
}
