
import { Card, Grid } from '@nextui-org/react';
import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts';
import { FavoritePokemon } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {

      setFavoritePokemon( localFavorites.pokemons() )

  }, []);

  return (
      <Layout title='Pokémons - Favoritos'>
        <h1>Favoritos</h1>

        {
          favoritePokemon.length === 0
          ? (<NoFavorites />) 
          : (<FavoritePokemon pokemons={ favoritePokemon } />)
          }
      </Layout>
  )
};

export default FavoritesPage;
