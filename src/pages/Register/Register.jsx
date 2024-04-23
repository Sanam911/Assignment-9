import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">


        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-3xl font-bold text-violet-500 text-center mt-4">Register Here!</h2>
            <form className="card-body">
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" 
                    name="password"
                    className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Already registered? <Link className="text-violet-500" to='/login'>Login</Link></a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-violet-300 text-violet-500">Register</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Register;