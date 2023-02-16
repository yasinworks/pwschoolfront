import {LOAD_CLASSES_SUCCESS} from "./types.js";

export const setClasses = (data) => {
    return {type: LOAD_CLASSES_SUCCESS, payload: data}
}