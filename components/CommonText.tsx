import {FC} from 'react';
import {Text, TextProps} from 'react-native';
import Themed from '../theme/Themed.tsx';

const CommonText: FC<TextProps> = Themed(Text, theme => ({
  color: theme.palette.background.contrastText,
}));

export default CommonText;
