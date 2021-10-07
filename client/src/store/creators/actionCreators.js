import * as actionTypes from '../actions/actionTypes'

export const fetchDecisions = () => {

    return (dispatch) => {
        fetch('http://localhost:8080/api/decisions/2')
        .then(response => response.json())
        .then(decisions => {
            dispatch({type: actionTypes.DECISIONS_LOADED, payload: decisions}) 
        }) 
    }
}

export const fetchOptions = () => {

    return (dispatch) => {
        fetch('http://localhost:8080/api/decisions/options')
        .then(response => response.json())
        .then(options => {
            dispatch({type: actionTypes.OPTIONS_LOADED, payload: options}) 
        }) 
    }
}