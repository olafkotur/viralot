import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.primary,
  },

  background: {
    width,
    height,
    position: 'absolute',
  },

  heading: {
    color: theme.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subHeading: {
    color: theme.secondary,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 50,
  },

  inputContainer: {
    width: width * 0.8,
  },

  inputTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -15,
    left: -5,
  },

  inputTitle: {
    fontSize: 20,
    color: theme.secondary,
  },

  textInput: {
    borderColor: theme.secondary,
    textAlignVertical: 'top',
  },

  actionButtonContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionButton: {
    width: width * 0.4 - 15,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
  },

  actionButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: 5,
    opacity: 0.6,
  },

  forgotText: {
    color: theme.secondary,
  }
});