import {SET_PLAYERS, RESET_PLAYERS, SET_TEMP_USER_NAME, RESET_DATA_BATTLE} from "./battle.actions";
import {AnyAction} from "redux";


const initialState:IBattleState  = {
    playerOneImage: null,
    playerTwoImage: null,
    playerOneName: '',
    playerTwoName: '',
}

interface IBattleState {
    playerOneImage: string | null,
    playerTwoImage: string | null,
    playerOneName: string,
    playerTwoName: string,
}

export const battleReducer = (state: IBattleState = initialState, action: AnyAction):IBattleState => {
    switch (action.type) {
        case SET_PLAYERS:
            return {
                ...state,
                [`${action.id}Name`]: action.userName,
                [`${action.id}Image`]: `https://github.com/${action.userName}.png?size200`,
            }
        case SET_TEMP_USER_NAME:
            return {
                ...state,
                [`${action.id}Name`]: action.userName,
            }
        case RESET_PLAYERS:
            return {
                ...state,
                [`${action.id}Name`]: '',
                [`${action.id}Image`]: null,
            }
        case RESET_DATA_BATTLE:
            return initialState;
        default:
            return state;
    }

}