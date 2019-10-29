import React from 'react'

import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';

const Profile = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    }; 

    return(
        <div>
            <Tooltip title="Perfil">
                <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                <Avatar src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} />
                </Button>
            </Tooltip>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={handleClose}>Mi Cuenta</MenuItem>
                <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
            </Menu>  
        </div>
    )
}

export default Profile