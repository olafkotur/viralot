import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { IReportData } from '../../../typings/report';
import moment from 'moment';
import MapView from 'react-native-maps';
import { map, theme } from '../../../config';
import Map from '../../components/Map';

interface IProps {
  data: IReportData;
}

export default class ReportCard extends React.Component<IProps> {
  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <List.Icon icon="map-marker" style={styles.locationPin} color={theme.secondary} />
          <Text style={styles.title}>{this.props.data.locationName}</Text>
        </View>

        <Map
          border
          margin
          disableScroll
          scrollToCoordinates={null}
          initialPosition={{
            latitude: this.props.data.latitude,
            longitude: this.props.data.longitude,
            latitudeDelta: map.latitudeDelta,
            longitudeDelta: map.longitudeDelta,
          }}
        />

        <Text style={styles.description}>{this.props.data.description}</Text>
        <Text style={styles.date}>{moment(this.props.data.createdAt * 1000).format('DD/MM/YYYY')}</Text>
      </View>
    );
  } 
}
