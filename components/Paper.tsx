import {Animated} from 'react-native';
import {Theme} from '../theme/Theme.types.ts';
import Themed from '../theme/Themed.tsx';
import View = Animated.View;

const styles = (theme: Theme) => ({
  backgroundColor: theme.palette.paper.main,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
});

const Paper = Themed(View, styles);
export default Paper;
