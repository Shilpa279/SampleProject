import React, { useRef } from "react";
import "../../src/styles/product-details.css"
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom"; 

const Register = () => {
  const signupFirstNameRef = useRef();
  const signupLastNameRef = useRef();
  const signupNumberRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
  const navigate = useNavigate(); 

  const submitHandler = async (e) => {
    e.preventDefault();

    const firstName = signupFirstNameRef.current.value;
    const lastName = signupLastNameRef.current.value;
    const mobileNumber = signupNumberRef.current.value;
    const email = signupEmailRef.current.value;
    const password = signupPasswordRef.current.value;

    const requestData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      phone: mobileNumber,
    };

    const authorizationToken = "Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS";

    try {
      const response = await fetch(
        "http://caffa.smsoman.com/api/V1/customers",
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
        alert("Your account has been created successfully.");
        navigate("/home"); 
      } else {
        alert("Registration failed. Please check your credentials.");
        console.error("Registration error:");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    ref={signupFirstNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    ref={signupLastNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    required
                    ref={signupNumberRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
