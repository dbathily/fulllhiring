import {FC} from 'react';
import {Text, TextProps} from 'react-native';
import Themed from '../theme/Themed.tsx';

const PaperText: FC<TextProps> = Themed(Text, theme => ({color: theme.palette.paper.contrastText}));

export default PaperText;
