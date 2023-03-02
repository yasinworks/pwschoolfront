import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/Main/MainPage";
import Lessons from "../components/Lessons/Lessons";
import Lesson from "../components/Lesson/Lesson";
import UserPage from "../pages/User/UserPage";

const AppRoutes = (props) => {
    return (
        <Routes>
            <Route exact path={'/'} element={<MainPage/>}/>
            <Route path={'/user'} element={<UserPage/>}/>
            <Route path={'/lessons/class/:classId'} element={<Lessons/>}/>
            <Route path={'/lesson/:id'} element={<Lesson/>}/>
        </Routes>
    );
}

export default AppRoutes;
