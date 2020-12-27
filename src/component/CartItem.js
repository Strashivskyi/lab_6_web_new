import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
   <div className="general_container">
      <img src={item.image} alt={item.title} className="cart_item_image"/>
      <div className="cart_item_title_grid_container">
      <Link to={`/products/${item.id}`} className="cart_item_title">
        <p>{item.title}</p>
      </Link>
      <p className="cart_item_price">${item.price}</p>
      </div>
      <div className="cart_item_remove_button_container">
      <button className="cart_item_remove_button" onClick={() => removeHandler(item.id)}>REMOVE</button>
      </div>
      <div>
      <div className="cart_item_select_quantity_container">
      <p className="cart_item_quantity">Choose quantity</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.id, e.target.value)}
        className="cart_item_select"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      </div>
      </div>
   </div>


  );
};

export default CartItem;