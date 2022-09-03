import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getType } from './../../api/api';
import { setError, setType } from './../../store/reducer';

export default function TypesView() {
  const types = useSelector((state) => state.main.types);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function loadType(name) {
    try {
      const response = await getType(name.toLowerCase());
      if (response.id) {
        dispatch(setType(response));
        navigation.navigate('Type');
      } else {
        dispatch(setError(true));
        navigation.navigate('NotFound');
      }
    } catch (e) {
      dispatch(setError(true));
      navigation.navigate('NotFound');
    }
  }

  function highlightType(name) {
    switch (name) {
      case 'normal':
        return 'bg-stone-400';
      case 'fighting':
        return 'bg-orange-400';
      case 'flying':
        return 'bg-sky-400';
      case 'poison':
        return 'bg-indigo-400';
      case 'ground':
        return 'bg-amber-400';
      case 'rock':
        return 'bg-yellow-400';
      case 'bug':
        return 'bg-lime-400';
      case 'steel':
        return 'bg-stone-400';
      case 'ghost':
        return 'bg-purple-400';
      case 'fire':
        return 'bg-red-400';
      case 'water':
        return 'bg-blue-400';
      case 'grass':
        return 'bg-green-400';
      case 'electric':
        return 'bg-yellow-400';
      case 'psychic':
        return 'bg-fuchsia-400';
      case 'ice':
        return 'bg-teal-400';
      case 'dragon':
        return 'bg-indigo-400';
      case 'dark':
        return 'bg-violet-400';
      case 'fairy':
        return 'bg-pink-400';
      case 'unknown':
        return 'bg-stone-400';
      case 'shadow':
        return 'bg-violet-400';
    }
  }

  return (
    <View className='mb-4'>
      <View className='mb-2 px-3'>
        <Text className='font-bold text-xl text-zinc-800'>Types</Text>
        <Text className='font-semibold text-zinc-800'>
          Learn more about damage relations
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        className='gap-2'
        showsHorizontalScrollIndicator={false}
      >
        {types.map((type, index) => (
          <TouchableOpacity key={index} onPress={() => loadType(type.name)}>
            <View className={`p-4 ${highlightType(type.name)} rounded-2xl`}>
              <Text className='font-bold capitalize text-white'>
                {type.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
