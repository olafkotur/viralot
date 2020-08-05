import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 15,
  },

  iconContainer: {
    borderRadius: 50,
    backgroundColor: theme.primary,
    opacity: 0.85,
    margin: 5,
  },
});