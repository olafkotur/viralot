import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styles from './styles';
import { View, StatusBar } from 'react-native';
import { theme } from '../../../config';

interface IProps {
  transparent?: boolean;
  small?: boolean;
}

export default class Loader extends React.Component<IProps> {
  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={theme.theme ==='dark' ? 'light-content' : 'dark-content'}
        />
        <ActivityIndicator
          style={{ ...styles.loading, backgroundColor: this.props.transparent ? 'transparent' : theme.primary }}
          size={this.props.small ? 'small' : 'large'}
          color={theme.secondary}
        />
      </View>
    );
  } 
}
