import React from 'react';
import styles from './styles';
import { View, StatusBar, SafeAreaView, Image, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { theme } from '../../../config';
import { IconButton, TextInput } from 'react-native-paper';
const backgroundImage = require('../../../../assets/bg-dark-min.png');

interface IProps {
  navigation: any;
}

interface IState {
  email: string;
  password: string;
}

export default class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleUpdate = (key: string, value: string) => {
    // @ts-ignore
    this.setState({ [key as keyof IState]: value });
  }

  handleLogin = async (): Promise<void> => {
  }

  handleSignup = async (): Promise<void> => {
  }

  handleForgotPassword = async (): Promise<void> => {
  }

  render(): JSX.Element {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.background} source={backgroundImage} />
        <KeyboardAvoidingView behavior="position" >
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle={theme.theme ==='dark' ? 'light-content' : 'dark-content'}
          />

          <Text style={styles.heading}>Welcome</Text>
          <Text style={styles.subHeading}>Please login or sign up.</Text>

          {/* Email */}
          <View style={styles.inputContainer}>
            <View style={styles.inputTitleContainer}>
              <IconButton icon="email-outline" color={theme.secondary} />
              <Text style={styles.inputTitle}>Email</Text>
            </View>

            <TextInput
              style={styles.textInput}
              placeholder="Email"
              maxLength={100}
              mode="outlined"
              value={this.state.email}
              onChangeText={e => this.handleUpdate('email', e)}
            />
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <View style={styles.inputTitleContainer}>
              <IconButton icon="lock-outline" color={theme.secondary} />
              <Text style={styles.inputTitle}>Password</Text>
            </View>

            <TextInput
              secureTextEntry
              style={styles.textInput}
              placeholder="Password"
              maxLength={100}
              mode="outlined"
              value={this.state.password}
              onChangeText={e => this.handleUpdate('password', e)}
            />

            <TouchableOpacity
              style={styles.forgotButton}
              onPress={this.handleForgotPassword} >
              <Text style={styles.forgotText}>forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionButtonContainer}>
            <TouchableOpacity
              style={{ ...styles.actionButton, backgroundColor: theme.secondary }}
              onPress={this.handleLogin} >
              <Text style={{ ...styles.actionButtonText, color: theme.primary }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.actionButton, backgroundColor: 'transparent', borderColor: theme.secondary, borderWidth: 2 }}
              onPress={this.handleSignup} >
              <Text style={{ ...styles.actionButtonText, color: theme.secondary }}>Sign up</Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>

      </SafeAreaView>
    );
  } 
}
