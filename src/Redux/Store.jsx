import { configureStore } from "@reduxjs/toolkit";
import { CryptoSlice } from "./Slices/CryptoSlice";
import CryptoDetailReducer from './Slices/CryptoSlice'


export const Store = configureStore({
    reducer: {
        crypto: CryptoDetailReducer
    }
})