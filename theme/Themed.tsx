import React, {ComponentType} from 'react';
import {useThemedStyles} from './useThemedStyles.ts';
import {Theme} from './Theme.types.ts';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';

const Themed = <S = any, T = any & {style?: StyleProp<S>}>(
  Component: ComponentType<T>,
  styles: (theme: Theme) => S,
) => {
  const Wrapped = (props: T) => {
    const style = useThemedStyles(styles);
    return <Component {...props} style={[style, props.style]} />;
  };
  return Wrapped;
};

export default Themed;
