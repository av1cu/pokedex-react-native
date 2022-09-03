import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../api/api';
import { setError, setLoading, setPokemon } from '../../store/reducer';
import { Ionicons } from '@expo/vector-icons';

export default function SearchView() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loading = useSelector((state) => state.main.loading);

  async function loadPokemon(id) {
    dispatch(setLoading(true));
    try {
      const response = await getPokemon(id.toLowerCase());
      if (response.id) {
        dispatch(setPokemon(response));
        setName('');
        navigation.navigate('Pokemon');
      } else {
        dispatch(setError(true));
        navigation.navigate('NotFound');
      }
    } catch (e) {
      dispatch(setError(true));
      navigation.navigate('NotFound');
    }
    dispatch(setLoading(false));
  }

  return (
    <View className='bg-white p-3 pb-6 rounded-b-2xl'>
      <Text className='font-bold text-2xl text-zinc-800'>What Pokemon</Text>
      <Text className='font-bold text-2xl text-zinc-800 mb-5'>
        are you looking for?
      </Text>
      <View className='flex flex-nowrap flex-row gap-1'>
        <TextInput
          placeholder='Search'
          className='py-2 px-3 bg-slate-100 rounded-2xl text-zinc-500 basis-1 flex-1'
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          blurOnSubmit={true}
          onSubmitEditing={() => {
            loadPokemon(name);
          }}
        />
        <View className='rounded-2xl bg-zinc-700 text-white uppercase pb-1 px-3 pt-3 flex-none'>
          <Ionicons
            name='search'
            onPress={() => {
              !loading && loadPokemon(name);
            }}
            color='white'
            size={20}
          />
        </View>
      </View>
    </View>
  );
}
