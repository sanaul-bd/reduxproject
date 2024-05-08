

import { useEffect, useState } from "react";
import DSlider from "../../../components/custom/DSlider";
import ProductCollection from "../../../components/home/ProductCollection";
import productService from "../../../../services/Product.service";




const Home = () => {

    // call data fetch for loading data first 
    const [product, setProduct] = useState<[] | any[]>([]);

    useEffect(() => {
        productService.getAllProducts()
            .then(data => setProduct(data))
            .catch(error => error
            )
    }, [])


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