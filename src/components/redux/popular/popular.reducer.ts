import {SET_SELECTED_LANGUAGE, GET_REPOS_LOADING, GET_REPOS_SUCCESS, GET_REPOS_FAILURE} from "./popular.actions";
import {AnyAction} from "redux";

const initialState: IPopularState = {
    selectedLanguage: sessionStorage.getItem("selectedLanguage") || "All",
    loading: false,
    repos: [],
    error: null
}

interface IPopularState {
    selectedLanguage: string,
    loading: boolean,
    repos: any[]
    error: string | null,
}

export const popularReducer = (state: IPopularState = initialState, action: AnyAction): IPopularState => {

    switch (action.type) {
        case SET_SELECTED_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.payload
            }
        case GET_REPOS_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_REPOS_SUCCESS:
            return {
                ...state,
                loading: false,
                repos: action.payload
            }
        case GET_REPOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }

}
