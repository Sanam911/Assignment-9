import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut, } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/estate'>Estate</NavLink></li>
        <li><NavLink to='/user'>User Profile</NavLink></li>
        <li><NavLink to='/update'>Update Profile</NavLink></li>
    </>

    return (
        <div className="navbar bg-violet-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-violet-100 rounded-box w-52 font-bold text-violet-500">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold text-violet-500">Dream.Nest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold text-violet-500">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom " data-tip="user" >

                    <div className="w-10 rounded-full mx-auto" >
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                    </div>

                </div>
                {
                    user ?
                        <button onClick={handleLogOut} className="btn bg-violet-100 border-none text-xl text-violet-500">
                            Log Out
                        </button> :
                        <Link to='/login'>
                            <a className="btn bg-violet-100 border-none text-xl text-violet-500">Login</a>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;