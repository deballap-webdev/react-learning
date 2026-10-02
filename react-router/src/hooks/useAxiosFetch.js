import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useState(() => {
    const controller = new AbortController();
    let isMounted = true;

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          signal: controller.signal,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setData([]);
          setFetchError(err.message);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      controller.abort();
    };

    return cleanUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
