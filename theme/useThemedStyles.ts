import useTheme from './useTheme.ts';
import {useMemo} from 'react';
import {Theme} from './Theme.types.ts';

export const useThemedStyles = <T>(styles: (theme: Theme) => T) => {
  const theme = useTheme();
  return useMemo(() => styles(theme), [styles, theme]);
};
