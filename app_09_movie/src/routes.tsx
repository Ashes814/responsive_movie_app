import Home from "./pages/home";
import Error from "./pages/error";
import TvSeries from "./pages/tv-series";
import Bookmark from "./pages/bookmark";
import Movie from "./pages/movie";
import Login from "./pages/Login";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/movie",
        element: <Movie />,
        errorElement: <Error />,
    },
    {
        path: "/tv-series",
        element: <TvSeries />,
        errorElement: <Error />,
    },
    {
        path: "/bookmark",
        element: <Bookmark />,
        errorElement: <Error />,
    },
])