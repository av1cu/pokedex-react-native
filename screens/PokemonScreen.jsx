import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function PokemonScreen() {
  const pokemon = useSelector((state) => state.main.pokemon);
  const navigation = useNavigation();

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
    <SafeAreaView className='flex-1 flex flex-col'>
      {pokemon && pokemon.name && (
        <ScrollView
          className={`flex-1 ${highlightType(pokemon.types[0].type.name)}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <TouchableOpacity>
            <View className='px-3 pt-3 mb-2'>
              <Ionicons
                name='arrow-back-sharp'
                size={24}
                color='white'
                onPress={() => navigation.goBack()}
              />
            </View>
          </TouchableOpacity>
          <View className='flex self-center items-center'>
            <Text className='capitalize text-white font-bold text-3xl mb-5'>
              {pokemon.name} (ID: {pokemon.id})
            </Text>
            <Image
              source={{
                uri: pokemon.sprites.other['official-artwork'].front_default,
              }}
              style={{
                width: 250,
                height: 250,
              }}
              className='mb-5'
            />
          </View>
          <View className='bg-white rounded-t-2xl flex-1 p-3'>
            <Text className='text-xl text-zinc-800 mb-1'>About</Text>
            <View className='flex flex-row gap-3'>
              <Text className='text-zinc-500'>Weight</Text>
              <Text className='text-zinc-800'>{pokemon.weight / 10}kg</Text>
            </View>
            <View className='flex flex-row gap-3'>
              <Text className='text-zinc-500'>Height</Text>
              <Text className='text-zinc-800'>{pokemon.height / 10}m</Text>
            </View>
            <View className='flex flex-row gap-3 mb-2'>
              <Text className='text-zinc-500'>Abilities</Text>
              {pokemon.abilities.map((ab) => (
                <Text className='text-zinc-800 capitalize'>
                  {ab.ability.name}
                </Text>
              ))}
            </View>
            <Text className='text-xl text-zinc-800 mb-1'>Base</Text>
            {pokemon.stats.map((stat, index) => (
              <View className='flex flex-row gap-1' key={index}>
                <Text className='text-zinc-500 capitalize'>
                  {stat.stat.name}
                </Text>
                <Text className='text-zinc-800'>{stat.base_stat}</Text>
              </View>
            ))}
            <Text className='text-zinc-800 text-xl mb-1'>Types</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              className='gap-1 flex-initial'
            >
              {pokemon.types.map((type) => (
                <View
                  key={type.slot}
                  className={`p-4 ${highlightType(type.type.name)} rounded-2xl`}
                >
                  <Text className='font-bold capitalize text-white'>
                    {type.type.name}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
