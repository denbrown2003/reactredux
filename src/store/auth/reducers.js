import { CHANGE_EMAIL1, CHANGE_EMAIL2 } from './actions'

const defaultState = {
    email: '',
    email2: '',
}

const AuthReducer = (state = defaultState, action) => {
    switch(action.type){
        case CHANGE_EMAIL1:
            return { ...state, email1: action.payload}
        case CHANGE_EMAIL2:
            return { ...state, email2: action.payload}
    }
    return state;
}
