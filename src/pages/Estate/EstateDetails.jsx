import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);
    console.log(estate);
    return (
        <div className="mx-auto p-4">
            <Helmet>
                <title>Estate</title>
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${estate.img_URL})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">{estate.estate_title}</h1>
                        <p className="mb-5 text-2xl text-violet-500">{estate.segment_name}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;