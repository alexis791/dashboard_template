import React, { forwardRef } from 'react'
import { Grid, Typography, Paper, Container, makeStyles, Divider, Button } from '@material-ui/core'
import { Add, AddBox, ArrowUpward } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import MaterialTable from 'material-table'


import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import Save from '@material-ui/icons/Save';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    Save: forwardRef((props, ref) => <Save {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const styles = makeStyles( theme => ({
    paper: {
        padding: theme.spacing(3,2)
    },
    container: {
        margin: theme.spacing(4,0)
    },
    divider: {
        margin: theme.spacing(2,0)
    }
}) )

const Aulas = (props) => {

    const classes = styles()

    return (
        <>
        <Container maxWidth="lg">
            <Grid container  className={classes.container}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Grid item >
                            <Typography variant="h6" component="h5">
                                Breadcrumbs
                            </Typography>
                        </Grid>
                        <Divider className={classes.divider}/>
                        <Grid container>
                            <Grid item xs={6} >
                                <Typography variant="h4" component="h1">
                                    Aulas
                                </Typography>
                            </Grid>
                            <Grid container item xs={6}  justify="flex-end">
                                <Link to={`${props.match.url}/crear`}>
                                    <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                                        <Add/>
                                        Nueva Aula
                                    </Button>     
                                </Link>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>

        <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={12}>
                    <Paper>
                        <div style={{ maxWidth: '100%' }}>
                            <MaterialTable
                            localization = {
                                {
                                    header:{
                                        actions: 'Acciones'
                                    }
                                }
                            }
                            icons={tableIcons}
                            columns={[
                                { title: 'Id', field: 'id' },
                                { title: 'Clave', field: 'clave' },
                                { title: 'Edificio', field: 'edificio' },
                                { title: 'Descripcion', field: 'descripcion'},
                                { title: 'Capacidad', field: 'capacidad'},
                            ]}
                            data={[{ id: '1', clave: 'H-A1', descripcion:'Aula interectiva', edificio: 'H', capacidad: 63 }]}
                            actions={[
                                {
                                    icon: () => <Save/>,
                                    tooltip: 'Save User',
                                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                                  },
                              ]}
                              options={{
                                actionsColumnIndex: -1
                              }}
                            />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default Aulas