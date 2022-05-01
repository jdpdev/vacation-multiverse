import React from 'react'
import { createStyles, Grid, Paper, Theme } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/styles'
import { useAppSelector } from '../../state/reduxHooks'
import EventCard from './EventCard'

const styles = (theme: Theme) => createStyles({
    header: {
        padding: '0.25em 1em'
    }
})

interface Props extends WithStyles<typeof styles> {}

function TripCalendar({ classes }: Props) {
    const tripName = useAppSelector(state => state.trip.name)
    const events = useAppSelector(state => state.trip.events)

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container className={classes.header}>
                    <Grid item xs={12}>
                        <h2>{ tripName }</h2>
                    </Grid>
                </Grid>
                <Grid container>
                    { events.map(e => <EventCard key={e.id} event={e} />) }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(TripCalendar)