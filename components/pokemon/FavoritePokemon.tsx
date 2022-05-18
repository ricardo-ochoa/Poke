import { Card, Grid } from '@nextui-org/react';
import React, { FC } from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface Props {
    pokemons: number[];
}

export const FavoritePokemon: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
        {
            pokemons.map( id => (
                <FavoriteCardPokemon key={id} id={id}/>
            ))

        }
    </Grid.Container>
  )
}
