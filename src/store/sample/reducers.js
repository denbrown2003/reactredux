import { BUTTON_CLICK } from './actions'

const defaultState = {
    title: 'hello'
}


export const SampleReducer = (state = defaultState, action) => {
    switch(action.type){
        case BUTTON_CLICK:
            return { ...state, title: action.payload}
    }
    return state;
}
