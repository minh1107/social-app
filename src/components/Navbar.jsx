import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import PaymentIcon from "@mui/icons-material/Payment";
import { Block, Mail, Notifications } from "@mui/icons-material";
import { Box } from "@mui/system";

const StyleToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

const UserBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
function Navbar({ mode }) {
  const [open, setOpen] = useState(false);
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: 'white',
    padding: "0 10px",
    borderRadius: "8px",
    width: "40%",
    height: "40px",
    lineHeight: "40px",
    fontSize: "18px",
  }));
  return (
    <AppBar position="sticky">
      <StyleToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Paybook
        </Typography>
        <PaymentIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Icons>
            <Badge color="error" badgeContent={4}>
              <Mail />
            </Badge>
            <Badge color="error" badgeContent={2}>
              <Notifications />
            </Badge>
            <Avatar
              onClick={(e) => setOpen(true)}
              sx={{ width: 30, height: 30 }}
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/316277964_3455229864721898_7607558342622733801_n.jpg?stp=dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dnxByOS6YFUAX_3WWjY&tn=rQiWCmB_waH2IhSe&_nc_ht=scontent.fhan2-5.fna&oh=00_AfDl7md6xxqNn_7cXJLcQf5X0TbfUy0qNpZClYmmDy4oOA&oe=63BCD9E2"
            />
          </Icons>
        </Box>
        <UserBox
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={(e) => setOpen(true)}
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/316277964_3455229864721898_7607558342622733801_n.jpg?stp=dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dnxByOS6YFUAX_3WWjY&tn=rQiWCmB_waH2IhSe&_nc_ht=scontent.fhan2-5.fna&oh=00_AfDl7md6xxqNn_7cXJLcQf5X0TbfUy0qNpZClYmmDy4oOA&oe=63BCD9E2"
          />
          <Typography variant="span">Minh</Typography>
        </UserBox>
      </StyleToolBar>
      <Menu
        sx={{}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
