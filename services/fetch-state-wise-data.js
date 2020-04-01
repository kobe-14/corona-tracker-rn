import { API1 } from './state-wise-api-service';

const fetchStateWiseData = function () { };

fetchStateWiseData.prototype.getStateWiseData = function () {
    return API1.get( '/data.json' );
};

fetchStateWiseData.prototype.getDistricts = function () {
    return API1.get( '/state_district_wise.json' );
};

const STATES = new fetchStateWiseData();

export { STATES };