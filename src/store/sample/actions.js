import { GetJson } from '../../services/api/AxiosApi'

export const BUTTON_CLICK = 'BUTTON_CLICK'
export const PUT_DATA = 'PUT_DATA'

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

const callback = (data, dispatch) => {
    dispatch(putData(data))
}

export const loadData = () => (dispatch, getState) => {
    console.log(getState());
    GetJson('https://jsonplaceholder.typicode.com/todos/1', callback, dispatch )
}