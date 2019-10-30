import React from 'react'
import { Grid, Typography, Paper, Container, makeStyles } from '@material-ui/core'

const styles = makeStyles( theme => ({
    paper: {
        padding: theme.spacing(3 ,2)
    }
}) )

const Home = () => {

    const classes = styles()

    return (
        <Container fixed>
            <Grid container  style={{margin:"30px 0", backgroundColor:"white"}}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" component="h3">
                            Home
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home