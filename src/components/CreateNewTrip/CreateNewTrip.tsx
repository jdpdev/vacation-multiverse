import { Button, createStyles, Grid, Paper, TextField, Theme } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/styles'
import React from 'react'

//import './CreateNewTrip.css'

const styles = (theme: Theme) =>
  createStyles({
    paper: {
        marginTop: '4em',
        padding: '1em'
    }
  })

interface Props extends WithStyles<typeof styles> {}

export function CreateNewTrip({classes}: Props) {
    return (
        <Grid container justifyContent='center'>
            <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                    <Grid 
                        container 
                        direction="column"
                        spacing={4}
                    >
                        <Grid item xs={12}>
                            <TextField 
                                id="tripName"
                                label="Trip Name"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained">
                                Start Trip
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(CreateNewTrip)