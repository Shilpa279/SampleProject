import React from "react";
import { ListGroupItem } from "reactstrap";

import "../../../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
const CartItem = ({ item }) => {
  console.log("item---------", item);
  const { id, title, price, image, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <div class="product__items">
      <div className="product__img">
        <img src={image} alt="product-img" className="w-5" />
      </div>
      <div>
        <h6 className="cart__product-title">{title}</h6>
        <p className=" d-flex align-items-center gap-5 cart__product-price">
          {quantity}x <span>${totalPrice}</span>
        </p>
        <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
          <span className="increase__btn" onClick={incrementItem}>
            <i class="ri-add-line"></i>
          </span>
          <span className="quantity">{quantity}</span>
          <span className="decrease__btn" onClick={decreaseItem}>
            <i class="ri-subtract-line"></i>
          </span>
        </div>
      </div>

      <span className="delete__btn" onClick={deleteItem}>
        <i class="ri-close-line"></i>
      </span>
    </div>
  );
};

export default CartItem;
