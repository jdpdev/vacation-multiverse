import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { CoreEvent, EventTypes } from '../../data/event';

const useStyles = makeStyles<Theme, CardHeaderProps>(theme => 
    createStyles({
        container: {
            '& h3': {
                margin: '0.2em 1em'
            }
        },
        colorBar: ({ event }: CardHeaderProps) => ({
            width: '100%',
            height: '2em',
            background: getEventColor(event, theme)
        })
    })
)

interface CardHeaderProps {
    event: CoreEvent
}

function CardHeader({ event }: CardHeaderProps) {
    const classes = useStyles({ event })

    return (
        <div className={classes.container}>
            <div className={classes.colorBar} />
            <h3>{ event.name }</h3>
        </div>
    )
}

function getEventColor(event: CoreEvent, theme: Theme): string {
    switch (event.type) {
        default:
        case EventTypes.TripStart:
        case EventTypes.TripEnd:
            return theme.eventColors.duration
    }
}

export default CardHeader