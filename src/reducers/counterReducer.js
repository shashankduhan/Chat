import { CHANGE_ADULT, CHANGE_CHILD, CHANGE_INFANT, CHANGE_ERROR } from '../actions/types';

const initialState = {}

export default function(state = initialState, action) {
    switch(action.type) {
        case CHANGE_ADULT:
            return {
                ...state,
                adultCount: action.payload
            }
        case CHANGE_CHILD:
            return {
                ...state,
                childCount: action.payload
            }
        case CHANGE_INFANT:
            return {
                ...state,
                infantCount: action.payload
            }
        case CHANGE_ERROR:
            return {
                ...state,
                showError: action.payload
            }
        default:
            return state;
    }
}