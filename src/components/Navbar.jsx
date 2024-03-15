import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    link: "/",
    both: true,
  },
  {
    label: "Login",
    link: "/login",
    auth_required: false,
  },
  {
    label: "Signup",
    link: "/signup",
    auth_required: false,
  },
];

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_auth_state = useSelector((state) => state.user_auth);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => {
          const { both, auth_required } = item;
          return both ===;
          return both === true || auth_required true || auth_required === user_auth_ === user_auth_state.user_auth ? (
            <ListItem key={index} disablePadding>
              <Liststate.user_auth ? (
            <ListItem key={index} disablePadding>ItemButton sx={{ textAlign: "center" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item
                <ListItemText primary={item.label} />
              </ListItemButton.label} />
              </ListItemButton>
            </ListItem>
          ) : null;
        })}
      </List>>
            </ListItem>
          ) : null;
       
    </Box>
  );

 })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleLogin handleLoginClick = () => {
    navigate(navItems[1].link);
  };

  const handleSignupClick = () => {
    navigate(navItems[Click = () => {
    navigate(nav2].link);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButtonItems[1].link>
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >);
  };

  const handleSignupClick = () => {
    navigate(navItems[2].link);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          {isMobile ? (
                {drawer}
             
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
               </Drawer>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
  onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                container                Logo
              </Typography>
              <Box sx={{ display: { xs={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Logo
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item, ind) => {
                  const { both, auth_required } = item;
                  return both || auth_required === user_auth_state.user_auth ? (
                    <Button
                      key={ind}
                      sx={{ color: "#fff" }}
                      onClick={() => {
                        if (item.label === "Login") {
                          handleLoginClick();
                        } else if (item.label === "Signup") {
                          handleSignupClick();
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                  ) : null;
                })}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export { Navbar };