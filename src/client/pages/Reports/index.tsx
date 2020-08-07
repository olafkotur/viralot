import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';
import _ from 'lodash';
import ReportCard from '../../components/ReportCard';
import { IReportData } from '../../../typings/report';
import { ReportService } from '../../../services/report';
import { theme } from '../../../config';

interface IProps {
  navigation: any;
}

interface IState {
  isLoading: boolean;
}

export default class Reports extends React.Component<IProps, IState> {
  protected data: IReportData[] = [];

  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount = async (): Promise<void> => {
    this.data = await ReportService.getUserReports();
    this.setState({ isLoading: false });
  }

  renderCardComponents = (): JSX.Element[] => {
    return this.data.map((v, i) => <ReportCard key={`report-card-${i}`} data={v} />);
  }
  
  handleNavigate = (page: 'FreeView'): void => {
    this.props.navigation.navigate(page);
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
            style={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false} >
            { this.renderCardComponents() }
          </ScrollView>
        </SafeAreaView>
      );
    } else return <Loader />
  } 
}
