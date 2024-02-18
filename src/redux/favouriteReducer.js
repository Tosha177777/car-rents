import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getFavIdThunk } from './favouriteOperations';

const INITIAL_STATE = {
  favourites: [],
  isLoading: false,
  error: null,
};

const favSlice = createSlice({
  name: 'fav',
  initialState: INITIAL_STATE,
  reducers: {
    toggleFavourite: (state, action) => {
      const { id } = action.payload;
      const index = state.favourites.findIndex(fav => fav.id === id);
      if (index !== -1) {
        state.favourites = state.favourites.filter(fav => fav.id !== id);
      } else {
        state.favourites.push(action.payload);
      }
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getFavIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favourites.push(action.payload);
      })
      .addMatcher(isAnyOf(getFavIdThunk.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(getFavIdThunk.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const favReducer = favSlice.reducer;

export const { toggleFavourite } = favSlice.actions;
