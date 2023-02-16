import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {isError} from "../../store/selectors";

function ErrorMessage(props) {
    const dispatch = useDispatch();
    const isError = useSelector(state => state.isError)
    const errMessage = useSelector(state => state.errMessage)

    useEffect(() => {

    })


    return (
        <>
            {isError && (<div>{errMessage}</div>)}
        </>
    );
}

export default ErrorMessage;