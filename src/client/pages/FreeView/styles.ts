import { StyleSheet, Dimensions, Platform } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.secondary,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  searchBar: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 40,
    width: width * 0.9,
    zIndex: 1000,
    opacity: 0.8,
    backgroundColor: theme.primary,
  },

  searchBarText: {
    color: theme.secondary,
  },

  reportButton: {
    position: 'absolute',
    zIndex: 1000,
    bottom: height * 0.02,
    right: height * 0.02,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: theme.secondary,
  }
});