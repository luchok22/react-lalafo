import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import API from "../api/api"

export const initialize = createAsyncThunk('houses/initialize', async () => {
    const res = await API.getAllAds()
    return res.data
})

export const deleteById = createAsyncThunk('houses/delete', async (id) => {
    await API.deleteID(id) 
    return id
})

export const addHouseCreate = createAsyncThunk('houses/adHouse', async (data) => {
    const rep = await API.createAd(data)
    return rep.data
})


const housesSlice = createSlice({
    name: "houses",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(initialize.fulfilled, (state, action) => {
            state.data = action.payload
        });
        builder.addCase(deleteById.fulfilled, (state, action) => {
            const newArr = state.data.filter((item) => item.id !== action.payload)
            state.data = newArr;
        })
        builder.addCase(addHouseCreate.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })  
    },
});

export const housesSliceActions = housesSlice.actions
export const housesSliceReducer = housesSlice.reducer