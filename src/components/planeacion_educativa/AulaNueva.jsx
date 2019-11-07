import React from 'react'

import { Container,Grid, Paper, makeStyles, FormControl, TextField, Divider, Typography, Button, Breadcrumbs } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { NavigateNext } from '@material-ui/icons'

const styles = makeStyles( theme => ({
    root: {
        padding: theme.spacing(3,2)
    },
    container: {
        margin: theme.spacing(4,0)
    },
    divider: {
        margin: theme.spacing(2,0)
    },
    textField:{
        width: '100%'
    },
}) )

function handleClick(event) {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
  }

const AulaNueva = () => {

    const classes = styles()

    return(
        <>
            <Container maxWidth="md">
                <Grid container  className={classes.container}>
                    <Grid item xs={12}>
                        <Paper className={classes.root}>
                            <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
                            <Link style={{color:'rgba(0, 0, 0, 0.54)', textDecoration:'none'}} href="/" onClick={handleClick}>
                                Material-UI
                            </Link>
                            <Link style={{color:'rgba(0, 0, 0, 0.54)', textDecoration:'none'}} color="secondary" href="/getting-started/installation/" onClick={handleClick}>
                                Core
                            </Link>
                            <Typography color="textPrimary">Breadcrumb</Typography>
                        </Breadcrumbs>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        <Container maxWidth="md">
            <Paper className={classes.root}>
                <Grid container justify="center">
                    <Grid container>
                        <Grid item xs={6} >
                            <Typography variant="h5" component="h4">
                                Crear Nueva Aula
                            </Typography>
                        </Grid>
                        <Grid container item md={6} justify="flex-end">
                                
                            <Link style={{textDecoration:'none'}} to="/aulas">
                                <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                                    Lista de Aulas
                                </Button>    
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider className={classes.divider}/>
                        </Grid>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <FormControl className={classes.textField}>
                            <TextField
                                required
                                id="clave"
                                label="Clave"
                                margin="normal"
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl className={classes.textField}>
                            <TextField
                                required
                                id="capacidad"
                                label="Capacidad"
                                margin="normal"
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl className={classes.textField}>
                            <TextField
                                required
                                id="descripcion"
                                label="Descripción"
                                margin="normal"
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl className={classes.textField}>
                            <TextField
                                required
                                id="edificio"
                                label="Edificio"
                                margin="normal"
                                variant="outlined"
                            />
                        </FormControl>
                        <Grid container justify="space-evenly" className={classes.root}>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Registrar
                            </Button>
                            <Button variant="contained" color="secondary" className={classes.button}>
                                Cancelar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
        </>
    )
}

export default AulaNueva