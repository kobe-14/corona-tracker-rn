import Axios from 'axios';

const apiBase = 'https://api.covid19api.com/';

const api = function () {
    this.apiBase = apiBase;
    this.axios = Axios.create( {
        baseURL: this.apiBase,
        timeout: 10000,
        //#region [comment]
        // onUploadProgress ( p ) {
        //     const progress = p.loaded / p.total;

        //     // check if we already displayed a toast
        //     if ( toastId === null ) {
        //         toastId = toast( 'Upload in Progress', {
        //             progress: progress
        //         } );
        //     } else {
        //         toast.update( toastId, {
        //             progress: progress
        //         } );
        //     }
        // },
        // onDownloadProgress ( p ) {
        //     const progress = p.loaded / p.total;

        //     // check if we already displayed a toast
        //     if ( toastId === null ) {
        //         toastId = toast( 'Download in Progress', {
        //             progress: progress
        //         } );
        //     } else {
        //         toast.update( toastId, {
        //             progress: progress
        //         } );
        //     }
        // }
        //#endregion
    } );
    this.axios.defaults.headers.post['Content-Type'] = 'application/json';
    this.axios.interceptors.request.use(
        ( req ) => {
            // req['headers']['Authorization'] = token ? `Token ${ token }` : '';
            return req;
        },
        ( e ) => {
            return Promise.reject( e );
        }
    );
    this.axios.interceptors.response.use(
        ( res ) => {
            return res;
        },
        ( e ) => {
            if ( e.response && e.response.status === 401 ) sessionExpired();
            return Promise.reject( e );
        }
    );
};

api.prototype.getApiBase = function () {
    return this.apiBase;
};

api.prototype.get = function ( url, params = {} ) {
    return this.axios( {
        method: 'get',
        url,
        params
    } );
};

const API = new api();

export { API };