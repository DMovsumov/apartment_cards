import {AppDispatch} from "../index";
import axios from "axios";
import {AppActionEnum, Flat} from "../types/app";

export const getData = () => async (dispatch: AppDispatch) => {
    const {data}: any = await axios.get('http://localhost:4000/response')

    dispatch({
        type: AppActionEnum.GET_DATA,
        payload: data
    })
}
