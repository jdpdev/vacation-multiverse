import React from 'react';
import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { CoreEvent, EventTypes } from '../../data/event';
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles<Theme, CardHeaderProps>(theme => 
    createStyles({
        container: {
            '& h3': {
                margin: '0.2em 1em'
            }
        },
        colorBar: {
            width: '100%',
            height: '2em'
        }
    })
)

interface CardHeaderProps {
    event: CoreEvent
}

function CardHeader({ event }: CardHeaderProps) {
    const classes = useStyles({ event })
    const theme = useTheme()

    return (
        <div className={classes.container}>
            <div 
                className={classes.colorBar} 
                style={{background: getEventColor(event, theme as Theme)}}
            />
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