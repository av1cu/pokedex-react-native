import { View, Text, ScrollView } from 'react-native';
import React from 'react';

export default function TypeListElemView({ prop, type, highlightType }) {
  return (
    <View className='mb-3'>
      <Text className='capitalize text-xl text-zinc-800 mb-1'>
        {prop.split('_').join(' ')}
      </Text>
      {type.damage_relations[prop].length > 0 && (
        <ScrollView
          horizontal={true}
          className='gap-2'
          showsHorizontalScrollIndicator={false}
        >
          {type.damage_relations[prop].map((i, index) => (
            <View key={index}>
              <View className={`p-4 ${highlightType(i.name)} rounded-2xl`}>
                <Text className='font-bold capitalize text-white'>
                  {i.name}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
