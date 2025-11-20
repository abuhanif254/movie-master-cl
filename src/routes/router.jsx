

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import MyCollection from "../pages/MyCollection";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";  
import MovieDetails from "../pages/MovieDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/movies",
                element: <AllMovies />,
            },
            {
                path: "/movies/:id",
                element: <MovieDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/movies/${params.id}`)
            },

            {
                path: "/add-movie",
                element: <PrivateRoute><AddMovie /></PrivateRoute>, 
            },
            {
                path: "/my-collection",
                element: <PrivateRoute><MyCollection /></PrivateRoute>, 
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;