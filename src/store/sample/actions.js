import { GetJson } from '../../services/api/AxiosApi'

export const BUTTON_CLICK = 'BUTTON_CLICK'
export const PUT_DATA = 'PUT_DATA'
export const LOAD_DATA = 'LOAD_DATA'

export const clickButton = title =>({
    type: BUTTON_CLICK,
    payload: title
});

export const putData = (dataFromServer) => {
    return {
        type : PUT_DATA,
        payload: dataFromServer
    }
}


export const loadData = () => {
    return {
        type : LOAD_DATA,
        //payload: dataFromServer
    }
}