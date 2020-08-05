import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styles from './styles';
import { View } from 'react-native';

export default class Loader extends React.Component {
  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.loading} size="large" />
      </View>
    );
  } 
}
