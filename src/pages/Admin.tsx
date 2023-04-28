import React from 'react';
import NavigationBar from "../components/UI/NavigationBar";
import {Link} from "react-router-dom";
import {USER_LIST_ROUTE} from "../utils/const";
const Admin = () => {
    return (
        <div>
            <NavigationBar/>
            <Link to={USER_LIST_ROUTE}>UsersList</Link>
            ADMIN
        </div>
    );
};

export default Admin;