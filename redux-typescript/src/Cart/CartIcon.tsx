import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "./cartSlice";
import type { RootState } from "./store/cart-store";

const CartIcon = () => {
  const cartCount = useSelector((state: RootState) => state.cart.items.length);
  const dispatch = useDispatch();

  return (
    <div
      className="relative border-2 border-amber-600 rounded-full flex items-center justify-center p-4 cursor-pointer"
      onClick={() => dispatch(toggleCart())}
    >
      {cartCount > 0 && (
        <span className="bg-orange-500 text-white py-1 px-[11px] rounded-full absolute bottom-13 left-14 ">
          {cartCount}
        </span>
      )}
      <BsCart4 className="text-5xl text-amber-600" />
    </div>
  );
};

export default CartIcon;
