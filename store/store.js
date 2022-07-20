import {configureStore} from '@reduxjs/toolkit'
import getRestaurants from './slices/getRestaurants'


const store = configureStore({
    reducer:{
        // login,
        // signup,
        getRestaurants
    }
})

export default store