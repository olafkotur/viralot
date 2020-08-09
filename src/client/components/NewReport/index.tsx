import React from 'react';
import styles from './styles';
import { View, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { theme } from '../../../config';
import { IconButton, TextInput, Text } from 'react-native-paper';
import { IReportInputData } from '../../../typings/report';

interface IProps {
  handleClose: () => void;
  handleSubmit: (details: IReportInputData) => Promise<void>;
}

interface IState {
  isSubmitting: boolean;
  locationName: string;
  description: string;
}

export default class NewReport extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isSubmitting: false,
      locationName: '',
      description: '',
    };
  }

  handleUpdate = (key: string, value: string) => {
    // @ts-ignore
    this.setState({ [key as keyof IState]: value });
  }

  handleSubmit = async (): Promise<void> => {
    this.setState({ isSubmitting: true });

    if (this.state.description && this.state.locationName) {
      await this.props.handleSubmit({
        locationName: this.state.locationName,
        description: this.state.description,
      });
    }
  }

  render(): JSX.Element {
    return (
      <SafeAreaView style={styles.container} >
        <KeyboardAvoidingView behavior="position" >
          <IconButton
            size={25}
            icon="close-circle-outline"
            style={styles.closeButton}
            color={theme.secondary}
            onPress={this.props.handleClose}
          />

          {/* Location Name */}
          <View style={styles.fieldContainer}>
            <View style={styles.titleContainer}>
              <IconButton icon="card-text-outline" size={25} color={theme.secondary} />
              <Text style={styles.title}>Location Name</Text>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Notting Hill, London, UK"
              maxLength={30}
              mode="flat"
              value={this.state.locationName}
              onChangeText={e => this.handleUpdate('locationName', e)}
              error={this.state.isSubmitting && !this.state.locationName}
            />
          </View>

          {/* Description */}
          <View style={styles.fieldContainer}>
            <View style={styles.titleContainer}>
              <IconButton icon="card-text-outline" size={25} color={theme.secondary} />
              <Text style={styles.title}>Description</Text>
            </View>
            <TextInput
              multiline
              placeholder="Symptoms, sources etc..."
              style={styles.textInput}
              numberOfLines={10}
              maxLength={240}
              mode="flat"
              value={this.state.description}
              onChangeText={e => this.handleUpdate('description', e)}
              error={this.state.isSubmitting && !this.state.description}
            />
          </View>

          {/* Submit */}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.handleSubmit} >
            <Text style={styles.submitText}>Create Report</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  } 
}
