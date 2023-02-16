import React, {useEffect} from 'react';
import Lesson from "../Lesson/Lesson";
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

    useEffect(() => {
        dispatch(getLessonsByClassId(classId))
    }, [dispatch])

    if (isLoading) {
        return <div>Loading...</div>
    } else {
        lessons.map((lesson) => {
            return(<Lesson title={lesson.title}/>)
        })
    }
}

export default Lessons;