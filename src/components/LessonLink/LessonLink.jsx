import React from 'react';
import "./LessonLink.scss";
import {Link} from "react-router-dom";
import {ReactComponent as LessonLogo} from "../../svg/lesson.svg";

function LessonLink(props) {
    const {title, date, id} = props
    return (
        <Link to={`/lesson/${id}`} className="lesson">
            <div className="lesson_content">
                <LessonLogo/>
                {title}
            </div>
            <span className="lesson_date">{date}</span>
        </Link>
    );
}

export default LessonLink;