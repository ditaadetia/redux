import { createSlice } from "@reduxjs/toolkit";
import { authLoginApi } from "./action";

const initialState = {
    isLoading: false,
    isError: false,
    users: []
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(authLoginApi.pending, (state, {payload}) => {
            state.isLoading = true;
        })
        .addCase(authLoginApi.fulfilled, (state, {payload}) => {
            state.isLoading=false;
            state.users = payload;
        })
        .addCase(authLoginApi.rejected, (state) =>{
            state.isLoading = false;
            state.isError = true;
        })
    }
});

export default authSlice.reducer
export const { setUsers } = authSlice.actions;