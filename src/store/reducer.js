import {
    LOAD_CLASSES_ERROR,
    LOAD_CLASSES_REQUEST,
    LOAD_CLASSES_SUCCESS, LOAD_LESSONS_BY_CLASS_ID_ERROR,
    LOAD_LESSONS_BY_CLASS_ID_REQUEST, LOAD_LESSONS_BY_CLASS_ID_SUCCESS
} from "./types";

const initialState = {
    isError: false,
    errMessage: null,
    classes: {
        data: [],
        isLoading: true
    },
    lessons: {
        data: [],
        isLoading: true
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CLASSES_REQUEST:
            console.log("REQUEST")
            return {...state, classes: {...state.classes, isLoading: true}}
        case LOAD_CLASSES_ERROR:
            return {...state, isError: true, errMessage: action.payload};
        case LOAD_CLASSES_SUCCESS:
            console.log("SUCCESS")
            return {
                ...state,
                classes: { ...state.classes, data: action.payload, isLoading: false }
            };
        case LOAD_LESSONS_BY_CLASS_ID_REQUEST:
            console.log("REQUEST")
            return {...state, lessons: {...state.lessons, isLoading: true}}
        case LOAD_LESSONS_BY_CLASS_ID_ERROR:
            return {...state, isError: true, errMessage: action.payload};
        case LOAD_LESSONS_BY_CLASS_ID_SUCCESS:
            console.log("SUCCESS")
            return {
                ...state,
                lessons: { ...state.lessons, data: action.payload, isLoading: false }
            };
        default:
            return {...state}
    }
}

export default reducer;