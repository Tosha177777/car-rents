import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllCarsThunk } from './catalogOperations';

const INITIAL_STATE = {
  allCars: [],
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(getAllCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allCars = action.payload;
      })

      .addMatcher(isAnyOf(getAllCarsThunk.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(getAllCarsThunk.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const catalogReducer = catalogSlice.reducer;
