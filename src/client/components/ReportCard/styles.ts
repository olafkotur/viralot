import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: width * 0.9,
    marginBottom: 25,
    borderRadius: 10
  },

  headerRow: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    left: -15,
  },

  title: {
    color: theme.secondary,
  },

  locationPin: {
    width: 30,
    height: 30,
    left: 5,
  },

  description: {
    marginTop: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    color: theme.secondary,
  },

  date: {
    alignSelf: 'flex-end',
    paddingTop: 10,
    paddingHorizontal: 10,
    fontSize: 10,
    color: theme.secondary,
    opacity: 0.7,
  },
});