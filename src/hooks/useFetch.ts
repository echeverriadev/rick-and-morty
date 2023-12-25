import { useState, useEffect } from 'react';
import { getCharacters } from '../helpers/get-characters';
import { RickAndMortyAPIResponse } from '@/interfaces/rick-and-morty-api-response';

export const useFetch = () => {
  const [state, setState] = useState({
    data: {},
    loading: true,
    error: null
  });

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setState({
          data: data as RickAndMortyAPIResponse,
          loading: false,
          error: null
        });
      })
      .catch((error) => {
        setState({
          data: {},
          loading: false,
          error: error
        });
      });

    return () => {
      setState({
        data: {},
        loading: true,
        error: null
      });
    };
  }, []);

  return state;
};
