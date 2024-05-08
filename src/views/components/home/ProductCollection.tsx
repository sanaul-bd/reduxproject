

import ProductCard from "../common/ProductCard";

const ProductCollection = () => {
    return (
        <div className="grid grid-cols-4 px-2 py-5 bg-slate-400" >
            {
                [1, 2, 3, 4].map((item) => <ProductCard

                    key={item}
                ></ProductCard>)
            }
        </div>
    );
};

export default ProductCollection;