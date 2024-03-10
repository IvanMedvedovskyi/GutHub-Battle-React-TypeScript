import axios from "axios";
import {AxiosResponse} from "axios";


const handleError = (error: unknown): void => console.log(error)

export const fetchPopularRepos = (language: string) => {
    const encodedLanguage = encodeURIComponent(language);
    const url = `https://api.github.com/search/repositories?q=stars:>1+language:${encodedLanguage}&sort=stars&order=desc&type=Repositories`;

    return axios.get(url)
        .then((response: AxiosResponse) => response.data.items)
        .catch(handleError);
}

export const fetchGetRepos = (userName: string) => {
    const getReposReq = `https://api.github.com/users/${userName}/repos?per_page=100`;
    return axios.get(getReposReq)
        .then((response: AxiosResponse) => response.data)
        .catch(handleError)
}


export const fetchGetProfile = (userName: string) => {
    const getProfileReq = `https://api.github.com/users/${userName}`
    return axios.get(getProfileReq)
        .then((response: AxiosResponse) => response.data)
        .catch(handleError)
}


export const getAllUserData = async (playerOneName: string, playerTwoName: string) => {
    try {
        const [dataPlayerOne, dataPlayerSecond] = await Promise.all([
            Promise.all([fetchGetRepos(playerOneName), fetchGetProfile(playerOneName)]),
            Promise.all([fetchGetRepos(playerTwoName), fetchGetProfile(playerTwoName)])
        ]);

        const [reposFirstPlayer, profileFirstPlayer] = dataPlayerOne;
        const [reposSecondPlayer, profileSecondPlayer] = dataPlayerSecond;

        const starsFirstPlayer = reposFirstPlayer.reduce((total: number, item: { stargazers_count: number }) => total + item.stargazers_count, 0);
        const starsSecondPlayer = reposSecondPlayer.reduce((total: number, item: { stargazers_count: number }) => total + item.stargazers_count, 0);

        const scoreFirstPlayer = starsFirstPlayer + profileFirstPlayer.followers;
        const scoreSecondPlayer = starsSecondPlayer + profileSecondPlayer.followers;

        return {
            firstPlayer: {
                profile: profileFirstPlayer,
                repositories: reposFirstPlayer,
                stars: starsFirstPlayer,
                followers: profileFirstPlayer.followers,
                score: scoreFirstPlayer,
            },
            secondPlayer: {
                profile: profileSecondPlayer,
                repositories: reposSecondPlayer,
                stars: starsSecondPlayer,
                followers: profileSecondPlayer.followers,
                score: scoreSecondPlayer,
            },
        };
    } catch (error) {
        handleError(error);
    }
}


