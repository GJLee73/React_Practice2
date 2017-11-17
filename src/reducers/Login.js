import * as types from '../actions/ActionTypes';

import update from 'react-addons-update';

const initialState = {
    login: 'false'
}

export default function login (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN :
            //return {login: 'true'};
            return update (state, {login: {$set: 'true'}});
        case types.LOGOUT :
            return update (state, {login: {$set: 'false'}});
    }
    return state;
}

/*function login_ (state,action) {
    if (typeof state === 'undefined') {
        return loginInitialState;
    }

    switch (action.type) {
        case LOGIN:
            return AState
        //return update (state, {login: {$set: 'true'}});

        case CHECK_LOGIN:
            return state;
    }

    return state;
}

function extra (state,action) {
    if (typeof state === 'undefined') {
        return {msg: 'extra'};
    }

    return state;
}

const login = combineReducers({
    login_,
    extra
});*/

/*const login = (state, action) => {
    if (typeof state === 'undefined') {
        return loginInitialState;
    }

    switch (action.type) {
        case LOGIN:
            return AState
            //return update (state, {login: {$set: 'true'}});

        case CHECK_LOGIN:
            return state;
    }
};*/

//export default login;