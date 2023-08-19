import {combineReducers} from "redux";
import {popularReducer} from "./popular/popular.reducer";
import {battleReducer} from "./battle/battle.reducer";
import {resultReducer} from "./result/result.reducer";


export default combineReducers({
    popular: popularReducer,
    battle: battleReducer,
    result: resultReducer,
})

