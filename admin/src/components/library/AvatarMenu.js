import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Avatar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';
import { connect, useDispatch } from 'react-redux';

function AvatarMenu({user}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <div>
      <Avatar
        sx={{
          bgcolor: deepOrange[500]
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {
          user.name.slice(0, 1)
        }
      </Avatar>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          <Button>
            <NavLink
              style={{ "textDecoration": "none", "color": "#000" }}
              to={"/admin/dashboard/users/profile"}
              onClick={handleClose}
            >
              Profile Settings
            </NavLink>
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            onClick={handleSignOut}
            style={{ "textDecoration": "none", "color": "#000" }}
          >
            Logout
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
      user: state.auth.user
  }
}

export default connect(mapStatetoProps)(AvatarMenu)