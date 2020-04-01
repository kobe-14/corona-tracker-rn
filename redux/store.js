import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import DistrictsReducer from './Reducers/districts.reducer';

const reducers = combineReducers( {
    districts: DistrictsReducer
} );

let middleware = [thunk];

const middlewareEnhancer = applyMiddleware( ...middleware );

export const storeConfig = () => {
    return createStore( reducers, undefined, middlewareEnhancer );
};