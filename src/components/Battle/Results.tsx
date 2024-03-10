import {FC, ReactElement, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { ProgressBar } from  'react-loader-spinner';
import PlayerPreview from "./PlayerPreview";
import {useDispatch, useSelector} from "react-redux";
import {getFinalData} from "../redux/result/result.thunk";
import {resetResultData} from "../redux/result/result.actions";
import {resetBattleData} from "../redux/battle/battle.actions";


const Results:FC = ():ReactElement => {
    const location = useLocation();
    const dispatch = useDispatch();

    const loading = useSelector((state: IResultState)=> state.result.loading);
    const winner = useSelector((state: IResultState)=> state.result.winner)
    const loser = useSelector((state: IResultState)=> state.result.loser)
    const error = useSelector((state: IResultState)=> state.result.error)

    const resetPlayersData = () => {
        dispatch(resetResultData())
        dispatch(resetBattleData())
    }

    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const searchFirstPlayer = searchParams.get('playerOneName') || '';
      const searchSecondPlayer = searchParams.get('playerTwoName') || '';
      // @ts-ignore
      dispatch(getFinalData(searchFirstPlayer, searchSecondPlayer))

    }, [location.search, dispatch])

  return (
      <div>
          {loading ? (
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}>
                    <ProgressBar
                        height="80"
                        width="80"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor = '#F4442E'
                        barColor = '#51E5FF'
                    />
                </div>
            ) : error ? (
            <p>Ooops...</p>
          ) : winner && loser ? (
            <div className="row">
              <div className="winner-div">
              <h1>Winner:</h1>
              <PlayerPreview 
                avatar={winner.profile.avatar_url} 
                userName={winner.profile.login}
              >
                <div className="list">
                <ul className="space-list-item">
                  <li>Name: {winner.profile.name ? winner.profile.name : <span>no information</span>}</li>
                  <li>Location: {winner.profile.location ? winner.profile.location : <span>no information</span>}</li>
                  <li>Company: {winner.profile.company ? winner.profile.company : <span>no information</span>}</li>
                  <li>Followers: {winner.profile.followers ? winner.profile.followers : <span>no information</span>}</li>
                  <li>Following: {winner.profile.following ? winner.profile.following : <span>no information</span>}</li>
                  <li>Public Repositories: {winner.profile.public_repos ? winner.profile.public_repos : <span>no information</span>}</li>
                  <li>Blog: {winner.profile.blog ? <a href={winner.profile.blog} target="_blank">{winner.profile.blog}</a> : <span>no information</span>}</li>
                </ul>
                <h2>Score: {winner.score}</h2>
                </div>               
              </PlayerPreview>
              </div>
              
              <div className="loser-div">
              <h1>Loser:</h1>
              <PlayerPreview 
                avatar={loser.profile.avatar_url} 
                userName={loser.profile.login}
              >
                <div className="list">
                <ul className="space-list-item">
                  <li>Name: {loser.profile.name ? loser.profile.name : <span>no information</span>}</li>
                  <li>Location: {loser.profile.location ? loser.profile.location : <span>no information</span>}</li>
                  <li>Company: {loser.profile.company ? loser.profile.company : <span>no information</span>}</li>
                  <li>Followers: {loser.profile.followers ? loser.profile.followers : <span>no information</span>}</li>
                  <li>Following: {loser.profile.following ? loser.profile.following : <span>no information</span>}</li>
                  <li>Public Repositories: {loser.profile.public_repos ? loser.profile.public_repos : <span>no information</span>}</li>
                  <li>Blog: {loser.profile.blog ? <a href={loser.profile.blog} target="_blank">{loser.profile.blog}</a> : <span>no information</span>}</li>
                </ul>
                <h2>Score: {loser.score}</h2>
                </div>
              </PlayerPreview>
              </div>
            </div>
          ) : null}
          {loading ? (
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}>
                    <ProgressBar
                        height="80"
                        width="80"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor = '#F4442E'
                        barColor = '#51E5FF'
                    />
                </div>
            ) : <Link className="button" to={{ pathname: "/battle" }} onClick={resetPlayersData}>
              Reset
          </Link>
          }
      </div>
  )
}

interface IResultState {
    result: {
        [key: string]: any;
    };
}

export default Results;