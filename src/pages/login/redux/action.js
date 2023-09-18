import {createAsyncThunk} from '@reduxjs/toolkit';

function callLoginApi(username, password){
    return new Promise(function(resolve,reject){
        setTimeout(() =>{
            if(username === 'admin' && password === 'admin'){
                resolve({username})
            }else{
                reject('invalid username or email')
            }
        }, 1000)
    })
}

export const authLoginApi = createAsyncThunk('auth/login', async({username, password}) => {
    try{
        const res = await callLoginApi(username, password)
        const data = await res.username
        return data;
    } catch(error){
        console.log(error)
    }
});