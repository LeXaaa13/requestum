import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeEnhancers } from './utils';
import * as fromRoot from './index.reducer';

function configureStore() {
    const enhancer = composeEnhancers(applyMiddleware(thunk));
    return createStore(fromRoot.reducers, {}, enhancer);
}

export const store = configureStore();
