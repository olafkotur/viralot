import React from 'react';
import styles from './styles';
import { View, Text, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { theme } from '../../../config';
import SettingItem from '../../components/SettingItem';
import { StorageService } from '../../../services/storage';
import { UserService } from '../../../services/user';
import { IUserData } from '../../../typings/user';

interface IProps {
  navigation: any;
}

interface IState {
  isLoading: boolean;
  notificationsToggled: boolean;
  darkModeToggled: boolean;
}

export default class Settings extends React.Component<IProps, IState> {
  protected userData!: IUserData;

  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoading: true,
      notificationsToggled: false,
      darkModeToggled: true,
    };
  }

  componentDidMount = async (): Promise<void> => {
    this.userData = await StorageService.retrieveSecureData('userData');
    this.setState({
      isLoading: false,
      notificationsToggled: this.userData?.notifications,
      darkModeToggled: this.userData?.darkMode,
    });
  }

  handleToggleChange = async (action: 'notifications' | 'darkMode', value: boolean): Promise<void> => {
    if (action === 'notifications') {
      this.setState({ notificationsToggled: value });
      this.userData.notifications = value;
    } else if (action === 'darkMode') {
      this.setState({ darkModeToggled: value });
      this.userData.darkMode = value;
    }

    await UserService.saveSettings(this.userData);
  }

  handleExternalPressed = (action: 'about' | 'logout'): void => {
    if (action === 'logout') {
      this.props.navigation.replace('Login');
    }
  }

  render(): JSX.Element {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} >

          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle={theme.theme ==='dark' ? 'light-content' : 'dark-content'}
          />

          {!this.state.isLoading && <View style={styles.settingItems} >
            {/* <SettingItem
              title="Notifications"
              icon="bell-outline"
              action="toggle"
              toggled={this.state.notificationsToggled}
              handleToggleChange={async (value): Promise<void> => this.handleToggleChange('notifications', value)}
            /> */}

            {/* <SettingItem
              title="Dark Mode"
              icon="moon-waning-crescent"
              action="toggle"
              toggled={this.state.darkModeToggled}
              handleToggleChange={async (value): Promise<void> => this.handleToggleChange('darkMode', value)}
            /> */}

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
          </View>}

        </ScrollView>
      </SafeAreaView>
    );
  } 
}
