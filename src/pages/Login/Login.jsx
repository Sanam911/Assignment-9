import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const [logInSuccess, setLogInSuccess] = useState('');
    const [logInError, setLogInError] = useState('');
    const [seePass, setSeePass] = useState(false);

    const { logIn } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);

        // clear error & success
        setLogInSuccess('');
        setLogInError('');

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                setLogInSuccess('Successfully logged in !');

            })
            .catch(error => {
                console.error(error);
                setLogInError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Login</title>
            </Helmet>


            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                {
                    logInSuccess &&
                    <div role="alert" className="alert alert-success text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{logInSuccess}</span>
                    </div>
                }


                <h2 className="text-3xl font-bold text-violet-500 text-center mt-4">Login Now!</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                            name="email"
                            className="input input-bordered" required />
                    </div>
                    <div className="relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={seePass ? "text" : "password"} placeholder="password"
                            name="password"
                            className="input input-bordered w-full" required />
                        <span className="absolute top-12  right-4 text-violet-500 text-2xl" onClick={() => setSeePass(!seePass)}>
                            {
                                seePass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>

                    </div>
                    <div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <p className="text-centre">Do not have register yet? <Link className="text-violet-500" to='/register'>Register Now</Link></p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-violet-300 text-violet-500">Login</button>
                    </div>
                </form>
                {
                    logInError &&
                    <p className="text-xl text-red-600 font-bold text-center mb-4">{logInError}</p>
                }
            </div>
        </div>

    );
};

export default Login;