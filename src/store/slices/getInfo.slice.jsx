import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { setIsLoadingGlobal } from "./isLoading.slice";

export const infoSlice = createSlice({
    name:'infoSlice',
    initialState: [],
    reducers:{
       setInfo: (state, action) => action.payload
    }
}
)

export const { setInfo } = infoSlice.actions
export const getInfo = () => (dispatch) => {
    dispatch(setIsLoadingGlobal(true))
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products`
    return axios.get(URL)
    .then(({data}) =>dispatch(setInfo(data.data.products)))
    .catch(err => console.log(err))
    .finally(()=> dispatch(setIsLoadingGlobal(false)))
}

export default infoSlice.reducer;
