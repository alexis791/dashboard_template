import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ApartmentIcon from '@material-ui/icons/Apartment';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';

const ListaPlanteles = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip title="Cambiar Plantel">
                <Button style={{color:'white'}} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                    <ApartmentIcon/>
                    <Typography style={{margin:'0 5px'}} color="white" variant="button">Hermosillo</Typography>
                    <ExpandMoreIcon/>
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
                <MenuItem onClick={handleClose}>Hermosillo</MenuItem>
                <MenuItem onClick={handleClose}>Guadalajara</MenuItem>
            </Menu> 
        </div>
    )
}

export default ListaPlanteles