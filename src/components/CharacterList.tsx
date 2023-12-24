import { Response } from '@/interfaces/use-fetch-response';
import { useFetch } from '../hooks/useFetch';
import { CardCharacter } from './CardCharacter';
import { Character } from '@/interfaces/rick-and-morty-api-response';

export const CharacterList = () => {
  const { data: { results: characters }, loading, error }: Response = useFetch();
  if (loading) return <p>CARGANDO DUDE</p>;

  if (error) return <p>Ha ocurrido un error</p>;


  return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters?.map((character: Character) => (
          <CardCharacter key={character.id} character={character}/>
        ))}
      </div>
  )
}
