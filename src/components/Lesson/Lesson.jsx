import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectLessonsByClassId} from "../../store/selectors";

function Lesson(props) {
    const params = useParams();
    const {id} = params;
    const lessons = useSelector(selectLessonsByClassId)
    const lessonArr = lessons.filter(l => l._id === id)
    const lesson = lessonArr[0]


    return (
        <div>
            <h1>{lesson.title}</h1>
            <span>
                {lesson.text}
            </span>
        </div>
    );
}

export default Lesson;