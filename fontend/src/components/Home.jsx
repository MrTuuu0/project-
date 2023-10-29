import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useGetAllProductsQuery } from "../slices/productsApi";
import { addToCart } from "../slices/cartSlice";

const Home = () => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const { data, error, isLoading } = useGetAllProductsQuery();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        history.push("/cart");
    }
    return (
        <div className="home-container">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occured...</p>
            ) : (
                <>
                    <h2>New Arrivals</h2>
                    <div className="products">
                        {data?.map((product) => (
                            <div key={product.id} className="product">
                                <h3>{product.name}</h3>
                                <img src={product.image} alt={product.name} />
                                <div className="details">
                                    <span>{product.description}</span>
                                </div>
                                <div className="details">
                                    <span className="price">VND{product.price}</span>
                                </div>
                                <button onClick={() => handleAddToCart(product)}>
                                    Add To Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;