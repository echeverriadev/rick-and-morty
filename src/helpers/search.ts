import { RickAndMortyAPIResponse } from '@/interfaces/rick-and-morty-api-response';
import { api } from '../services/rick-and-morty.api';

export const getCharacters = async () => {
  try {
    const result = await api.get('/character');

    return result.data as RickAndMortyAPIResponse;
  } catch (error) {
    return error;
  }
};
