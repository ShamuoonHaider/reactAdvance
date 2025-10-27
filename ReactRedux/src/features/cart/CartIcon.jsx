import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "./cartSlice"; // Make sure to create this action

const CartIcon = () => {
  const cartCount = useSelector((state) => state.cart.items.length);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  return (
    <div className="relative" onClick={handleCartClick}>
      {cartCount > 0 && (
        <span className="bg-orange-500 text-white py-1 px-[11px] rounded-full absolute bottom-10 ">
          {cartCount}
        </span>
      )}
      <IoMdCart size={30} className="cursor-pointer" />
    </div>
  );
};

export default CartIcon;
