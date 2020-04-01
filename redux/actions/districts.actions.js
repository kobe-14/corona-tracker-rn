import { STATES } from '../../services/fetch-state-wise-data';

const reducer_insertDistricts = ( districts ) => ( {
    type: 'INSERT_DISTRICTS',
    districts,
    districtsFetched: true
} );

/************************Thunk***************************** */
export const getDistricts = () => {
    return ( dispatch ) => {
        STATES.getDistricts().then( res => {
            dispatch( reducer_insertDistricts( res.data ) );
        } );
    };
};