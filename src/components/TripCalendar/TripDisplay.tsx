import React from 'react'
import { createStyles, Grid, Theme } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/styles'
import { useAppSelector } from '../../state/reduxHooks'
import EventCard from './EventCard'
import EventDrawer from './Drawer/EventDrawer'

const styles = (theme: Theme) => createStyles({
    header: {
        padding: '0.25em 1em'
    },
    cardgrid: {
        padding: '1em'
    }
})

interface Props extends WithStyles<typeof styles> {}

function TripDisplay({ classes }: Props) {
    const tripName = useAppSelector(state => state.trip.name)
    const events = useAppSelector(state => state.trip.events)

    return (
        <Grid container>
            <EventDrawer />
            <Grid item xs={12}>
                <Grid container className={classes.header}>
                    <Grid item xs={12}>
                        <h2>{ tripName }</h2>
                    </Grid>
                </Grid>
                <Grid container>
                    { events.map(e => (
                        <Grid key={e.id} item xs={6} md={4} lg={2} className={classes.cardgrid}>
                            <EventCard event={e} />
                        </Grid>
                    )) }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(TripDisplay)