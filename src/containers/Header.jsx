import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Grid from '@material-ui/core/Grid'
import Profile from '../components/utilities/Profile'
import ListaPlanteles from '../components/utilities/ListaPlanteles'
import Tooltip from '@material-ui/core/Tooltip'


export default function ButtonAppBar() {
  return (
    <div className='header'>
      <AppBar position="static">
        <Toolbar>
          <Grid item xs={6}>
            <Tooltip title="Menú">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Tooltip>
          </Grid>
            <Grid container direction="row" justify="flex-end" alignItems="center" item xs={6}>
                <ListaPlanteles/>
                <Profile/>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}