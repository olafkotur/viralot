import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';

export default class Profile extends React.Component {
  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  } 
}
