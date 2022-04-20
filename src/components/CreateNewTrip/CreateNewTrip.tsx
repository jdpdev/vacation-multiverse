import { createStyles, Grid, Paper, Theme } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/styles'
import React from 'react'
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

    const createTrip = (name: string, start: Date, end: Date) => {
        const id = `${name}${start.toUTCString()}${end.toUTCString}`

        dispatch(
            createNewTrip(
                createNewTripActionPayload(
                    name,
                    id,
                    start,
                    end
                )
            )
        )
    }

    return (
        <Grid container justifyContent='center'>
            <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                    <NameTripStep
                        onSubmit={createTrip}
                    />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(CreateNewTrip)