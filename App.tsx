import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import useTheme from './theme/useTheme.ts';
import {Theme} from './theme/Theme.types.ts';
import Header from './components/Header.tsx';
import useDebounceValue from './hooks/useDebounceValue.ts';
import useAsync from './hooks/useAsync.ts';
import {searchGithubUsers} from './api/users.ts';
import UserCard from './components/UserCard.tsx';
import {GithubUser} from './api/api.types.ts';
import AppBar from './components/AppBar.tsx';
import {useThemedStyles} from './theme/useThemedStyles.ts';
import CommonText from './components/CommonText.tsx';

function App(): React.JSX.Element {
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const query = useDebounceValue(search);
  const [state, fetch, reset] = useAsync(searchGithubUsers);
  const [selections, setSelections] = useState<string[] | undefined>(undefined);
  //Because data is locally mutable with copy and delete actions
  const [data, setData] = useState<GithubUser[] | undefined>(undefined);

  const selectAll = useCallback(
    (value: Boolean) =>
      setSelections(value ? data?.map(item => item.id) : undefined),
    [data, setSelections],
  );

  const select = useCallback((id: string, value: boolean) => {
    setSelections(prev => {
      if (prev === undefined) {
        return [id];
      } else if (value) {
        return [...prev, id];
      } else {
        return prev.filter(item => item !== id);
      }
    });
  }, []);

  const copy = useCallback(() => {
    setData(prev =>
      prev
        ?.filter(item => selections?.includes(item.id))
        ?.map(item => ({...item, id: `${item.id}-copy-${prev?.length}`}))
        ?.concat(prev),
    );
  }, [selections]);

  const remove = useCallback(() => {
    setData(prev => prev?.filter(item => !selections?.includes(item.id)));
    setSelections(undefined);
  }, [selections]);

  useEffect(() => {
    const q = query.trim();
    if (q !== '') {
      fetch(q);
    } else {
      reset();
    }
  }, [fetch, query, reset]);

  useEffect(() => {
    setSelections(undefined);
  }, [state.data?.items]);

  useEffect(() => {
    setData(state.data?.items);
  }, [state.data?.items]);

  const style = useThemedStyles(styles);

  const renderItem = useCallback(
    (props: ListRenderItemInfo<GithubUser>) => (
      <UserCard
        {...props}
        selected={selections?.includes(props.item.id)}
        onSelect={select}
      />
    ),
    [select, selections],
  );

  return (
    <SafeAreaView style={style.root}>
      <StatusBar
        barStyle={theme.bareStyle}
        backgroundColor={style.root.backgroundColor}
      />
      <AppBar />
      <FlatList
        style={style.list}
        contentContainerStyle={style.container}
        indicatorStyle={theme.indicatorStyle}
        ListHeaderComponent={
          <Header
            value={search}
            onChangeText={setSearch}
            selected={selections?.length}
            total={data?.length}
            onSelectAll={selectAll}
            onCopy={copy}
            onRemove={remove}
          />
        }
        ListEmptyComponent={data != null ? <CommonText style={style.emptyText}>No results</CommonText> : undefined}
        stickyHeaderIndices={[0]}
        refreshing={state.loading}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        removeClippedSubviews={true}
        initialNumToRender={10}
      />
    </SafeAreaView>
  );
}

const styles = (theme: Theme) => StyleSheet.create({
  root: {
    backgroundColor: theme.palette.background.main,
    flex: 1,
  },
  list: {
    flex: 1,
  },
  container: {
    gap: theme.spacing(2),
  },
  emptyText: {
    textAlign: 'center',
  },
});

export default App;
