import React, { useState, useEffect, useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import apiService from "./apiService";

const Home = () => {
  const [responseData, setResponseData] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10); 
  const containerRef = useRef(null);

  // Api call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.getProducts();
        setResponseData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  console.log("final data-------", responseData);
  console.log("typeof responsedata----", typeof responseData);

  // Function for scrolling
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const containerHeight = container.clientHeight;
      const scrollPosition = container.scrollTop;
      const totalHeight = container.scrollHeight;

      if (containerHeight + scrollPosition >= totalHeight) {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 10); 
      }
    }
  };

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <div
              ref={containerRef}
              onScroll={handleScroll}
              style={{ overflowY: "auto", maxHeight: "500px" }}
            ></div>
            {responseData && responseData.products
              ? responseData.products.slice(0, visibleProducts).map((item) => (
                  <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                    <ProductCard item={item} />
                  </Col>
                ))
              : null}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
