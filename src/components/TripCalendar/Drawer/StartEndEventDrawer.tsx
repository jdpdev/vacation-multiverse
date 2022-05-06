import React from 'react'
import { CoreEvent } from '../../../data/event'
import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import CardHeader from '../CardHeader'
import CardDateDisplay from '../CardDateDisplay'
import TransportationDetailer from '../Detailers/TransportationDetailer'

const useStyles = makeStyles<Theme, Props>(theme => 
    createStyles({
        eventColors: theme.eventColors,
        detailers: {
            padding: '1em'
        }
    })
)

interface Props {
    event: CoreEvent
}

export default function StartEndEventDrawer(props: Props) {
    const classes = useStyles(props)
    const { event } = props

    return (
        <div>
            <CardHeader event={event} />
            <CardDateDisplay event={event} />
            
            <div className={classes.detailers}>
                <TransportationDetailer event={event} />
            </div>
        </div>
    )
}