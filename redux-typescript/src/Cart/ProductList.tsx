import { useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

export interface ProductsData {
  id: number;
  title: string;
  price: number;
  description: string;
  image: undefined | string;
}

const ProductList = () => {
  const [products, setProducts] = useState<ProductsData[]>([
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      image: undefined,
    },
  ]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((e) => console.log("failed to load data", e));
  }, []);

  const dispatch = useDispatch();
  return (
    <div className="m-10 mt-20">
      <div className="flex gap-105 mb-10 items-center">
        <h1 className="text-4xl font-bold mb-10 text-amber-600">Products</h1>
        <CartIcon />
      </div>
      {showMessage && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-10 animate-slide-in">
          <p className="text-lg font-semibold">✓ Item added to cart!</p>
        </div>
      )}
      {products.map((items) => (
        <div className="flex flex-col mb-10">
          <div
            key={items.id}
            className="border hover:border-amber-400 drop-shadow-2xl bg-white/10 shadow-2xl p-10 rounded-2xl flex flex-col max-w-170 group"
          >
            <h2 className="text-xl font-bold  text-green-600">{items.title}</h2>
            <div className="flex items-center gap-5 mt-10">
              <p className="text-xl text-slate-300">{items.description}</p>
              <img
                src={items.image}
                alt={items.title}
                className="size-60 bg-white/10 rounded-2xl p-4 transition-transform duration-300 transform group-hover:bg-amber-400/60 group-hover:scale-105"
              />
            </div>

            <div className="flex justify-between mt-10 items-center">
              <div className="">
                <p className="text-2xl font-bold text-lime-400">
                  ${items.price} - only
                </p>
              </div>
              <button
                className="text-xl font-bold bg-linear-to-tr from-amber-400/30 to-green-700 p-5 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => {
                  dispatch(addToCart(items));
                  setShowMessage(true);
                  setTimeout(() => {
                    setShowMessage(false);
                  }, 3000);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
