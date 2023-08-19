import { useNavigate, useLocation } from 'react-router-dom';
import {FC, memo, useEffect} from 'react';
import {setSelectedLanguage} from "../redux/popular/popular.actions";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../redux/popular/popular.thunk";

interface LanguageTabsProps {
    loading: boolean;
}

interface ILanguageTabsState {
    popular: {
        [key: string]: string;
    };
}

const languages: string[] = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const LanguageTabs:FC<LanguageTabsProps> = memo(({loading}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    const selectedLanguage = useSelector((state: ILanguageTabsState) => state.popular.selectedLanguage);

    const handleLanguageClick = (language: string) => {
        if (!loading) {
            dispatch(setSelectedLanguage(language));

            const queryParams = new URLSearchParams(location.search);
            queryParams.set('language', language)
            navigate({search: queryParams.toString()})

            sessionStorage.setItem('selectedLanguage', language);
        }
    }

    useEffect(() => {
        // @ts-ignore
        dispatch(getRepos(selectedLanguage));
    }, [selectedLanguage]);

    return (
        <ul className='languages'>
            {languages.map((language: string, index: number) => (
                <li
                    key={index}
                    style={{
                        color: selectedLanguage === language ? '#d0021b' : '#000000',
                        cursor: !loading ? 'pointer' : 'default',
                        userSelect: !loading ? 'auto' : 'none',
                }}
                    onClick={() => handleLanguageClick(language)}
                >
                    {language}
                </li>
            ))}
        </ul>
    )
})

export default LanguageTabs;