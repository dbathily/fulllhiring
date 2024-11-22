import {Theme} from './Theme.types.ts';

const sharedTheme: Pick<Theme, 'spacing'> = {
  spacing: (factor: number) => factor * 8,
};

const lightTheme: Theme = {
  bareStyle: 'light-content',
  indicatorStyle: 'black',
  palette: {
    primary: {
      main: '#1976D2',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFC107',
      contrastText: '#000000',
    },
    appBar: {
      main: '#424242',
      contrastText: '#FFFFFF',
    },
    background: {
      main: '#FFFFFF',
      contrastText: '#212121',
    },
    paper: {
      main: '#F5F5F5',
      contrastText: '#212121',
    },
  },
  ...sharedTheme,
};

const darkTheme: Theme = {
  bareStyle: 'dark-content',
  indicatorStyle: 'white',
  palette: {
    primary: {
      main: '#90CAF9',
      contrastText: '#000000',
    },
    secondary: {
      main: '#FFD54F',
      contrastText: '#000000',
    },
    appBar: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
    background: {
      main: '#303030',
      contrastText: '#FFFFFF',
    },
    paper: {
      main: '#424242',
      contrastText: '#FFFFFF',
    },
  },
  ...sharedTheme,
};

export { lightTheme, darkTheme };
