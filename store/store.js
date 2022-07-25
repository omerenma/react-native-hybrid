import {configureStore} from '@reduxjs/toolkit'
import getRestaurants from './slices/getRestaurants'
import signin from './slices/signin'


const store = configureStore({
    reducer:{
        signin,
        // signup,
        getRestaurants
    }
})

export default store