import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location =useLocation();
    console.log(location.pathname);

    if(loading){
        return <center><span className="loading loading-spinner loading-lg text-violet-500 "></span></center>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;