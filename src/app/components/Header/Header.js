// Header.js
import React from "react";
import { CgProfile } from "react-icons/cg";
import "./Header.module.css";
import { Navbar, Nav, NavDropdown, Container, Form } from "react-bootstrap";
import { HiShoppingBag } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
        {pathname !== "/" &&
          <Navbar.Brand href="/">Just Buy E-Com</Navbar.Brand>}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {pathname === "/" && (
            <Form.Control
              type="text"
              placeholder="Search"
              className="w-50 mx-auto"
            />
          )}
          <div className="ms-auto d-flex align-items-center">
          <HiShoppingBag
            style={{ color: "white", cursor: "pointer" }}
            size={30}
            className="mt-1 me-1 "
            onClick={() => navigate("/cart")}
          />
          <div className="text-white me-3 mt-1">Cart</div>

          <Nav className="d-none d-lg-block position-relative">
            <NavDropdown
              title={<CgProfile />}
              id="profile-dropdown"
              style={{
                fontSize: "25px",
                maxWidth: "200px",
                left: "-80px!important",
              }}
              className="custom-profile-dropdown dropdown-menu-left me-5 position-static"
            >
              <NavDropdown.Item href="/myorders">
                My Orders
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signIn">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </div>
        </Container>
        <style></style>
      </Navbar>
    </>
  );
};

export default Header;
