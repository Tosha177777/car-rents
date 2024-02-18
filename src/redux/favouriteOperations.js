import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestId } from 'services/favApi';

const getFavIdThunk = createAsyncThunk(
  'fav/getId',
  async (formData, thunkAPI) => {
    try {
      const response = await requestId(formData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export { getFavIdThunk };
