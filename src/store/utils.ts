import { compose } from 'redux';

declare const window: any;
export const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;