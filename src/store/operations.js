import {
    LOAD_CLASSES_ERROR,
    LOAD_CLASSES_REQUEST,
    LOAD_CLASSES_SUCCESS,
    LOAD_LESSONS_BY_CLASS_ID_REQUEST,
    LOAD_LESSONS_BY_CLASS_ID_SUCCESS,
    LOAD_LESSONS_BY_CLASS_ID_ERROR
} from "./types";
import axios from "axios";

export const getClasses = () => (dispatch) => {
    dispatch({ type: LOAD_CLASSES_REQUEST, payload: true });
    axios('http://localhost:4444/api/classes/list').then((res) => {

        dispatch({ type: LOAD_CLASSES_SUCCESS, payload: res.data });
    }).catch(err => {
        dispatch({type: LOAD_CLASSES_ERROR, payload: err})
    });
};

export const getLessonsByClassId = (id, accessCode) => (dispatch) => {
    dispatch({ type: LOAD_LESSONS_BY_CLASS_ID_REQUEST, payload: true });
    axios(`http://localhost:4444/api/lessons/class?ID=${id}&accessCode=${accessCode || 'No access code'}`).then((res) => {
        console.log(res.data)
        dispatch({ type: LOAD_LESSONS_BY_CLASS_ID_SUCCESS, payload: res.data.lessons });
    }).catch(err => {
        console.log(err.response.data.message)
        dispatch({type: LOAD_LESSONS_BY_CLASS_ID_ERROR, payload: err.response.data.message})
    });
};