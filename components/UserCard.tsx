import {Image, ListRenderItemInfo, StyleSheet} from 'react-native';
import {GithubUser} from '../api/api.types.ts';
import Paper from './Paper.tsx';
import React, {useCallback} from 'react';
import {Theme} from '../theme/Theme.types.ts';
import {useThemedStyles} from '../theme/useThemedStyles.ts';
import PaperText from './PaperText.tsx';
import Checkbox from './Checkbox.tsx';
import Button from './Button.tsx';
import Config from '../Config.ts';

type UserCardProps = ListRenderItemInfo<GithubUser> & {
  selected?: boolean;
  onSelect?: (id: string, value: boolean) => void;
};

const UserCard = ({item, selected, onSelect}: UserCardProps) => {
  const style = useThemedStyles(styles);
  const handleSelect = useCallback((value: boolean) => {
    onSelect?.(item.id, value);
  }, [item.id, onSelect]);

  return (
    <Paper style={style.root}>
      {Config.editable && <Checkbox style={style.checkbox} value={selected} onValueChange={handleSelect}/>}
      <Image style={style.avatar}
             source={{uri: item.avatar_url}} />
      <PaperText style={style.text}>{item.id}</PaperText>
      <PaperText style={style.text}>{item.login}</PaperText>
      <Button title={'View profile'} style={style.button}/>
    </Paper>
  );
};

export default UserCard;

const styles = (theme: Theme) => StyleSheet.create({
  root: {
    marginHorizontal: theme.spacing(2),
    alignItems: 'center',
    borderRadius: theme.spacing(4),
  },
  checkbox: {
    position: 'absolute',
    left: theme.spacing(2),
    top: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: '50%',
    margin: theme.spacing(0.5),
  },
  text: {
    textAlign: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
  },
});
