import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars, getAllCars } from 'services/api';

const getAllCarsThunk = createAsyncThunk('cars/getAll', async (_, thunkAPI) => {
  try {
    const response = await getAllCars();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const getPagCarsThunk = createAsyncThunk(
  'cars/getAll',
  async (formData, thunkAPI) => {
    try {
      const response = await fetchCars(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export { getAllCarsThunk, getPagCarsThunk };
