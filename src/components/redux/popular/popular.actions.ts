import {Action, AnyAction} from "redux";

export const SET_SELECTED_LANGUAGE = 'SET_SELECTED_LANGUAGE';
export const GET_REPOS_LOADING = 'GET_REPOS_LOADING'
export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS'
export const GET_REPOS_FAILURE = 'GET_REPOS_FAILURE'

export const setSelectedLanguage = (payload: string): AnyAction => ({
    type: SET_SELECTED_LANGUAGE,
    payload,
})

export const getReposLoading = (): Action => ({
    type: GET_REPOS_LOADING,
})

export const getReposSuccess = (payload: any[]): AnyAction => ({
    type: GET_REPOS_SUCCESS,
    payload,
})

export const getReposFailure = (payload: string): AnyAction => ({
    type: GET_REPOS_FAILURE,
    payload,
})