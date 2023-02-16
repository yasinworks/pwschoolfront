import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/Main/MainPage";
import Lessons from "../components/Lessons/Lessons";

const AppRoutes = (props) => {
    return (
        <Routes>
            <Route exact path={'/'} element={<MainPage/>}/>
            <Route path={'/lessons/class/:classId'} element={<Lessons/>}/>
        </Routes>
    );
}

export default AppRoutes;
