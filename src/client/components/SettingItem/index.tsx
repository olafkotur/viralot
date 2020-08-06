import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import { IconButton, Switch } from 'react-native-paper';
import { theme } from '../../../config';

interface IProps {
  title: string;
  icon: string;
  action?: 'toggle' | 'external';
  color?: string;
  toggled?: boolean;
  noBorder?: boolean;
  handleToggleChange?: (value: boolean) => void;
  handleExternalPressed?: () => void;
}

export default class SettingItem extends React.Component<IProps> {
  render(): JSX.Element {
    return (
      <View style={{...styles.container, borderBottomWidth: this.props.noBorder ? 0 : 1 }}>
        <IconButton icon={this.props.icon} color={theme.secondary} size={30} />
        <Text style={{...styles.title, color: this.props.color || theme.secondary}}>{this.props.title}</Text>

        { this.props.action === 'external' &&
          <IconButton icon="chevron-right" color={theme.secondary} onPress={this.props.handleExternalPressed} size={30} />
        }

        { this.props.action === 'toggle' &&
          <Switch value={this.props.toggled} onValueChange={this.props.handleToggleChange} color={theme.tertiary} />
        }
      </View>
    );
  } 
}
