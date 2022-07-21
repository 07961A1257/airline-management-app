/* eslint-disable react/prop-types */
import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { format } from 'date-fns';

const Topbar = ({ appBar, mobileOpen, menuButton, auth = true, logOutApp }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = (isLogOut = false) => {
    setAnchorEl(null);
    if (isLogOut) logOutApp();
  };

  const handleMenu = (event) => setAnchorEl(event.currentTarget);

  return (
    <AppBar color="primary" className={appBar} position="fixed">
      <Toolbar>
        {auth && (
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={mobileOpen}
            className={menuButton}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography sx={{ flexGrow: 1 }} color="secondary">
          {auth
            ? `
         Last logged In ${format(new Date(), 'MMMM d, yyyy')}
         `
            : `Welcome to Airline Services`}
        </Typography>
        {auth && (
          <>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenu}>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}>
              <MenuItem onClick={() => handleClose(true)}>Log Out</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
