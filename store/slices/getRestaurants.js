import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// const get = new Api();
export const getRestaurants = createAsyncThunk('get', async thunkApi => {
  try {
    fetch('https://pernstackbackend.herokuapp.com/api/v1/restaurants')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => {
        console.error(error);
      });
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const getRestaurantsSlice = createSlice({
  name: 'get restaurants',
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
