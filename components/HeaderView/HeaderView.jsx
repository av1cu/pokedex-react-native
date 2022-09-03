import { View, Text, Image } from 'react-native';
import React from 'react';

export default function HeaderView() {
  return (
    <View className='bg-red-500 p-3 w'>
      <Text className='text-white'>Pokedex</Text>
    </View>
  );
}
