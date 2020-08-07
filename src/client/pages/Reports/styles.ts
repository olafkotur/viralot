import { StyleSheet, Dimensions, Platform } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  scrollView: {
    marginTop: Platform.OS === 'ios' ? 15 : 30,
    paddingBottom: 90,
  },

  addReportButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: theme.secondary,
    opacity: 0.8,
  },

});