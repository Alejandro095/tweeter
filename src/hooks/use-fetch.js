import "isomorphic-fetch";

import { useState } from "react";

export default function useFetch() {
  const [data, setData] = useState();
  const [error, setError] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const fetchFunction = (url, options) => {
    setIsFetching(true);

    fetch(url, options)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsFetching(false);
      })
      .catch(setError);
  };

  return [fetchFunction, data, isFetching, error];
}
