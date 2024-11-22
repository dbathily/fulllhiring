import React, {FC, useCallback, useMemo} from 'react';
import {CheckboxProps} from './Checkbox.types.ts';
import {Image, Pressable, StyleSheet} from 'react-native';
import {Theme} from '../theme/Theme.types.ts';
import {useThemedStyles} from '../theme/useThemedStyles.ts';
import {checkedIcon, indeterminateIcon, uncheckIcon} from '../assets/icons';

const Checkbox: FC<CheckboxProps> = ({
  disabled,
  onValueChange,
  value,
  indeterminated,
  ...props
}) => {
  const checkboxStyle = useThemedStyles(styles);

  const handleChange = useCallback(
    () => onValueChange?.(!value),
    [onValueChange, value],
  );

  const source = useMemo(() => {
    if (value === true) {
      return checkedIcon;
    } else if (indeterminated === true) {
      return indeterminateIcon;
    } else {
      return uncheckIcon;
    }
  }, [value, indeterminated]);

  return (
    <Pressable {...props}
               accessibilityRole="checkbox"
               accessibilityState={{ disabled, checked: value }}
               disabled={disabled}
               onPress={handleChange}>
      <Image style={[checkboxStyle.root]} source={source} />
    </Pressable>
  );
};

const styles = (theme: Theme) => StyleSheet.create({
  root: {
    height: theme.spacing(3),
    width: theme.spacing(3),
  },
});

export default Checkbox;
