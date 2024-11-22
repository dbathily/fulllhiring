import React, {FC} from 'react';
import {Animated, StyleSheet, TextInput, TextInputProps} from 'react-native';
import {Theme} from '../theme/Theme.types.ts';
import {useThemedStyles} from '../theme/useThemedStyles.ts';
import Checkbox from './Checkbox.tsx';
import CommonText from './CommonText.tsx';
import IconButton from './IconButton.tsx';
import {copyIcon, deleteIcon} from '../assets/icons';
import View = Animated.View;
import Config from '../Config.ts';

type HeaderProps = Pick<TextInputProps, 'value' | 'onChangeText'> & {
  selected?: number;
  total?: number;
  onSelectAll: (value: boolean) => void;
  onCopy: () => void;
  onRemove: () => void;
};

const Header: FC<HeaderProps> = ({
  value,
  onChangeText,
  selected,
  total,
  onSelectAll,
  onCopy,
  onRemove,
}) => {

  const style = useThemedStyles(styles);

  const hasSelection = (selected ?? 0) > 0;
  const hasData = (total ?? 0) > 0;

  return (
    <View style={style.root}>
      <TextInput style={style.input}
                 placeholder="Search"
                 placeholderTextColor={style.input.color}
                 value={value}
                 onChangeText={onChangeText} />
      {hasData && Config.editable &&
        <View style={style.footer}>
          <Checkbox value={hasSelection && selected === total}
                    indeterminated={hasSelection && selected !== total}
                    onValueChange={onSelectAll}/>
          <CommonText style={style.selectedElements}>
            {hasSelection && <>{selected} element(s) selected</>}
          </CommonText>
          <View style={style.actions}>
            <IconButton source={copyIcon} disabled={!hasSelection} onPress={onCopy}/>
            <IconButton source={deleteIcon} disabled={!hasSelection} onPress={onRemove}/>
          </View>
        </View>
      }
    </View>
  );
};

const styles = (theme: Theme) => StyleSheet.create({
  root: {
    backgroundColor: theme.palette.background.main,
    marginHorizontal: theme.spacing(2),
  },
  input: {
    height: theme.spacing(6),
    marginVertical: theme.spacing(3),
    padding: theme.spacing(2),
    borderWidth: 1,
    borderColor: theme.palette.paper.main,
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.paper.main,
    color: theme.palette.paper.contrastText,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  selectedElements: {
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
  },
});

export default Header;
