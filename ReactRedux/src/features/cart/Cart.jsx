import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "./cartSlice";
import { removeFromCart } from "./cartSlice";

export const Cart = () => {
  const { items, isOpen } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  if (!isOpen) return null;

  const totalPrice = items.reduce((sum, items) => sum + items.price, 0);

  return (
    <div className="fixed inset-0 bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-full bg-neutral-800 shadow-lg p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <button
            onClick={() => dispatch(toggleCart())}
            className="text-3xl font-bold hover:text-red-700 cursor-pointer"
          >
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="border-b pb-4 flex gap-4 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-lime-600 font-bold mt-2">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(index))}
                    className="bg-red-400 text-white p-2 rounded cursor-pointer font-semibold text-lg"
                  >
                    remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between text-xl font-bold mb-4">
                <span>Total:</span>
                <span className="text-lime-600">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
