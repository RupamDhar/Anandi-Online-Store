import { configureStore } from '@reduxjs/toolkit'
import searchInputReducer from './states/searchInputSlice'

export const store = configureStore({
    reducer: {
        setSearchInput: searchInputReducer
    },
})