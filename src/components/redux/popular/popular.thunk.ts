import {getReposLoading, getReposFailure, getReposSuccess} from "./popular.actions";
import {fetchPopularRepos} from "../../utils/api";
import {AppDispatch} from "../store";

// @ts-ignore
export const getRepos = (selectedLanguage) => (dispatch) => {
    dispatch(getReposLoading());
    fetchPopularRepos(selectedLanguage)
        .then(data => dispatch(getReposSuccess(data)))
        .catch(error => dispatch(getReposFailure(error)))
}