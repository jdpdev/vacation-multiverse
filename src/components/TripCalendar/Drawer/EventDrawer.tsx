import React, { useEffect, useMemo, useState } from 'react'
import { Theme, Drawer } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { useAppSelector } from '../../../state/reduxHooks'
//import { useTheme } from '@material-ui/styles';

import { CoreEvent, EventTypes } from '../../../data/event'
import StartEndEventDrawer from './StartEndEventDrawer'

const useStyles = makeStyles<Theme, Props>(theme => 
    createStyles({
        drawer: {
            width: '300px',
            flexShrink: 0
        },
        drawerPaper: {
            width: '300px',
        }
    })    
)

interface Props { }

export default function EventDrawer() {
    const [isOpen, setIsOpen] = useState(false)
    const selectedEvent = useAppSelector(state => state.trip.selectedEvent)
    const classes = useStyles()

    useEffect(() => setIsOpen(selectedEvent != null), [selectedEvent])

    return (
        <Drawer 
            open={isOpen}
            variant='persistent'
            anchor='right'
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
        >
            { getDrawerContent(selectedEvent) }
        </Drawer>
    )
}

function getDrawerContent(event: CoreEvent | null) {
    if (event == null) {
        return <div />
    }

    switch (event.type) {
        default:
        case EventTypes.TripStart:
        case EventTypes.TripEnd:
            return <StartEndEventDrawer event={event} />
    }
}