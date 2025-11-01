import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from './api';

export const fetchProductsAsync = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        return await fetchProducts();
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {
        // addUser: (state, action) => {
        //     state.users.push(action.payload);
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProductsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { addUser, removeUser } = productSlice.actions;

export default productSlice.reducer;