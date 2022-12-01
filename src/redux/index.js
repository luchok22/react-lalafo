import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { housesSliceReducer } from "./housesSlice";

import { authSliceReducer } from "./authSlice"

const reducers = combineReducers({
    houses: housesSliceReducer, 
    auth: authSliceReducer, 
})


export const store = configureStore({
    reducer: reducers
});

store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem('auth', JSON.stringify(state.auth.isAuth))
});

console.log(store)
console.log(store.getState())