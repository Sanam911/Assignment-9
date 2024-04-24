import { Link } from "react-router-dom";



const Error = () => {
    return (

        <div className="font-dancing">
           
            <div className="grid min-h-full place-items-center bg-violet-50 px-6 py-24 sm:py-32 lg:px-8 ">

                <div className="text-center">
                    <p className="text-3xl font-semibold text-violet-500">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-violet-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
                        >
                            <Link to='/'>Go back home</Link>
                        </a>

                    </div>
                </div>

            </div>
           
        </div>
    );
};

export default Error;