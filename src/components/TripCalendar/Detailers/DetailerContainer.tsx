import React, { ReactNode } from 'react'
import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

interface Props { 
    children: ReactNode
}

const useStyles = makeStyles<Theme, Props>(theme => 
    createStyles({
        container: {
            border: `1px solid ${theme.palette.divider}`,
            padding: '0.25em'
        }
    })
)

export default function DetailerContainer(props: Props) {
    const classes = useStyles(props)

    return (
        <div className={classes.container}>
            { props.children }
        </div>
    )
}