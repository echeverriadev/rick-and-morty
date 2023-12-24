import { Character, RickAndMortyAPIResponse } from "./rick-and-morty-api-response";

export interface Response {
  error: any;
  data: RickAndMortyAPIResponse;
  loading: boolean;
}