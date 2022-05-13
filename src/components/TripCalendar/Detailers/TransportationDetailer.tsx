import React, { useState } from 'react'
import { CoreEvent } from '../../../data/event'
import { Button, TextField, Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import DetailerContainer from './DetailerContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { DateTimePicker } from '@material-ui/pickers'

interface Props {
    event: CoreEvent
}

const useStyles = makeStyles<Theme, Props>(theme => 
    createStyles({
        container: {
            
        },
        icon: {
            marginRight: '0.5em'
        },
        sectionHeader: {

        },
        sectionContent: {
            marginTop: '1em',
            padding: '0.25em',
            paddingLeft: '1em',
            '& h4': {
                marginBottom: 0
            }
        },
        sectionFooter: {
            textAlign: 'right',
            marginTop: '1em'
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
    const classes = useStyles({ event })

    const [departureDate, setDepartureDate] = useState<Date|null>(null)
    const [arrivalDate, setArrivalDate] = useState<Date|null>(null)

    return (
        <div>
            <div className={classes.sectionHeader}>
                <FontAwesomeIcon className={classes.icon} icon={faPlus} />
                Add Travel Details...
            </div>
            <div className={classes.sectionContent}>
                <div>
                    <h4>Departure</h4>
                    <DateTimePicker
                        id="departureDate"
                        label="Time"
                        value={departureDate}
                        onChange={e => setDepartureDate(e)}
                        fullWidth
                        required
                    />
                    <TextField
                        id="departureLocation"
                        label="Location"
                        fullWidth
                        required
                    />
                </div>
                <div>
                    <h4>Arrival</h4>
                    <DateTimePicker
                        id="arrivalDate"
                        label="Time"
                        value={arrivalDate}
                        onChange={e => setArrivalDate(e)}
                        fullWidth
                        required
                    />
                    <TextField
                        id="arrivalLocation"
                        label="Location"
                        fullWidth
                        required
                    />
                </div>
                <div className={classes.sectionFooter}>
                    <Button variant="outlined">
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )
}