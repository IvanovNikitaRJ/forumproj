import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {adminRotes, authRoutes, publicRoutes} from "../routes";
import {AUTHENTICATION_ROUTE} from "../utils/const.js";

const BoardRouter = () => {
    const isAuth = false;
    const isAdmin = false;
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route path={path} Component={Component}/>
                )}
            {!isAuth && publicRoutes.map(({path, Component}) =>
                <Route path={path} Component={Component}/>
            )}
            {isAdmin && adminRotes.map(({path, Component}) =>
                <Route path={path} Component={Component}/>
            )}
            <Route path = "*" element={ <Navigate to={AUTHENTICATION_ROUTE} replace={true}/>}/>
        </Routes>
    );
};

export default BoardRouter;