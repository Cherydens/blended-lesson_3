import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const useFetchByRegion = () => {
  const [, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('query');
    if (!region) return;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  const onHandleSubmit = query => {
    setSearchParams({ query: query });
    setQuery(searchParams.get('query'));
  };

  return { countries, error, isLoading, onHandleSubmit };
};
