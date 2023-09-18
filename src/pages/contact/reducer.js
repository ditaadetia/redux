import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    phone: '+6289693'
};

// const contactReducer = ( state = initialState, action ) => {
//     if(action.type === 'GANTI_NOMOR'){
//         console.log(action, 'ini di halaman contact')
//         state.phone = action.phone;
//     }
//     return { ...state };
// };

// export default contactReducer

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
      changePhone: (state, action) => {
        state.phone = action.payload; // Use action.payload to update the phone value
      },
    },
});

export default contactSlice.reducer;
export const { changePhone } = contactSlice.actions;



