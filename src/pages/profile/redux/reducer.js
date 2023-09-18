// import { GANTI_ALAMAT, GANTI_PEMILIK } from "./constant";
import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./action";

const initialStateProfile = {
    lemariBaju: ['baju kuning', 'baju biru', 'dll'],
    toolBox : ['paku', 'baut', 'palu', 'obeng', 'dll'],
    pemilik: {
        name: 'dita',
        age: 20,
    },
    alamatStore: 'jalan jalan',
    users: [],
    isLoading: false,
    isError: false
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialStateProfile,
    reducers: {
      gantiAlamat: (state, {payload}) => {
        state.alamatStore = payload;
      },
      gantiPemilik: (state, {payload}) => {
        state.pemilik = payload;
      },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllUsers.pending, (state, {payload}) => {
            state.isLoading = true;
        })
        .addCase(getAllUsers.fulfilled, (state, {payload}) => {
            state.isLoading=false;
            state.users = payload;
        })
        .addCase(getAllUsers.rejected, (state) =>{
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export default profileSlice.reducer
export const { gantiAlamat, gantiPemilik, setUsers } = profileSlice.actions;