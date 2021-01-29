import { combineReducers } from 'redux';
import { useSelector } from 'react-redux';
import * as fromGithubReposReducer from './github-repos/githubb-repos.reducer';

export interface IRootState {
    githubReposState: fromGithubReposReducer.IGithubReposState;
}

export const reducers = combineReducers<IRootState>({
    githubReposState: fromGithubReposReducer.githubReposReducer,
});

export const useRootSelector = () => useSelector((state: IRootState) => state);
