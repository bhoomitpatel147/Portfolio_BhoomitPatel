import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h4 className="text-light">B H O O M I T</h4>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://ca.linkedin.com/in/bhoomit-patel-830731246?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/bhoomit.patel.758/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/bhoomitpatel147"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved by Bhoomit Patel</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
