

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
import UpdateMovie from "../pages/UpdateMovie";
import WatchList from "../pages/WatchList";
import Contact from "../pages/Contact";
import { Branding, Design, Marketing, Advertisement, AboutUs, Jobs, PressKit, TermsOfUse, PrivacyPolicy, CookiePolicy } from "../pages/FooterContent";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Profile from "../pages/Dashboard/Profile";

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
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/movies/${params.id}`)
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
            {
                path: "/movies/update/:id",
                element: <PrivateRoute><UpdateMovie /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/movies/${params.id}`)
            },

            {
                path: "/watchlist",
                element: <PrivateRoute><WatchList /></PrivateRoute>,
            },
            // Footer Routes
            { path: "/branding", element: <Branding /> },
            { path: "/design", element: <Design /> },
            { path: "/marketing", element: <Marketing /> },
            { path: "/advertisement", element: <Advertisement /> },
            { path: "/about", element: <AboutUs /> },
            { path: "/contact", element: <Contact /> },
            { path: "/jobs", element: <Jobs /> },
            { path: "/press-kit", element: <PressKit /> },
            { path: "/terms", element: <TermsOfUse /> },
            { path: "/privacy", element: <PrivacyPolicy /> },
            { path: "/cookie-policy", element: <CookiePolicy /> },

        ],
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: "",
                element: <DashboardHome />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ]
    }
]);

export default router;