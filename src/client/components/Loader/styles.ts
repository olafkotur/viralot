import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  loading: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
});