import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import TypeListElemView from './../components/TypeListElemVIew/TypeListElemView';

export default function TypeScreen() {
  const navigation = useNavigation();
  const type = useSelector((state) => state.main.type);

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

  function getRelations() {
    const data = [];

    for (const prop in type.damage_relations) {
      data.push(
        <TypeListElemView
          prop={prop}
          type={type}
          highlightType={highlightType}
        />
      );
    }

    return data;
  }

  return (
    <SafeAreaView className='flex-1 flex flex-col'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={`${highlightType(type.name)}`}
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
        <View className='flex-1 mb-3'>
          <Text className='capitalize text-white text-2xl font-bold text-center'>
            {type.name}
          </Text>
        </View>
        <View className='bg-white rounded-t-2xl p-3'>
          {getRelations().map((i) => i)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
