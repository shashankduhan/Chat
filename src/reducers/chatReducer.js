import { LOAD_CHATS, SET_USER, ADD_MSG} from '../actions/types';

const initialState = {}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOAD_CHATS:
            return {
                ...state,
                chats: action.payload
            }
        case SET_USER:
            return {
                ...state,
                homeUser: action.payload
            }
        case ADD_MSG:
            return Object.assign({}, state, {chats: action.payload.slice()})
        default:
            return state;
    }
}