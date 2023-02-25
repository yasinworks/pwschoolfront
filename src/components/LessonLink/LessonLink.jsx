import React from 'react';
import "./LessonLink.scss";

function LessonLink(props) {
    const {title, date} = props
    return (
        <div className="lesson">

            {title}
            <span className="lesson_date">{date}</span>
        </div>
    );
}

export default LessonLink;