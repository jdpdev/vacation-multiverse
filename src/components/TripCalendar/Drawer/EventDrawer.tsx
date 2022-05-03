import React from 'react'
import { Theme, Drawer } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
//import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles<Theme, Props>(theme => 
    createStyles({
        drawer: {
            width: '300px',
            flexShrink: 0
        },
        drawerPaper: {
            width: '300px',
        }
    })    
)

interface Props { }

export default function EventDrawer() {
    const classes = useStyles()

    return (
        <Drawer 
            open={true}
            variant='persistent'
            anchor='right'
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
        >
            Hello Drawer
        </Drawer>
    )
}