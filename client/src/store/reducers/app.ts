import {State, AppAction, AppActionEnum} from "../types/app";

const initialState: State = {
    flats: []
}

const app = (state = initialState, action: AppAction) => {
    switch (action.type){
        case AppActionEnum.GET_DATA:
            return {
                ...state,
                flats: action.payload
            }
        default:
            return state
    }
}

export default app;
