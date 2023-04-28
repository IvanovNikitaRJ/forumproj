import React from 'react';
import NavigationBar from "../components/UI/NavigationBar";
import {Link} from "react-router-dom";
import {BOARD_ROUTE} from "../utils/const";

const BoardListPage = () => {
    return (
        <div>
            <NavigationBar/>
            <Link to={BOARD_ROUTE}>Board1</Link>
            <Link to={BOARD_ROUTE}>Board2</Link>
            <Link to={BOARD_ROUTE}>Board3</Link>
            MAIN_PAGE
        </div>
    );
};

export default BoardListPage;