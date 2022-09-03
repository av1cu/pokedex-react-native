import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { setError, setPokemon } from './../../store/reducer';
import { getPokemon } from './../../api/api';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

export default function PokemonItemView({ pokemon }) {
  const [image, setImage] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    getImageUrl();
  }, []);

  function getImageUrl() {
    const url = pokemon.url.split('/').filter((i) => i != '');
    setImage(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        url[url.length - 1]
      }.png`
    );
  }

  async function loadPokemon() {
    try {
      const response = await getPokemon(pokemon.name.toLowerCase());
      if (response.id) {
        dispatch(setPokemon(response));
        navigation.navigate('Pokemon');
      } else {
        dispatch(setError(true));
        navigation.navigate('NotFound');
      }
    } catch (e) {
      dispatch(setError(true));
      navigation.navigate('NotFound');
    }
  }

  return (
    <TouchableOpacity
      className='p-5 bg-white rounded-2xl flex items-center'
      style={{ width: '49%' }}
      onPress={loadPokemon}
    >
      <View>
        {image && (
          <Image source={{ uri: image }} style={{ width: 80, height: 80 }} />
        )}
        <Text className='text-zinc-500 text-center capitalize font-semibold'>
          {pokemon.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
