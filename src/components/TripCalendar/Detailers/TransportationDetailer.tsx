import React from 'react'
import { CoreEvent } from '../../../data/event'
import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import DetailerContainer from './DetailerContainer'

interface Props {
    event: CoreEvent
}

const useStyles = makeStyles<Theme, Props>(theme => 
    createStyles({
        container: {
            
        }
    })
)

export default function TransportationDetailer(props: Props) {
    const classes = useStyles(props)
    const { event } = props
    
    return (
        <DetailerContainer>
            { !event.transporation && <AddTransportation event={event} /> }
        </DetailerContainer>
    )
}

function AddTransportation({ event }: Props) {
    return (
        <div>
            Add Travel Details...
        </div>
    )
}