import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import EstateDetails from "../pages/Estate/EstateDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/estates.json'),
            },
            {
                path: '/estate/:id',
                element: <PrivateRoute>
                    <EstateDetails></EstateDetails>
                    </PrivateRoute>,
                loader:()=>fetch('/estates.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },


        ]
    }
]);
export default router;

