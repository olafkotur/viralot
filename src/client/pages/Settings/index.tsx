import React from 'react';
import styles from './styles';
import { View, Text, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { theme } from '../../../config';
import SettingItem from '../../components/SettingItem';

interface IProps {
  navigation: any;
}

interface IState {
  notificationsToggled: boolean;
  darkModeToggled: boolean;
}

export default class Settings extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      notificationsToggled: false,
      darkModeToggled: true,
    };
  }

  handleToggleChange = (action: 'notifications' | 'darkMode', value: boolean): void => {
    action === 'notifications' && this.setState({ notificationsToggled: value });
    action === 'darkMode' && this.setState({ darkModeToggled: value });
  }

  handleExternalPressed = (action: 'about' | 'logout'): void => {
    console.log('About pressed');
  }

  render(): JSX.Element {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} >
          <StatusBar barStyle={theme.secondary === '#fff' ? 'light-content' : 'dark-content'} />

          <View style={styles.settingItems} >
            <SettingItem
              title="Notifications"
              icon="bell-outline"
              action="toggle"
              toggled={this.state.notificationsToggled}
              handleToggleChange={(value): void => this.handleToggleChange('notifications', value)}
            />

            <SettingItem
              title="Dark Mode"
              icon="moon-waning-crescent"
              action="toggle"
              toggled={this.state.darkModeToggled}
              handleToggleChange={(value): void => this.handleToggleChange('darkMode', value)}
            />

            <SettingItem
              title="About"
              icon="help-circle-outline"
              action="external"
              handleExternalPressed={(): void => this.handleExternalPressed('about')}
            />

            <SettingItem
              noBorder
              title="Logout"
              icon="logout"
              action="external"
              color={theme.danger}
              handleExternalPressed={(): void => this.handleExternalPressed('logout')}
            />

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } 
}
