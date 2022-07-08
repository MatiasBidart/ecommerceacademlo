import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./slices/getInfo.slice";
import isLoading from "./slices/isLoading.slice";

export default configureStore({
    reducer: {
        infoSlice,
        isLoading
    }
})
