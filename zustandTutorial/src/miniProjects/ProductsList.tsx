import React, { useState } from "react";

interface Data {
  name: string;
  id: number;
  price: string;
}

const ProductsList = () => {
  const productData: Data[] = [
    {
      name: "mobile",
      id: 1,
      price: "$100",
    },
    {
      name: "laptop",
      id: 2,
      price: "$150",
    },
    {
      name: "mouse",
      id: 3,
      price: "$10",
    },
    {
      name: "keyboard",
      id: 4,
      price: "$29",
    },
    {
      name: "playstation",
      id: 5,
      price: "$500",
    },
    {
      name: "lcd",
      id: 6,
      price: "$90",
    },
  ];

  const [cart, setCart] = useState<Data[]>([]);

  const handleAddItem = (product: Data) => {
    setCart([...cart, product]);
  };

  const handleRemove = (product: Data) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="grid grid-cols-2">
      <div className=" flex items-center flex-col">
        <h1 className="text-4xl font-bold mt-10">Cart</h1>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-center flex-col items-center mt-10"
          >
            <div className="bg-stone-500 flex mb-10 p-8 flex-col text-2xl text-white rounded-lg">
              <p>Name: {item.name}</p>
              <p>Price: {item.price}</p>
              <button
                className="bg-teal-500 mt-10 p-2 rounded-md hover:bg-teal-400 hover:cursor-pointer"
                onClick={() => handleRemove(item)}
              >
                Remove Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center flex-col">
        <h1 className="text-4xl font-bold mt-10">Products</h1>
        {productData.map((item) => (
          <div
            key={item.id}
            className="flex justify-center flex-col items-center mt-10"
          >
            <div className="bg-stone-500 flex mb-10 p-8 flex-col text-2xl text-white rounded-lg">
              <p>Name: {item.name}</p>
              <p>Price: {item.price}</p>
              <button
                className="bg-teal-500 mt-10 p-2 rounded-md hover:bg-teal-400 hover:cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
