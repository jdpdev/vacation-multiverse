import React from 'react'
import { createStyles, Grid, Paper, Theme } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/styles'
import { CoreEvent } from '../../data/event'

const styles = (theme: Theme) => createStyles({
    grid: {
        padding: '1em'
    },
    paper: {
        padding: '0.2em 1em 1em 1em',
        border: '1px solid #666',
        height: '15em'
    }
})

interface Props extends WithStyles<typeof styles> {
    event: CoreEvent
}

function EventCard({ classes, event }: Props) {
    return (
        <Grid item xs={6} md={4} lg={2} className={classes.grid}>
            <Paper className={classes.paper}>
                <h3>{ event.name }</h3>
            </Paper>
        </Grid>
    )
}

export default withStyles(styles)(EventCard)