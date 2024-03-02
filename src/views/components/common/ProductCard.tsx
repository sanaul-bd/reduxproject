
import img from '../../../assets/product Image/product_3.jpg';


const ProductCard = () => {
    return (
        <div className=' flex justify-evenly bg-orange-200 m-3 p-3 rounded-md'>
            <div>
                <img style={{height: "100px", width: "100px"}} src={img} alt="Product Image" />
            </div>
            <div>
                <h3>Product Title</h3>
                <p>product Price</p>
            </div>
        </div>
    );
};

export default ProductCard;