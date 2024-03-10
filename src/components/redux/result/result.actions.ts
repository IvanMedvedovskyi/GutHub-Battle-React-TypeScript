export const SET_WINNER = 'SET_WINNER';
export const SET_LOSER = 'SET_LOSER';
export const SET_ERROR = 'SET_ERROR';
export const RESET_DATA_RESULT = 'RESET_DATA_RESULT';


export const getWinner = (payload: object) => ({
    type: SET_WINNER,
    payload
})

export const getLoser = (payload: object) => ({
    type: SET_LOSER,
    payload
})

export const getError = (payload: unknown) => ({
    type: SET_ERROR,
    payload
})

export const resetResultData = () => ({
    type: RESET_DATA_RESULT,
})



