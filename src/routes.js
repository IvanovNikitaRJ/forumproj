import {
    ADMIN_ROUTE,
    AUTHENTICATION_ROUTE,
    BOARD_LIST_ROUTE,
    BOARD_ROUTE,
    USER_LIST_ROUTE,
    USER_ROUTE
} from "./utils/const";
import Board from "./pages/Board.tsx";
import BoardListPage from "./pages/BoardListPage.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import AuthenticationPage from "./pages/AuthenticationPage.tsx";
import UsersList from "./pages/UsersList.tsx";
import Admin from "./pages/Admin";

export const authRoutes =[
    {
        path:BOARD_ROUTE,
        Component: Board
    },
    {
      path: BOARD_LIST_ROUTE,
      Component: BoardListPage
    },
    {
        path: USER_ROUTE,
        Component: UserProfile
    }
]
export const publicRoutes = [
    {
        path: AUTHENTICATION_ROUTE,
        Component: AuthenticationPage
    }
]
export const adminRotes = [
    {
        path:BOARD_ROUTE,
        Component: Board
    },
    {
        path: BOARD_LIST_ROUTE,
        Component: BoardListPage
    },
    {
        path: USER_ROUTE,
        Component: UserProfile
    },
    {
        path: USER_LIST_ROUTE,
        Component: UsersList
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]