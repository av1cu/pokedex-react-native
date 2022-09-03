import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { getList } from './../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setPokemons } from './../../store/reducer';
import { useEffect } from 'react';
import PokemonItemView from './../PokemonItemView/PokemonItemView';
import TypesView from './../TypesView/TypesView';

export default function PokemonsView() {
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.main.pokemons);
  const loading = useSelector((state) => state.main.loading);

  useEffect(() => {
    loadPokemons();
  }, [offset]);

  function loadMore() {
    if (offset >= total || loading) {
      return;
    }
    dispatch(setLoading(true));
    setOffset(offset + 20);
  }

  async function loadPokemons() {
    const response = await getList(offset);
    if (response.results) {
      setTotal(response.count);
      dispatch(setPokemons(response.results));
      dispatch(setLoading(false));
    }
  }

  return (
    <View className='flex-1 bg-slate-100'>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => <PokemonItemView pokemon={item} />}
        keyExtractor={(item, index) => index}
        onEndReached={loadMore}
        numColumns={2}
        ItemSeparatorComponent={() => <View className='h-2' />}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ListHeaderComponent={<TypesView />}
        ListFooterComponent={
          loading && (
            <View className='p-3'>
              <ActivityIndicator size='large' color='#a1a6ad' />
            </View>
          )
        }
        className='px-1 py-2'
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
