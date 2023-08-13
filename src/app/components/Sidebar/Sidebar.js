// Sidebar.js
import React, { useState } from "react";
import { Form, Nav } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";
import { CgProfile } from "react-icons/cg";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [price, setPrice] = useState("0");

  const {pathname} =  useLocation();

  return (
    <div>
    {pathname === "/" &&
    <>
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo text-center py-3 pb-0">
        <h1 className="logo-text text-center">Just Buy E-com</h1>
      </div>
      {/* <Divider/> */}
      <hr></hr>

      <Form.Label>Price</Form.Label>
      <FormRange value={price} onChange={(e) => setPrice(e.target.value)} />

      <h2 className="text-white  mt-3">Category</h2>
      <div className="d-flex flex-column justify-content-center  w-100">
      <Form.Check // prettier-ignore
        type="checkbox"
        label="Mens Clothing"
        className="mt-2"
      />
        <Form.Check // prettier-ignore
        type="checkbox"
        label="Womens Clothing"
        className="mt-2"
      />
        <Form.Check // prettier-ignore
        type="checkbox"
        label="Jwellery"
        className="mt-2"
      />
        <Form.Check // prettier-ignore
        type="checkbox"
        label="Electronics"
        className="mt-2"
      />
      </div>
    </div>
    </>  }
    </div>
  );
};

export default Sidebar;
