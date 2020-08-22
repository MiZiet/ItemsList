import React from "react";

import { Navbar, NavbarBrand } from "reactstrap";

const AppNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Recruitment task</NavbarBrand>
    </Navbar>
  );
};

export default AppNavbar;
