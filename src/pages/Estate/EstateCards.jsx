import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const EstateCards = ({ estate }) => {

    useEffect(() => {
        AOS.init();
    }, [])
    // eslint-disable-next-line react/prop-types
    const { estate_title, img_URL, segment_name, id } = estate;
    return (
        <div data-aos="zoom-in" className="card lg:w-80 bg-base-100 shadow-xl text-violet-500 mx-auto">
            <figure className="px-10 pt-10">
                <img src={img_URL} alt="Estate" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{estate_title}</h2>
                <p>{segment_name}</p>
                <div className="card-actions">
                    <Link to={`/estate/${id}`}>
                        <button className="btn bg-violet-200 text-violet-500 font-bold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EstateCards;