import {LOGIN,LOGOUT} from './ActionTypes';

export function login () {
    return {
        type: LOGIN
    };
}

export function logout () {
    return {
        type: LOGOUT
    };
}