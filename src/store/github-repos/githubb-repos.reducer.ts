import {ActionType, createReducer} from 'typesafe-actions';
import {getReposActions, searchReposActions, getSearchReposHistoryActions} from './github-repos.actions';

export interface IGithubReposState {
    isLoading: boolean;
    originalData: any;
    filteredData: any;
    searchHistory: any;
    error: string | null;
}

const initialState: IGithubReposState = {
    isLoading: false,
    originalData: null,
    filteredData: null,
    searchHistory: null,
    error: null,
};

type GithubReposActions = ActionType<typeof getReposActions | typeof searchReposActions | typeof getSearchReposHistoryActions>;

export const githubReposReducer = createReducer<IGithubReposState, GithubReposActions>(initialState)
    .handleAction(
        getReposActions.request,
        (state): IGithubReposState => ({
            ...state,
            isLoading: true
        })
    )
    .handleAction(
        getReposActions.success,
        (state, action): IGithubReposState => ({
            ...state,
            isLoading: false,
            originalData: action.payload.map((item: any) => {
                return {
                    title: item.name,
                    lang: item.language,
                    desc: item.description
                }
            }),
            filteredData: action.payload.map((item: any) => {
                return {
                    title: item.name,
                    lang: item.language,
                    desc: item.description
                }
            })
        })
    )
    .handleAction(
        getReposActions.failure,
        (state, action): IGithubReposState => ({
            ...state,
            isLoading: false,
            error: action.payload,
            originalData: null,
            filteredData: null,
            searchHistory: null,
        })
    )
    .handleAction(
        searchReposActions.request,
        (state): IGithubReposState => ({
            ...state,
            isLoading: true
        })
    )
    .handleAction(
        searchReposActions.success,
        (state, action): IGithubReposState => ({
            ...state,
            isLoading: false,
            filteredData: state.originalData.filter((item: any) => {
                if (
                    item.title.toLowerCase().includes(action.payload.toLowerCase()) ||
                    item.lang.toLowerCase().includes(action.payload.toLowerCase())
                ) return item;
            })
        })
    )
    .handleAction(
        searchReposActions.failure,
        (state, action): IGithubReposState => ({
            ...state,
            isLoading: false,
            error: action.payload,
            filteredData: null,
        })
    )
    .handleAction(
        getSearchReposHistoryActions.request,
        (state): IGithubReposState => ({
            ...state,
            isLoading: true
        })
    )
    .handleAction(
        getSearchReposHistoryActions.success,
        (state, action): IGithubReposState => ({
            ...state,
            isLoading: false,
            searchHistory: action.payload.slice(-5)
        })
    )
    .handleAction(
        getSearchReposHistoryActions.failure,
        (state, action): IGithubReposState => ({
            ...state,
            isLoading: false,
            error: action.payload,
            searchHistory: null,
        })
    )
