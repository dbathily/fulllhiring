import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Theme} from '../theme/Theme.types.ts';
import {useThemedStyles} from '../theme/useThemedStyles.ts';

const Button: FC<TouchableOpacityProps & {title: string}> = ({
  title,
  ...props
}) => {
  const style = useThemedStyles(styles);
  return (
    <TouchableOpacity {...props} style={[style.root, props.style]}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (theme: Theme) => StyleSheet.create({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
