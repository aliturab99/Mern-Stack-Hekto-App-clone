import { Box, Button } from "@mui/material";
import { useState } from "react";
import { themeStyles } from '../../../themeStyles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { BrowserRouter, NavLink } from "react-router-dom";

function MenuLink({ data, styleObject,menuStyle }) {

    const [dropdowns, setDropdowns] = useState(data || []);

    const handleClick = (index, event) => {
        const newDropdowns = [...dropdowns];
        newDropdowns[index].anchorEl = event.currentTarget;
        newDropdowns[index].open = true;
        setDropdowns(newDropdowns);
    };


    const handleClose = (index) => {
        const newDropdowns = [...dropdowns];
        newDropdowns[index].anchorEl = null;
        newDropdowns[index].open = false;
        setDropdowns(newDropdowns);
    };


    return (
        <>
            {dropdowns.map((dropdown, index) => (
                dropdown.options ?
                    <Box key={dropdown.id}>
                        <Button
                            id={dropdown.id}
                            aria-controls={dropdown.open ? dropdown.id + '-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={dropdown.open ? 'true' : undefined}
                            onClick={(event) => handleClick(index, event)}
                            sx={{ ...themeStyles.btnMenu, ...styleObject }}
                            endIcon={<KeyboardArrowDownIcon style={{ ...themeStyles.btnMenuIcon }} />}
                        >
                            {dropdown.label}
                        </Button>
                        <Menu
                            key={index}
                            id={dropdown.id + '-menu'}
                            MenuListProps={{
                                'aria-labelledby': dropdown.id,
                            }}
                            anchorEl={dropdown.anchorEl}
                            open={dropdown.open}
                            onClose={() => handleClose(index)}
                            TransitionComponent={Fade}
                        >
                            {dropdown.options.map((option, index) => (
                                <MenuItem key={index} onClick={() => handleClose(index)}>
                                    <NavLink  to={option.to} style={{ ...themeStyles.menuLink, ...styleObject }}>{option.option}</NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    :
                    <Button
                        sx={{ ...themeStyles.btnMenu }}
                        key={dropdown.id}
                    >
                        <NavLink to={dropdown.to} style={{ ...themeStyles.btnMenu, ...styleObject, display: { xs: 'block', md: 'flex'}}}
                            
                        >
                            {dropdown.label}
                        </NavLink>
                    </Button>

            ))}
        </>
    );
}

export default MenuLink;