import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";


function Footer() {
  
    return (
        <div fluid id="foot" className=" jumbo ">
        <div className="overlay"></div>
        <Container>
        <h6>Copyright &copy; 2020</h6>
        </Container>
      </div>

    );
}

export default Footer;