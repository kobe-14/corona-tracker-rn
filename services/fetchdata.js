import { API } from "./api-services";

const fetchdata = function () { };

fetchdata.prototype.getAllData = function () {
    return API.get( '/countries' );
};

fetchdata.prototype.getCountryData = function ( country, status ) {
    return API.get( '/live/country/' + country + '/status/' + status );
};

const CORONA = new fetchdata();

export { CORONA };