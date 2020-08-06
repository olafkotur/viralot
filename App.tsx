import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FreeView from './src/client/pages/FreeView';
import Reports from './src/client/pages/Reports';
import Settings from './src/client/pages/Settings';

export default class App extends React.Component {
  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FreeView" component={FreeView} options={{ headerShown: false }} />
          <Stack.Screen name="Reports" component={Reports} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

