import React, {StyleSheet, Text, View} from 'react-native';
import {Theme} from '../theme/Theme.types.ts';
import {useThemedStyles} from '../theme/useThemedStyles.ts';

const AppBar = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.root}>
      <Text style={style.title}>Github Search</Text>
    </View>
  );
};

const styles = (theme: Theme) => StyleSheet.create({
  root: {
    padding: theme.spacing(2),
    height: theme.spacing(8),
    backgroundColor: theme.palette.appBar.main,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.palette.appBar.contrastText,
  },
});

export default AppBar;
