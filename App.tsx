import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FreeView from './src/client/pages/FreeView';
import Reports from './src/client/pages/Reports';
import Settings from './src/client/pages/Settings';
import { View } from 'react-native';

export default class App extends React.Component {
  render() {
    const Tab = createMaterialTopTabNavigator();
    const tabBarOptions = {
      renderTabBarItem: (): JSX.Element => <View key={Math.random()} style={{ display: 'none' }} />,
      renderIndicator: (): JSX.Element => <View key={Math.random()} style={{ display: 'none' }} />
    };

    return (
      <NavigationContainer >
        <Tab.Navigator
          lazy
          initialRouteName="FreeView"
          tabBarPosition="bottom"
          tabBarOptions={tabBarOptions}
          >
          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="FreeView" component={FreeView} />
          <Tab.Screen name="Reports" component={Reports} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

