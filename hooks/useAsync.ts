import {useCallback, useMemo, useState} from 'react';

interface UseAsyncState<T> {
  loading: boolean;
  error?: any;
  data?: T;
}

const useAsync = <P extends any[], T>(fn: (...args: P) => Promise<T>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | undefined>();
  const [data, setData] = useState<T | undefined>();

  const fetch = useCallback((...args: P) => {
    setLoading(true);
    fn(...args)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [fn]);

  const reset = useCallback(() => {
    setData(undefined);
    setError(undefined);
    setLoading(false);
  }, []);

  const state: UseAsyncState<T> = useMemo(() =>
      ({loading, error, data}),
    [loading, error, data]
  );

  return [state, fetch, reset] as const;
};

export default useAsync;
