import React from 'react';
import NavigationBar from "../components/UI/NavigationBar";
import {Link} from "react-router-dom";
import {USER_ROUTE} from "../utils/const";

const AuthenticationPage = () => {
    return (
        <div>
            <NavigationBar/>
            <Link to={USER_ROUTE}>UserProfile</Link>
            LOGIN
        </div>
    );
};

export default AuthenticationPage;