import {configureStore} from '@reduxjs/toolkit';
import getRestaurants from './slices/getRestaurants';
import signin from './slices/signin';
import getRestaurantById from './slices/getRestaurantById';

const store = configureStore({
  reducer: {
    signin,
    // signup,
    getRestaurants,
    getRestaurantById,
  },
});

export default store;
