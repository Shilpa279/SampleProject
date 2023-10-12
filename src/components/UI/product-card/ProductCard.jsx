import React from "react";
import "../../../styles/product-card.css";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import { useDispatch } from "react-redux";
import { useState } from "react";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  console.log("props------",props);
  const { id } = props.item;
  const dispatch = useDispatch();
  const title = props.item.description;
  const price = props.item.price;
  const image = props.item.image;

  // Access the navigation function
  const navigate = useNavigate();

  const addItems = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image,
      })
    );

    // const isAddedToCart = sessionStorage.getItem('addedtocart');
    // if(isAddedToCart) {
    //   sessionStorage.setItem('addedtocart', true);
    // }
  };

  const addToCart = () => {
     // Navigate to the login page
    const isLogedIn = sessionStorage.getItem('logedin');
    if(!isLogedIn) {
      navigate("/login");
    }else{
      addItems()
      alert("Item added to cart.");
    }

  }

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={props.item.image} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{props.item.description}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${props.item.price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
