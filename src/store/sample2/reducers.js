import { PUT_DATA } from './actions'

const defaultState = {
    data: {}
}

export default S2reducer = (state=defaultState, action) => {
    switch(action.type){
        case PUT_DATA:
            return { ...state, data: action.payload}
    }
    return state;
}