import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  types: [],
  pokemon: {},
  type: {},
  error: false,
  loading: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setPokemons: (state, action) => {
      action.payload.forEach((pokemon) => state.pokemons.push(pokemon));
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setError,
  setTypes,
  setPokemon,
  setType,
  setPokemons,
  setLoading,
} = mainSlice.actions;

export default mainSlice.reducer;
