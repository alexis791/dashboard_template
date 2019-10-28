import React from 'react'
import List from '@material-ui/core/List';
import { FolderShared, Home } from '@material-ui/icons';
import ListElement from '../components/utilities/ListElement'
import ListElementSingle from '../components/utilities/ListElementSingle'
import ListItemLink from '../components/utilities/ListItemLink'


const Menu = () => {

    return(
        <>
        <List className="menu" component="nav" aria-label="main mailbox folders">
            <ListElementSingle icon={ <Home/> } primary="Inicio" to="/"/>
            <ListElement icon={ <FolderShared/> } name="Administración escolar">
                <ListItemLink to="planteles" primary="Planteles"/>
                <ListItemLink to="edificios" primary="Edificios"/>
                <ListItemLink to="aulas" primary="Aulas"/>
            </ListElement>
        </List>
        </>
    )
}

export default Menu