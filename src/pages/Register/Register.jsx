import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";



const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(name, photo, email, password);

        if (password.length < 6) {
            setRegisterError('Password should be atleast 6 characters or longer');
            return;
        }
        else if (!/[a-z]+.*[A-Z]|[A-Z]+.*[a-z]/.test(password)) {
            setRegisterError('Your password should contain at least 1 uppercase & 1 lowercase character in it ');
            return;
        }

        // clear error
        setRegisterError('');
        setRegisterSuccess('');

        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setRegisterSuccess('Successfully Registered !');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);

            })

    }




    return (

        <div className="hero min-h-screen bg-base-200 ">
            <Helmet>
                <title>Register</title>
            </Helmet>


            <div className="w-3/2 lg:w-1/2  shadow-2xl bg-base-100 p-4 rounded-lg">
                {
                    registerSuccess &&
                    <div role="alert" className="alert alert-success text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{registerSuccess}</span>
                    </div>
                }
                <h2 className="text-3xl font-bold text-violet-500 text-center mt-4">Register Here!</h2>
                <form onSubmit={handleRegister} >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name"
                            name="name"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                            name="email"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL"
                            name="photo"
                            className="input input-bordered" required />
                    </div>
                    <div className="relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPass ? "text" : "password"} placeholder="password"
                            name="password"
                            className="input input-bordered w-full" required />
                        <span className="absolute top-12  right-4 text-violet-500 text-2xl" onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>

                    <div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Already registered? <Link className="text-violet-500" to='/login'>Login</Link></a>
                        </label>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-violet-300 text-violet-500">Register</button>

                    </div>
                </form>
                {
                    registerError &&
                    <p className="text-xl text-red-600 font-bold text-center mb-4">{registerError}</p>
                }

            </div>

        </div>
    );
};

export default Register;