import { useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
const ProductsList = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: null,
      rating: {
        rate: 0,
        count: 0,
      },
    },
  ]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Error fetching products:", error));
  }, []);

  return (
    <div className="m-10 mt-20">
      <div className="flex justify-between px-5">
        <h1 className="text-4xl font-bold">Products</h1>
        <CartIcon />
      </div>

      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h2>{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100px", height: "100px" }}
          />
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <button
            className="bg-lime-600 p-3 mt-5 text-white text-xl cursor-pointer"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
