import React, {useEffect, useState} from 'react';
import './app.scss'
import {Header} from "components/header/header";
import {Sidebar} from 'components/sidebar/sidebar';
import {ContentBlock} from 'components/content-block/content-block';
import {getGithubReposThunk, getSearchReposHistoryThunk} from "store/github-repos/github-repos.thunk";
import {Provider, useDispatch} from "react-redux";
import {store} from 'store/store';
import {useRootSelector} from "store/index.reducer";
import {searchReposActions} from "store/github-repos/github-repos.actions";
import { useDebounce } from 'helpers/custom-hooks/use-debounce';

const ConnectedApp = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState<string>('');
    const debouncedSearch = useDebounce(search, 500);
    const {githubReposState} = useRootSelector();

    // @ts-ignore
    useEffect(() => dispatch(getGithubReposThunk()), [dispatch]);

    // @ts-ignore
    useEffect(() => dispatch(getSearchReposHistoryThunk()) , [dispatch])

    useEffect(() => {
        if (debouncedSearch.length) {
            const h = localStorage.getItem('history');
            const hArr = h ? [...JSON.parse(h), debouncedSearch] : [debouncedSearch];
            localStorage.setItem('history', JSON.stringify(hArr))
        }
    }, [debouncedSearch])

    useEffect(() => {
        if (githubReposState.originalData !== null && !githubReposState.isLoading) {
            dispatch(searchReposActions.success(debouncedSearch))
        }
    }, [search, githubReposState.originalData, githubReposState.isLoading, debouncedSearch, dispatch])

    return (
        <div className='wrapper'>
            <Header/>
            <div className='main-wrapper'>
                <Sidebar history={githubReposState.searchHistory} search={search} setSearch={(value: string) => setSearch(value)}/>
                <ContentBlock data={githubReposState.filteredData}/>
            </div>
        </div>
    )
}

export const App: React.FC = () => (
    <Provider store={store}>
        <ConnectedApp/>
    </Provider>
)
