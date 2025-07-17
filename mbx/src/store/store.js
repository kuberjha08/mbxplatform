import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import languageReducer from './reducers/languageReducer';

const rootReducer = combineReducers({
    language: languageReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
