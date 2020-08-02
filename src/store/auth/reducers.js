import { CHANGE_EMAIL1, CHANGE_EMAIL2 } from './actions'

const defaultState = {
    email1: 'test@mai.com',
    email2: 'test2@ff.com',
}

export const AuthReducer = (state = defaultState, action) => {
    switch(action.type){
        case CHANGE_EMAIL1:
            return { ...state, email1: action.payload}
        case CHANGE_EMAIL2:
            return { ...state, email2: action.payload}
    }
    return state;
}
