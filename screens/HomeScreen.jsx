import React, { useEffect, useLayoutEffect } from 'react';
import SearchView from './../components/SearchView/SearchView';
import { useDispatch } from 'react-redux';
import { setError, setTypes } from './../store/reducer';
import { getTypes } from './../api/api';
import { SafeAreaView } from 'react-native-safe-area-context';
import PokemonsView from './../components/PokemonsView/PokemonsView';

export default function HomeScreen() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {}, []);

  useEffect(() => {
    loadData();
  }, []);

  async function loadTypes() {
    try {
      const response = await getTypes();
      if (response.results) {
        dispatch(setTypes(response.results));
      }
    } catch (e) {
      dispatch(setError(true));
    }
  }

  function loadData() {
    loadTypes();
  }

  return (
    <SafeAreaView className='flex-1'>
      <SearchView />
      <PokemonsView />
    </SafeAreaView>
  );
}
