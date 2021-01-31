import { AppThunk } from "store/index.thunk";
import {GithubApi} from "../../api/github-api";
import {getReposActions, getSearchReposHistoryActions} from "./github-repos.actions";
import {IGithubReposRes} from "../../models/github-repos/github-repos";

export const getGithubReposThunk = (): AppThunk => async dispatch => {
    dispatch(getReposActions.request());
    try {
        const repos: IGithubReposRes[] = await GithubApi.getRepos();
        dispatch(getReposActions.success(repos));
    } catch (error) {
        dispatch(getReposActions.failure(error));
        console.error(error);
    }
};

export const getSearchReposHistoryThunk = (): AppThunk => async dispatch => {
    dispatch(getSearchReposHistoryActions.request());
    try {
        const history: string | null = localStorage.getItem('history');
        history && dispatch(getSearchReposHistoryActions.success(JSON.parse(history)));
    } catch (error) {
        dispatch(getSearchReposHistoryActions.failure(error));
        console.error(error);
    }
};