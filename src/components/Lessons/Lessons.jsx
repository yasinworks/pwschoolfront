import React, {useEffect} from 'react';
import LessonLink from "../LessonLink/LessonLink";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getLessonsByClassId} from "../../store/operations";
import {areLessonsLoading, selectLessonsByClassId} from "../../store/selectors";

function Lessons(props) {
    const dispatch = useDispatch();
    let params = useParams();
    const {classId} = params;
    const isLoading = useSelector(areLessonsLoading)
    const lessons = useSelector(selectLessonsByClassId)
    console.log(lessons)

    useEffect(() => {
        dispatch(getLessonsByClassId(classId))
    }, [dispatch, classId])


    return (
        <>
            {isLoading ? <div>Loading...</div> :
                lessons.map((lesson, key) => <LessonLink key={key} title={lesson.title} date={lesson.date} id={lesson._id}/>)
            }
        </>
    )
}

export default Lessons;