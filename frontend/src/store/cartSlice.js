import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
       cartUpdate: (state, action) => {
           state.value = [...state.value, action.payload]
       }
   }
})

export const { cartUpdate } = cartSlice.actions

export default cartSlice.reducer
