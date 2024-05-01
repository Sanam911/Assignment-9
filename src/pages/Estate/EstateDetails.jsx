import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


const EstateDetails = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);
    console.log(estate);
    return (
        <div className="mx-auto p-8 ">
            <Helmet>
                <title>Estate</title>
            </Helmet>
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${estate.img_URL})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">{estate.estate_title}</h1>
                        <p className="mb-5 text-3xl font-bold text-violet-500">{estate.segment_name}</p>

                    </div>
                </div>
            </div>

            <div className="card card-side bg-violet-50 shadow-xl mt-6">
                <figure><img className="w-[350px]" src={estate.img_URL} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-violet-500 text-2xl font-bold">{estate.estate_title}</h2>
                    <p className="text-bold text-violet-400 text-xl">{estate.segment_name}</p>

                    <div className="flex gap-4">
                        <h3 className="text-xl text-violet-500 font-bold">Details:</h3>
                        <p className="text-bold text-violet-400 text-xl">{estate.description}</p>
                    </div>
                    <div>
                        <p className="text-bold text-violet-400 text-xl">
                            <span className="text-xl text-violet-500 font-bold">Status:</span> {estate.status}
                        </p>
                        <p className="text-bold text-violet-400 text-xl">
                            <span className="text-xl text-violet-500 font-bold">Area:</span> {estate.area}
                        </p>
                        <p className="text-bold text-violet-400 text-xl">
                            <span className="text-xl text-violet-500 font-bold">Price:</span> {estate.price}
                        </p>
                        <p className="text-bold text-violet-400 text-xl">
                            <span className="text-xl text-violet-500 font-bold">Location:</span> {estate.location}
                        </p>
                    </div>

                    <div className="flex gap-1">

                        <div>
                            <span className="text-xl text-violet-500 font-bold">Facilities:</span>

                        </div>
                        <div className="flex gap-2">

                            {
                                estate.facilities.map((facilities, idx) => <p className="text-bold text-violet-400 text-xl" key={idx}>{facilities},</p>)
                            }

                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-6 bg-violet-50 rounded-lg p-4">
                <center>
                    <h3 className="text-4xl text-violet-500 font-bold ">Location Map</h3>
                </center>
                <div className=".leaflet-container p-4">
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                {estate.location}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>

    );
};

export default EstateDetails;