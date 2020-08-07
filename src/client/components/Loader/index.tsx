import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styles from './styles';
import { View, StatusBar } from 'react-native';
import { theme } from '../../../config';

export default class Loader extends React.Component {
  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={theme.theme ==='dark' ? 'light-content' : 'dark-content'}
        />
        <ActivityIndicator style={styles.loading} size="large" color={theme.secondary}/>
      </View>
    );
  } 
}
