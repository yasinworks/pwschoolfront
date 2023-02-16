import React from 'react';
import {Link} from "react-router-dom";
import './Class.scss';

function Class(props) {
    const {name, ID} = props;
    console.log(ID)
    return (
        <Link to={`/lessons/class/${ID}`} className="class">
            {name}
        </Link>
    );
}

export default Class;