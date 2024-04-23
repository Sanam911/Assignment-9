import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">


            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <h2 className="text-3xl font-bold text-violet-500 text-center mt-4">Login Now!</h2>
                <form className="card-body">
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
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" 
                        name="password"
                        className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <p className="text-centre">Do not have register yet? <Link className="text-violet-500" to='/register'>Regidter Now</Link></p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-violet-300 text-violet-500">Login</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;