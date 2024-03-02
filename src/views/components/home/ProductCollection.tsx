

import ProductCard from "../common/ProductCard";

const ProductCollection = () => {
    return (
        <div className="grid grid-cols-4 p-6 " >
            {
                [1, 2, 3, 4].map((item) => <ProductCard

                    key={item}
                ></ProductCard>)
            }
        </div>
    );
};

export default ProductCollection;