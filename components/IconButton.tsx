import React, {FC} from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Theme} from '../theme/Theme.types.ts';
import {useThemedStyles} from '../theme/useThemedStyles.ts';

const IconButton: FC<TouchableOpacityProps & Pick<ImageProps, 'source'>> = ({
  source,
  ...props
}) => {
  const style = useThemedStyles(styles);
  return (
    <TouchableOpacity {...props}>
      <Image style={style.image} source={source} />
    </TouchableOpacity>
  );
};

const styles = (theme: Theme) => StyleSheet.create({
  image: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
});

export default IconButton;
