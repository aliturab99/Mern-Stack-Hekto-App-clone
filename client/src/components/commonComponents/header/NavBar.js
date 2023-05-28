import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import logo from "../../../static/images/logo.png";
import MenuLink from '../menu/MenuLink';
import { Grid, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { themeStyles } from '../../../themeStyles';
import { Link } from 'react-router-dom';


const data = [
    {
        id: 'home',
        label: 'Home',
        options: [{ to: '/', option: 'Home 1' }, { to: '/home2', option: 'Home 2' }, { to: '/home3', option: 'Home 3' }],
        anchorEl: null,
        open: false
    },
    {
        id: 'details',
        label: 'Details',
        to: "/details",
        options: null,
        anchorEl: null,
        open: false
    },
    {
        id: 'products',
        label: 'Products',
        to: "/products",
        options: null,
        anchorEl: null,
        open: false
    },
    {
        id: 'checkout',
        label: 'Checkout',
        to: "/checkout",
        options: null,
        anchorEl: null,
        open: false
    },
    {
        id: 'shoppingcart',
        label: 'ShoppingCart',
        to: "/shoppingcart",
        options: null,
        anchorEl: null,
        open: false
    },
    {
        id: 'order-completed',
        label: 'Order Completed',
        to: "/order-complete",
        options: null,
        anchorEl: null,
        open: false
    }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ background: "var(--bg-color)" }} position="static">
            <Grid container sx={{ "alignItems": 'center', 'justiyContent': 'space-evenly' }}>
            <Grid item md={1}></Grid>
        <Grid item md={2}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
              }}
            >
              <Link> <img src={logo} /></Link>
            </Typography>
          </Toolbar>
        </Grid>

        <Grid item md={5}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MenuLink data={data} styleObject={{ color: 'black' }} />
          </Box>
        </Grid>
        {/* for mobile */}
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            ml: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none',
          }}
        >
          <Link> <img src={logo} /></Link>
        </Typography>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="black"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuLink data={data} styleObject={{ "color": 'black' }} />
          </Menu>
        </Box>
        {/* for mobile */}



                <Grid item md={3}>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <TextField
                            type="search"
                            size="small"
                            placeholder="search"
                            variant="outlined"
                            fullWidth
                            sx={{
                                "& fieldset": {
                                    border: "1px solid #e7e6e8 !important",
                                    borderRadius: 0
                                },
                            }}
                        />
                        <Button variant="contained" size="large" sx={{ ...themeStyles.searchInputBtn }}><SearchIcon /> </Button>

                    </Box>
                </Grid>
            </Grid>




        </AppBar>
    );
}
export default NavBar;