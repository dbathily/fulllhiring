import {useColorScheme} from 'react-native';
import {useMemo} from 'react';
import {darkTheme, lightTheme} from './Themes.ts';
import {Theme} from './Theme.types.ts';

const useTheme: () => Theme = () => {
  const colorScheme = useColorScheme();
  return useMemo(() => {
    if (colorScheme === 'dark') {
      return darkTheme;
    } else {
      return lightTheme;
    }
  }, [colorScheme]);
};

export default useTheme;
