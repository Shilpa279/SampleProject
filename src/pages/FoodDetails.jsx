import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import { useDispatch } from "react-redux";
import apiService from "./apiService";
import ProductCardNew from "../components/UI/product-card/ProductCardNew";

const FoodDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const dispatch = useDispatch();
 

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productData = await apiService.getProductDetails(id); 
        setProductDetails(productData);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  console.log("Product details-----",productDetails);

  
  return (
    <Helmet title="Product-details">
      <section>
        <Container>
          <Row>
            {productDetails ? (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
                    {/* <ProductCard item={productDetails.product} /> */}
                    <ProductCardNew item={productDetails.product} />
                </Col>
            ) : (
              <div>Loading...</div>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
