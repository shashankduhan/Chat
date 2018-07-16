import { LOAD_CHATS, SET_USER, ADD_MSG } from './types';


const recieveChats = () => ({
    type: LOAD_CHATS,
    payload: 
        [{
            id: "chat_1",
            messages: [
                {
                    id: "message_1",
                    msg: "Hi",
                    by: 126
                },
                {
                    id: "message_2",
                    msg: "Hi",
                    by: 120
                }
            ]
        },
        {
            id: "chat_2",
            messages: [
                {
                    id: "message_1",
                    msg: "Hi",
                    by: 136
                },
                {
                    id: "message_2",
                    msg: "Hi",
                    by: 120
                }
            ]
        }]
});

const recieveUser = id => ({
    type: SET_USER,
    payload: id
});

const receieveMsg = data => ({
    type: ADD_MSG,
    payload: data
})

export const loadChats = () => (dispatch, getState) => {
    dispatch(recieveChats());
}

export const setUser = id => (dispatch, getState) => {
    dispatch(recieveUser(id));
}

export const addMsg = (chatId, msg, by) => (dispatch, getState) => {
    let newState = Object.assign({}, getState())
    newState = searchAndAppend(chatId, newState.chats.chats, {msg, by});
    dispatch(receieveMsg(newState));
}

function searchAndAppend(id, data, newdata){
    for(let i = 0; i < data.length; i++) {
        if(data[i].id === id){
            data[i].messages.push(newdata);
        }
    }

    return data;
}