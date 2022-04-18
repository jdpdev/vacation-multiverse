import { createStyles, Grid, Paper, Theme } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/styles'
import React, { useCallback, useState } from 'react'
import { createNewTripActionPayload } from '../../state/actions/createNewTrip'
import { useAppDispatch } from '../../state/reduxHooks'
import { createNewTrip } from '../../state/tripSlice'
import NameTripStep from './NameTripStep'

//import './CreateNewTrip.css'

const styles = (theme: Theme) =>
  createStyles({
    paper: {
        marginTop: '4em',
        padding: '1em'
    }
  })

interface Props extends WithStyles<typeof styles> {}

export function CreateNewTrip({classes}: Props) {
    const dispatch = useAppDispatch()

    const [tripName, setTripName] = useState('')
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    const createTrip = () => {
        const id = `${tripName}${startDate!.toUTCString()}${endDate!.toUTCString}`

        dispatch(
            createNewTrip(
                createNewTripActionPayload(
                    tripName,
                    id,
                    startDate!,
                    endDate!
                )
            )
        )
    }

    const onSetTripName = useCallback(setTripName, [setTripName])
    const onSetTripDates = () => {}

    return (
        <Grid container justifyContent='center'>
            <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                    <NameTripStep
                        onSetTripName={onSetTripName}
                        onSetTripDates={onSetTripDates}
                    />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(CreateNewTrip)