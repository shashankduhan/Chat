import { combineReducers } from 'redux';
import counterReducers from './counterReducer';
import chatReducer from './chatReducer';

export default combineReducers({
    counter: counterReducers,
    chats: chatReducer
});