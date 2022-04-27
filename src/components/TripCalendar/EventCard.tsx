import React from 'react'
import { createStyles, Grid, Paper, Theme } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/styles'
import { CoreEvent } from '../../data/event'
import CardDateDisplay from './CardDateDisplay'
import CardHeader from './CardHeader'

const styles = (theme: Theme) => createStyles({
    grid: {
        padding: '1em'
    },
    paper: {
        border: '1px solid #666',
        height: '15em'
    },
    eventColors: theme.eventColors
})

interface Props extends WithStyles<typeof styles> {
    event: CoreEvent
}

function EventCard({ classes, event }: Props) {
    return (
        <Grid item xs={6} md={4} lg={2} className={classes.grid}>
            <Paper className={classes.paper}>
                <CardHeader event={event} />
                <CardDateDisplay event={event} />
            </Paper>
        </Grid>
    )
}

export default withStyles(styles)(EventCard)