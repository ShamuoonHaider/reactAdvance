import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
}

const ProductList = ({ products }: { products: Product[] }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const handleClick = (product: Product) => {
    setCart([...cart, product]);
  };

  const handleRemove = (product: Product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      ))}

      <div>
        <h1>Cart</h1>
        {cart.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <button onClick={() => handleRemove(item)}>remove cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
