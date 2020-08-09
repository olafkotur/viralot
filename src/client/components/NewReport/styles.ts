import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: theme.primary,
    shadowOpacity: 1,
    padding: 10,
    borderRadius: 10,
  },

  closeButton: {
    alignSelf: 'flex-end',
    opacity: 0.8,
  },

  fieldContainer: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },

  titleContainer: {
    flexDirection: 'row',
    marginBottom: -12,
    marginLeft: -10,
  },

  title: {
    alignSelf: 'center',
    color: theme.secondary,
    fontSize: 18,
    marginLeft: -5,
  },

  textInput: {
    width: width * 0.8,
    textAlignVertical: 'top',
    borderBottomWidth: 0,
  },

  submitButton: {
    width: width * 0.45,
    backgroundColor: theme.tertiary,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 25
  },

  submitText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  }

});