import React from 'react'
import { Avatar, Badge } from '@material-ui/core'
import {
    makeStyles,
    createStyles,
    Theme,
    withStyles,
} from '@material-ui/core/styles'
import { VscBell } from 'react-icons/vsc'
import image from '../../../assets/image/avatar.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            [theme.breakpoints.down('xs')]: {
                marginTop: '1em',
            },
        },
        ash: {
            backgroundColor: '#f5f5f5',
            color: theme.palette.secondary.main,
            // marginRight: '0.5em',
        },
        orange: {
            backgroundColor: 'rgba(255, 131, 119, 0.1)',
            border: '1px solid #FF8377',
        },
        childFlex2: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
        },
        smallP: {
            fontWeight: 250,
            color: theme.palette.primary.light,
            margin: '3px 0',
        },
        bigP: {
            fontSize: '1.5em',
            margin: '0 0 3px',
            fontWeight: 600,
            color: theme.palette.secondary.main,
        },
        margin: {
            marginRight: '0.5em',
        },
    })
)

const StyledBadge = withStyles(() =>
    createStyles({
        badge: {
            backgroundColor: '#FF0000',
            color: '#FF0000',
            // boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: '$ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    })
)(Badge)

const Header = (): JSX.Element => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div>
                <p className={classes.bigP}>Balances</p>
                <p className={classes.smallP}>Today, 19th October 2020</p>
            </div>
            <div className={classes.childFlex2}>
                <StyledBadge
                    className={classes.margin}
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar className={classes.ash}>
                        <VscBell />
                    </Avatar>
                </StyledBadge>
                <Avatar alt="User" src={image} className={classes.orange} />
            </div>
        </div>
    )
}

export default Header
