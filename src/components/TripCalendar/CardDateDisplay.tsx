import React from 'react';
import { createStyles, Theme } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/styles'
import { DateTypes } from '../../data/datetime';
import { format } from 'date-fns/esm';
import { deserializeDateString } from '../../utils/serializeDate';
import { CoreEvent } from '../../data/event';

const dateDisplayStyles = (theme: Theme) => createStyles({
    container: {
        padding: `1em`
    }
})

interface CardDateDisplayProps extends WithStyles<typeof dateDisplayStyles> {
    event: CoreEvent
}

function CardDateDisplay({ event, classes }: CardDateDisplayProps) {
    if (event.datetime.type === DateTypes.Single) {
        const date = deserializeDateString(event.datetime.datetime);
        return (
            <div className={classes.container}>
                {event.datetime.timeless
                    ? format(date, 'MMM d, Y')
                    : format(date, 'MMM d, Y H:mm')}
            </div>
        );
    } else {
        const start = deserializeDateString(event.datetime.start);
        const end = deserializeDateString(event.datetime.end);

        const startString = event.datetime.timeless
            ? format(start, 'MMM d, Y')
            : format(start, 'MMM d, Y H:mm');
        const endString = event.datetime.timeless
            ? format(end, 'MMM d, Y')
            : format(end, 'MMM d, Y H:mm');

        return (
            <div className={classes.container}>
                <div>{startString}</div>
                <div>{endString}</div>
            </div>
        );
    }
}

export default withStyles(dateDisplayStyles)(CardDateDisplay)