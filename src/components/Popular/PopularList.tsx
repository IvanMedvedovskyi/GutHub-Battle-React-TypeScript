import {FC, memo, ReactElement} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

const PopularList: FC = memo((): ReactElement => {
    const repos = useSelector((state: IPopularListState) => state.popular.repos);
    const error = useSelector((state: IPopularListState) => state.popular.error);

    if(error) {
        return <p>{error}</p>
    }

    return (
        <ul className='popular-list'>
            {repos ? repos.map((repo: Repository, index: number) => {
                return (
                    <li key={repo.id} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul>
                            <li><img className='avatar' src={repo.owner.avatar_url} alt="Avatar"/></li>
                            <li><a href={repo.html_url} target='_blank'>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count}</li>
                        </ul>
                    </li>
                )
            }) :  <p>Ooops...</p>}
        </ul>
        )
})

type Repository = {
    id: number;
    owner: {
        avatar_url: string;
        login: string;
    };
    html_url: string;
    name: string;
    stargazers_count: number;
};

interface IPopularListState {
    popular: {
        repos: any[],
        error: string | null,
    }
}


export default PopularList;