import PlayerInput from "./PlayerInput";
import {FC, ReactElement, useCallback} from "react";
import PlayerPreview from "./PlayerPreview";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {resetPlayers, setPlayers} from "../redux/battle/battle.actions";

const Battle:FC = ():ReactElement => {
    const dispatch = useDispatch();
    const players = useSelector((state: IBattleState) => state.battle)

    const SubmitHandler = useCallback((id: string, userName: string) => {
        dispatch(setPlayers(id, userName))
    }, [dispatch])

    const ResetHandler = (id: string) => {
        dispatch(resetPlayers(id))
    }

    return (
        <div>
            <div className='row'>
                {players.playerOneImage ?
                    <PlayerPreview
                        avatar={players.playerOneImage}
                        userName={players.playerOneName}
                    >
                        <button
                            className='reset'
                            onClick={() => ResetHandler('playerOne')}
                        >Reset
                        </button>
                    </PlayerPreview> :
                    <PlayerInput
                    id='playerOne'
                    userName={players.playerOneName}
                    label='Player 1'
                    onSubmit={SubmitHandler}
                />}
                {players.playerTwoImage ?
                    <PlayerPreview
                        avatar={players.playerTwoImage}
                        userName={players.playerTwoName}
                    >
                        <button
                            className='reset'
                            onClick={() => ResetHandler('playerTwo')}
                        >Reset
                        </button>
                    </PlayerPreview> :
                    <PlayerInput
                    id='playerTwo'
                    label='Player 2'
                    userName={players.playerTwoName}
                    onSubmit={SubmitHandler}
                />}
            </div>
            {players.playerOneImage && players.playerTwoImage ?
                <Link className='button' to={{
                    pathname: 'results',
                    search: `?playerOneName=${players.playerOneName}&playerTwoName=${players.playerTwoName}`
                }}>Battle</Link> : null
            }
        </div>
    );
}

interface IBattleState {
    battle: {
        [key: string]: string;
    };
}

export default Battle;