import {getAllUserData} from "../../utils/api";
import {getError, getLoser, getWinner} from "./result.actions";


// @ts-ignore
export const getFinalData = (searchFirstPlayer, searchSecondPlayer) => (dispatch)=> {
    getAllUserData(searchFirstPlayer, searchSecondPlayer)
        .then((data) => {
            if (data && "firstPlayer" in data && "secondPlayer" in data) {
                if (data.firstPlayer.score > data.secondPlayer.score) {
                    dispatch(getWinner(data.firstPlayer));
                    dispatch(getLoser(data.secondPlayer));
                } else {
                    dispatch(getWinner(data.secondPlayer));
                    dispatch(getLoser(data.firstPlayer));
                }
            }
        })
        .catch(error => dispatch(getError(error)));
}



