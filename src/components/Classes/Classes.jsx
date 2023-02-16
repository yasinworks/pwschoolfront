import React from 'react';
import {useSelector} from "react-redux";
import {areClassesLoading, selectClasses} from "../../store/selectors";
import Class from "../Class/Class";

function Classes(props) {
    const isLoading = useSelector(areClassesLoading);
    const classes = useSelector(selectClasses);

    return (
        <>
            {isLoading ? <div>Loading...</div> :
                classes.map((c, key) => <Class key={key} name={c.name} ID={c._id}/>)
            }
        </>
    )
}

export default Classes;