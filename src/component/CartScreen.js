import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./CartScreen.css";
import {
  StyledButton
} from "./ItemInfo.styled";
// Components
import CartItem from "./CartItem";

// Actions
import { addToCart, removeFromCart, removeAllFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  // const removeAllFromCartHandler = () => {
  //   dispatch(removeAllFromCart());
  // };


  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <>
    <br/>
    <br/>
    <p className="shopping_cart_title">Shopping Cart</p>
      <div>
        <div>
          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/products">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div >
          <div className="cart_text_under_items">
            <p>You have <span className="cart_text_under_items_price">{getCartCount()}</span> items in your cart</p>
            <p>Total price: <span className="cart_text_under_items_price">${getCartSubTotal()}</span></p>

          </div>
          <div className="buttons">
          <Link to={'/products'}><StyledButton type="text" shape="round" className="left_button">Back to Catalog</StyledButton></Link>;
          <Link to={'/products'}><StyledButton type="text" shape="round">Proceed and Checkout</StyledButton></Link>;
          {/* <Link to={'/products'}><StyledButton onclick={() =>removeAllFromCartHandler()}type="text" shape="round">CLEAR ALL</StyledButton></Link>; */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
