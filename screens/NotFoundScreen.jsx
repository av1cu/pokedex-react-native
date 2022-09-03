import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function NotFoundScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 bg-slate-200'>
      <TouchableOpacity>
        <View className='px-3 pt-3 mb-2'>
          <Ionicons
            name='arrow-back-sharp'
            size={24}
            color='black'
            onPress={() => navigation.goBack()}
          />
        </View>
      </TouchableOpacity>
      <View className='flex-1 items-center justify-center'>
        <Text className='text-zinc-800'>Pokemon not found. Try again.</Text>
      </View>
    </SafeAreaView>
  );
}
