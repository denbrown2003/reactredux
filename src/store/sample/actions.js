export const BUTTON_CLICK = 'BUTTON_CLICK'

export const clickButton = title =>({
    type: BUTTON_CLICK,
    payload: title
});
