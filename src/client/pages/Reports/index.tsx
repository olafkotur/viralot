import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Modal } from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';
import _ from 'lodash';
import ReportCard from '../../components/ReportCard';
import { IReportData, IReportInputData } from '../../../typings/report';
import { ReportService } from '../../../services/report';
import { theme } from '../../../config';
import { IconButton } from 'react-native-paper';
import NewReport from '../../components/NewReport';

interface IProps {
  navigation: any;
}

interface IState {
  isLoading: boolean;
  modalVisible: boolean;
}

export default class Reports extends React.Component<IProps, IState> {
  protected data: IReportData[] = [];

  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoading: true,
      modalVisible: false,
    };
  }

  componentDidMount = async (): Promise<void> => {
    this.data = await ReportService.getUserReports();
    this.setState({ isLoading: false });
  }

  renderCardComponents = (): JSX.Element[] => {
    return this.data.map((v, i) => <ReportCard key={`report-card-${i}`} data={v} />);
  }
  
  toggleModal = (): void => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  handleSubmit = async (details: IReportInputData): Promise<void> => {
    await ReportService.saveReport(details);
    this.toggleModal();
  }

  render(): JSX.Element {
    if (!this.state.isLoading) {
      return (
        <SafeAreaView style={styles.container} >
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle={theme.theme ==='dark' ? 'light-content' : 'dark-content'}
          />

          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false} >
            { this.renderCardComponents() }
          </ScrollView>

          <IconButton
            style={styles.addReportButton}
            icon="plus"
            color={theme.primary}
            size={35}
            onPress={this.toggleModal}
          />

          <Modal
            transparent
            visible={this.state.modalVisible}
            onDismiss={this.toggleModal} >
            <NewReport
              handleClose={this.toggleModal}
              handleSubmit={this.handleSubmit}
            />
          </Modal>

        </SafeAreaView>
      );
    } else return <Loader />
  } 
}
