import React, { useCallback } from 'react'
import { Grid, Paper, Theme } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/styles'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { CoreEvent } from '../../data/event'
import CardDateDisplay from './CardDateDisplay'
import CardHeader from './CardHeader'
import { useAppDispatch } from '../../state/reduxHooks'
import { selectEvent } from '../../state/tripSlice'
import { selectEventAction } from '../../state/actions/selectEvent'

const useStyles = makeStyles<Theme, Props>(theme => 
    createStyles({
        grid: {
            padding: '1em'
        },
        paper: {
            border: '1px solid #666',
            height: '15em'
        },
        eventColors: theme.eventColors
    })
)

interface Props {
    event: CoreEvent
}

function EventCard({ event }: Props) {
    const dispatch = useAppDispatch()
    const classes = useStyles({ event })

    const onSelectEvent = useCallback(() => {
        dispatch(selectEvent(selectEventAction(event.id)))
    }, [event])

    return (
        <Paper 
            className={classes.paper}
            onClick={onSelectEvent}
        >
            <CardHeader event={event} />
            <CardDateDisplay event={event} />
        </Paper>
    )
}

export default EventCard