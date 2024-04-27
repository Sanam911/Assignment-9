import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet";
import EstateCards from "../Estate/EstateCards";

const Home = () => {
    const estate = useLoaderData();
    console.log(estate);
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Banner></Banner>
            <div className="flex flex-col justify-center item-centre">
                <div>
                    <h3 className="text-3xl font-bold text-violet-500 text-center">Estate</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 items-center">
                    {
                        estate.map(aEstate => <EstateCards key={aEstate.id} estate={aEstate}></EstateCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;