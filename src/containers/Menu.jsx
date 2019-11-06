import React from 'react'
import { List, Paper } from '@material-ui/core';
import { FolderShared, Home, Work, Book, Flight, Functions, School, LocalHospital, Build, CreditCard, SportsHandball, Person } from '@material-ui/icons';
import ListElement from '../components/utilities/ListElement'
import ListElementSingle from '../components/utilities/ListElementSingle'
import ListItemLink from '../components/utilities/ListItemLink'
import { CSSTransition } from 'react-transition-group'


const Menu = (props) => {

    return(
        <CSSTransition in={props.stateMenu} timeout={2000} classNames="menu">
            <List className="menu" component="nav" aria-label="main mailbox folders">
                <Paper style={{height:'100%'}}>
                    <ListElementSingle icon={ <Home/> } primary="Inicio" to="/"/>
                    <ListElement icon={ <FolderShared/> } name="Administración escolar">
                        <ListItemLink to="/planteles" primary="Planteles"/>
                        <ListItemLink to="/edificios" primary="Edificios"/>
                        <ListItemLink to="/aulas" primary="Aulas"/>
                    </ListElement>
                    <ListElement icon={<School/>} name="Servicios Estudiantiles"> </ListElement>
                    <ListElement icon={<Person/>} name="Cargas Académicas"> </ListElement>
                    <ListElement icon={<CreditCard/>} name="Becas"> </ListElement>
                    <ListElement icon={<SportsHandball/>} name="Extracurriculares"> </ListElement>
                    <ListElement icon={<LocalHospital/>} name="Servicio Social"> </ListElement>
                    <ListElement icon={<Build/>} name="Prácticas Profesionales"> </ListElement>
                    <ListElement icon={<Functions/>} name="Tutorías"> </ListElement>
                    <ListElement icon={<Flight/>} name="Movilidad"> </ListElement>
                    <ListElement icon={<Book/>} name="Titulación"> </ListElement>
                    <ListElement icon={<Work/>} name="Bolsa de trabajo"> </ListElement>
                </Paper>
            </List>
        </CSSTransition>
    )
}

export default Menu