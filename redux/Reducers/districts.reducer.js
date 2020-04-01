import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    districts: {},
    districtsFetched: false
};

const DistrictsReducer = createReducer( initialState, {
    INSERT_DISTRICTS: ( state, action ) => {
        state.districts = action.districts;
        state.districtsFetched = action.districtsFetched;
    }
} );

export default DistrictsReducer;