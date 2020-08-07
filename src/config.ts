const darkTheme = true;
const debug = false;

export const theme = {
  theme: darkTheme ? 'dark' : 'light',
  primary: darkTheme ? '#292929' : '#ecf0f1',
  secondary: darkTheme ? '#ecf0f1' : '#292929',
  tertiary: '#2980b9',
  danger: '#c0392b',
};

export const map = {
  latitudeDelta: 0.007,
  longitudeDelta: 0.003
};

export const api = {
  url: debug ? 'http://localhost:8080/viralot-api/us-central1' : 'https://us-central1-viralot-api.cloudfunctions.net',
}