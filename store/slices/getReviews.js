import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// const get = new Api();
export const getReviews = createAsyncThunk(
  'get/restaurants',
  async thunkApi => {
    try {
      const response = await axios.get(
        'https://pernstackbackend.herokuapp.com/api/v1/reviews',
      );
      console.log(response, 'response data');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

const getReviewsSlice = createSlice({
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
    [getReviews.pending]: state => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    [getReviews.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.success = true;
      state.data = payload;
    },
    [getReviews.rejected]: (state, {payload}) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.errorData = payload;
    },
  },
});
export default getReviewsSlice.reducer;
