import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Login</title>
            </Helmet>


            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
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
                        <p className="text-centre">Do not have register yet? <Link className="text-violet-500" to='/register'>Register Now</Link></p>
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