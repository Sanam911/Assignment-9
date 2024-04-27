

const EstateCards = ({ estate }) => {
    const { estate_title, img_URL, segment_name } = estate;
    return (
        <div className="card lg:w-80 bg-base-100 shadow-xl text-violet-500">
            <figure className="px-10 pt-10">
                <img src={img_URL} alt="Estate" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{estate_title}</h2>
                <p>{segment_name}</p>
                <div className="card-actions">
                    <button className="btn bg-violet-200 text-violet-500 font-bold">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default EstateCards;