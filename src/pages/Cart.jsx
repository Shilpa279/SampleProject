import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector } from "react-redux";
import CartItem from "../components/UI/cart/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <div class="wrapper">
      <CommonSection title="Your Cart" />
       <ul class="list">
          {cartItems.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartItems.map((item, index) => (
              <li>
              <CartItem item={item} key={index} />
              </li>
            ))
          )}
        </ul>
        {cartItems.length != 0 ? (
        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          </div>
        ) : (
          ""
        )}
        </div>
    </Helmet>
  );
};

export default Cart;
