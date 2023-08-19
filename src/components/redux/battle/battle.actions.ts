import {Action, AnyAction} from "redux";

export const SET_PLAYERS = 'SET_PLAYERS';
export const RESET_PLAYERS = 'RESET_PLAYERS';
export const SET_TEMP_USER_NAME = 'SET_TEMP_USER_NAME';
export const RESET_DATA_BATTLE = 'RESET_DATA_BATTLE';

export const setTempUserName = (id: string, userName: string): AnyAction => ({
    type: SET_TEMP_USER_NAME,
    id,
    userName,
});

export const setPlayers = (id: string, userName: string): AnyAction => ({
    type: SET_PLAYERS,
    id,
    userName,
})

export const resetPlayers = (id: string): AnyAction => ({
    type: RESET_PLAYERS,
    id,
})

export const resetBattleData = (): Action => ({
    type: RESET_DATA_BATTLE,
})
