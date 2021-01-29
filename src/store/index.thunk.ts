import { ThunkAction } from 'redux-thunk';
import { IRootState } from './index.reducer';

export type AppThunk<ActionType = null> = ThunkAction<void, IRootState, ActionType, any>;
