import React from "react";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = styled(AppBar)`
  display: static;
  background: #111111;
  margin: 0px auto;
`;

const Heading = styled(Typography)`
  margin-left: 10px;
  font-size: 25px;
`;
const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <MenuIcon />
        <Heading>Notes</Heading>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
