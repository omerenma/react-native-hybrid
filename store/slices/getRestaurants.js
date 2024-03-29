import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// const get = new Api();
export const getRestaurants = createAsyncThunk(
  'get/restaurants',
  async thunkApi => {
    try {
      const response = await axios.get(
        'https://pernstackbackend.herokuapp.com/api/v1/restaurants',
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

const getRestaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    loading: false,
    success: false,
    error: false,
    data: {},
    errorData: {},
  },
  reducers: {},
  extraReducers: {
    [getRestaurants.pending]: state => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    [getRestaurants.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.success = true;
      state.data = payload;
    },
    [getRestaurants.rejected]: (state, {payload}) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.errorData = payload;
    },
  },
});
export default getRestaurantsSlice.reducer;
