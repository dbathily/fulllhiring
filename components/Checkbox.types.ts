import {ViewProps} from 'react-native';

export type CheckboxProps = ViewProps & {
  value?: boolean;
  disabled?: boolean;
  indeterminated?: boolean;
  onValueChange?: (value: boolean) => void;
};
