import {StatusBarStyle} from 'react-native';

export interface PaletteColor {
  main: string;
  contrastText: string;
}
export interface Palette {
  primary: PaletteColor;
  secondary: PaletteColor;
  appBar: PaletteColor;
  background: PaletteColor;
  paper: PaletteColor;
}

export interface Theme {
  bareStyle: StatusBarStyle,
  indicatorStyle: 'black' | 'white',
  palette: Palette;
  spacing: (scale: number) => number
}
