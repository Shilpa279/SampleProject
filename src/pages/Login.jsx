import React, { useRef } from "react";
import "../../src/styles/product-details.css"
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const submitHandler = async (e) => {
    e.preventDefault();

    // Get the user's email and password from the refs
    const email = loginNameRef.current.value;
    const password = loginPasswordRef.current.value;

    // Prepare the request data for the API
    const requestData = {
      username: email,
      password: password,
    };

    const authorizationToken = "Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS";

    try {
      // Make a POST request to the authentication API
      const response = await fetch(
        "http://caffa.smsoman.com/api/V1/integration/customer/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": authorizationToken,
          },
          body: JSON.stringify(requestData),
        }
      );

      if (response.ok) {
        sessionStorage.setItem('logedin', true);
        console.log("entered---");
        // Authentication successful, navigate to the cart page
        navigate("/home");
      } else {
        // Handle authentication failure, e.g., show an alert
        alert("Login failed. Please check your credentials.");
        console.error("Login error------:");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Login error:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
