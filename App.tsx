import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import FreeView from './src/client/pages/FreeView';
import Reports from './src/client/pages/Reports';
import Profile from './src/client/pages/Profile';

export default class App extends React.Component {
  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FreeView" component={FreeView} options={{ headerShown: false }} />
          <Stack.Screen name="Reports" component={Reports} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

