

import DSlider from "../../../components/custom/DSlider";
import ProductCollection from "../../../components/home/ProductCollection";




const Home = () => {
    return (
        <main>
            <div className="bg-sky-200">
                <h2 className='underline font-semibold text-black'>This is Home </h2>
                <DSlider></DSlider>
            </div>
            <div>
                <ProductCollection></ProductCollection>
            </div>
        </main>
    );
};

export default Home;