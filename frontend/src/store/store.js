import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice.js'
import productsReducer from './productSlice.js'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productsReducer,
    },
})