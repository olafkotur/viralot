import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: theme.secondary,
  },

  title: {
    color: theme.secondary,
    fontSize: 20,
    position: 'absolute',
    left: (width * 0.05) + 35
  },
});