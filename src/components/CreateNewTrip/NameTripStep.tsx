import { Button, createStyles, Grid, TextField, Theme, withStyles, WithStyles } from '@material-ui/core'
import { DatePicker } from '@material-ui/pickers'
import React, { useState, useCallback, ChangeEvent } from 'react'
import { validateDateRange } from '../../utils/validateDateRange'

const styles = (theme: Theme) =>
    createStyles({

    })

interface Props extends WithStyles<typeof styles> {
    onSubmit: (name: string, start: Date, end: Date) => void
}

export function NameTripStep({ onSubmit }: Props) {
    const [tripName, setTripName] = useState('')
    const [startDate, setStartDate] = useState<Date|null>(null)
    const [endDate, setEndDate] = useState<Date|null>(null)
    const [fieldErrors, setFieldErros] = useState<{[id:string]: string}>({})

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setTripName(e.target.value)

    const formSubmit = useCallback(() => {
        const errors: {[id:string]: string} = {}
        if (tripName === '') {
            errors['tripName'] = 'Trip name is required'
        }

        if (startDate == null) {
            errors['startDate'] = 'A start date is required'
        }

        if (endDate == null) {
            errors['endDate'] = 'An end date is required'
        } else if (!validateDateRange(startDate, endDate)) {
            errors['endDate'] = 'The end date must be after the start date'
        }

        setFieldErros(errors)

        if (Object.keys(errors).length === 0) {
            onSubmit(tripName, startDate!, endDate!)
        }
    }, [tripName, startDate, endDate, onSubmit])

    return (
        <Grid
            container 
            direction="column"
            spacing={4}
        >
            <Grid item xs={12}>
                <TextField
                    id="tripName"
                    label="Trip Name"
                    value={tripName}
                    onChange={onChangeName}
                    fullWidth
                    required
                    error={fieldErrors['tripName'] != null}
                    helperText={fieldErrors['tripName']}
                />
            </Grid>
            <Grid item xs={12}>
                <DatePicker
                    id="startDate"
                    label="Start"
                    value={startDate}
                    onChange={e => setStartDate(e)}
                    fullWidth
                    required
                    error={fieldErrors['startDate'] != null}
                    helperText={fieldErrors['startDate'] || "When your trip starts. This can be changed later."}
                />
            </Grid>
            <Grid item xs={12}>
                <DatePicker
                    id="endDate"
                    label="End"
                    value={endDate}
                    onChange={e => setEndDate(e)}
                    fullWidth
                    required
                    error={fieldErrors['endDate'] != null}
                    helperText={fieldErrors['endDate'] || "When your trip ends. This can be changed later."}
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={formSubmit}>
                    Start Trip
                </Button>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(NameTripStep)