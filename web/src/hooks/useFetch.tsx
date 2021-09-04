import { useState, useCallback } from 'react';

/**
 * Returns a stateful value ((transformed) response data), stateful
 * fetching status, stateful error status, and a function that sends a
 * request and sets the stateful data with the (transformed) response data.
 * @typeparam T - Type of stateful data.
 */
export const useFetch = <T,>(initState: T) => {
  const [data, setData] = useState<T>(initState);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const sendRequest = useCallback(
    async (
      requestConfig: {
        input: RequestInfo;
        init?: RequestInit;
      },
      dataTransformFn?: (fetchedData: any) => T
    ) => {
      setIsFetching(true);
      setError(false);
      try {
        const res = await fetch(requestConfig.input, requestConfig.init);

        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();

        if (dataTransformFn) {
          const transformedData = dataTransformFn(data);
          setData(transformedData);
        } else {
          // No data transformation needed.
          setData(data as T);
        }
        setIsFetching(false);
      } catch {
        setError(true);
        setIsFetching(false);
      }
    },
    []
  );

  return { data, isFetching, error, sendRequest };
};
