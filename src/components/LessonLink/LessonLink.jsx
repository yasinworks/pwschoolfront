import React from 'react';
import "./Lesson.scss";

function Lesson(props) {
    const {title, date} = props
    return (
        <div className="lesson">

            {title}
            <span className="lesson_date">{date}</span>
        </div>
    );
}

export default Lesson;