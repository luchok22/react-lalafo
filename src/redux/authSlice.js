import { createSlice } from "@reduxjs/toolkit";
 
const authSlice = createSlice({

    name: "houses",
    initialState: {
        isAuth: JSON.parse(localStorage.getItem('auth')),  
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = true
        },
        logout: (state) => {
            state.isAuth = false
        }
    }
});


export const authSliceActions = authSlice.actions
export const authSliceReducer = authSlice.reducer