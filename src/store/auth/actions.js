export const CHANGE_EMAIL1 = 'CHANGE_EMAIL1';
export const CHANGE_EMAIL2 = 'CHANGE_EMAIL1';

export const setEmail1 = email =>({
    type: CHANGE_EMAIL1,
    payload: email
});

export const setEmail2 = email =>({
    type: CHANGE_EMAIL2,
    payload: email
});