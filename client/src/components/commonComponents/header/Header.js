import { Box, Grid, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { themeStyles } from '../../../themeStyles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuLink from '../menu/MenuLink';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';






function Header() {
    const data = [
        {
            id: 'english',
            label: 'English',
            to: "/test",
            options: [
                { to: "/English", option: "English" },
                { to: "/urdu", option: "Urdu" },
                { to: "/hindi", option: "Hindi" },
            ],
            anchorEl: null,
            open: false
        },
        {
            id: 'currency',
            label: 'USD',
            to: "/test",
            options: [
                { to: "/usd", option: "USD" },
                { to: "/urdu", option: "Urdu" },
                { to: "/hindi", option: "Hindi" },
            ],
            anchorEl: null,
            open: false
        }
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <header>

            {/* top bar started */}
            <Box fontFamily={"var(--josefin)"} >
                <Grid sx={themeStyles.topBar} alignItems='center' container color="var(--white)" bgcolor="var(--violet)" height="44px">
                    <Grid item md={4} xs={12} display={"flex"} justifyContent={"space-around"} >
                        <Box>
                            <Typography fontFamily={"var(--josefin)"} variant='body1'><MailOutlineIcon sx={{ verticalAlign: "middle", marginRight: "10px" }} />aliturab@gmail.com</Typography>
                        </Box>
                        <Box>
                            <Typography fontFamily={"var(--josefin)"} variant='body1'><PhoneInTalkIcon sx={{ verticalAlign: "middle", marginRight: "10px" }} />(12345)67890</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} xs={12} display={"flex"} justifyContent="flex-end" >
                        <Box display={'flex'}>

                            <MenuLink data={data} />
                            <Link to="/admin/login">
                                <Button
                                    endIcon={<PersonOutlineIcon sx={{ ...themeStyles.topbarIcon }} />}
                                    sx={{ ...themeStyles.btnMenu }}>
                                    Login
                                </Button>
                            </Link>
                            <Button
                                endIcon={<FavoriteBorderIcon sx={{ ...themeStyles.topbarIcon }} />}
                                sx={{ ...themeStyles.btnMenu }}>
                                Wishlist
                            </Button>
                            <IconButton
                                sx={{ ...themeStyles.btnMenu, "marginLeft": "20px" }}
                            >
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            {/* top bar ended */}

            {/* Navbar is started */}
            <NavBar />
            {/* Navbar is Ended */}
        </header>
    )
}

export default Header;