
const initialState = {
    dataHome: 'kosongan',
};

const homeReducer = (state = initialState, action) => {
    console.log(action, 'ini di halaman home')
    return initialState;
};

export default homeReducer

