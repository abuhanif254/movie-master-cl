// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import Home from "../pages/Home";
// import AllMovies from "../pages/AllMovies";
// import AddMovie from "../pages/AddMovie";
// import MyCollection from "../pages/MyCollection";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import ErrorPage from "../pages/ErrorPage";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MainLayout />,
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />,
//             },
//             {
//                 path: "/movies",
//                 element: <AllMovies />,
//             },
//             {
//                 path: "/add-movie",
//                 element: <AddMovie />,
//             },
//             {
//                 path: "/my-collection",
//                 element: <MyCollection />,
//             },
//             {
//                 path: "/login",
//                 element: <Login />,
//             },
//             {
//                 path: "/register",
//                 element: <Register />,
//             },
//         ],
//     },
// ]);

// export default router;



import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import MyCollection from "../pages/MyCollection";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";  // ইমপোর্ট করতে ভুলবেন না

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
                path: "/add-movie",
                element: <PrivateRoute><AddMovie /></PrivateRoute>, // Protected
            },
            {
                path: "/my-collection",
                element: <PrivateRoute><MyCollection /></PrivateRoute>, // Protected
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