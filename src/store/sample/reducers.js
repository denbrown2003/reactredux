import { BUTTON_CLICK, PUT_DATA } from './actions'

const defaultState = {
    title: 'hello',
    data: {}
}


export const SampleReducer = (state = defaultState, action) => {
    switch(action.type){
        case BUTTON_CLICK:
            return { ...state, title: action.payload}

        case PUT_DATA:
            return { ...state, data: action.payload}
    }
    return state;
}
