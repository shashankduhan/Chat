import { CHANGE_ADULT, CHANGE_CHILD, CHANGE_INFANT, CHANGE_ERROR } from '../actions/types';

const changeAdult = value => ({
    type: CHANGE_ADULT,
    payload: value
});

const changeChild = value => ({
    type: CHANGE_CHILD,
    payload: value
});

const changeInfant = value => ({
    type: CHANGE_INFANT,
    payload: value
});

const changeError = value => ({
    type: CHANGE_ERROR,
    payload: value
})

export const incrementAdult = () => (dispatch, getState) => {
    const adult = getState().counter.adultCount + 1;
    const child = getState().counter.childCount;
    const infant = getState().counter.infantCount;
    const total = adult + child + infant;
    if (total <= 9){
        dispatch(changeAdult(adult));
        dispatch(changeError(false));
    } else {
        dispatch(changeError(true));
    }
    
}

export const decrementAdult = () => (dispatch, getState) => {
    let adult = getState().counter.adultCount - 1;
    adult = adult < 0 ? 0 : adult;
    const child = getState().counter.childCount;
    const infant = getState().counter.infantCount;
    const total = adult + child + infant;
    if (total <= 9){
        dispatch(changeAdult(adult));
        dispatch(changeError(false));
    } else {
        dispatch(changeError(true));
    }
}

export const incrementChild = () => (dispatch, getState) => {
    const adult = getState().counter.adultCount;
    const child = getState().counter.childCount + 1;
    const infant = getState().counter.infantCount;
    const total = adult + child + infant;
    if (total <= 9){
        dispatch(changeChild(child));
        dispatch(changeError(false));
    } else {
        dispatch(changeError(true));
    }
}

export const decrementChild = () => (dispatch, getState) => {
    let child = getState().counter.childCount - 1;
    child = child < 0 ? 0 : child;
    const adult = getState().counter.adultCount;
    const infant = getState().counter.infantCount;
    const total = adult + child + infant;
    if (total <= 9){
        dispatch(changeChild(child));
        dispatch(changeError(false));
    } else {
        dispatch(changeError(true));
    }
}

export const incrementInfant = () => (dispatch, getState) => {
    const adult = getState().counter.adultCount;
    const child = getState().counter.childCount;
    const infant = getState().counter.infantCount + 1;
    const total = adult + child + infant;
    if (total <= 9){
        dispatch(changeInfant(infant));
        dispatch(changeError(false));
    } else {
        dispatch(changeError(true));
    }
}

export const decrementInfant = () => (dispatch, getState) => {
    let infant = getState().counter.infantCount - 1;
    infant = infant < 0 ? 0 : infant;
    const adult = getState().counter.adultCount;
    const child = getState().counter.childCount;
    const total = adult + child + infant;
    if (total <= 9){
        dispatch(changeInfant(infant));
        dispatch(changeError(false));
    } else {
        dispatch(changeError(true));
    }
}

export const toggleError = () => (dispatch, getState) => {

}