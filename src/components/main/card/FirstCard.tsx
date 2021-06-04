import React from 'react'
import {
    Card,
    CardHeader,
    Divider,
    CardContent,
    Button,
    MenuItem,
} from '@material-ui/core'
import {
    makeStyles,
    createStyles,
    Theme,
    withStyles,
} from '@material-ui/core/styles'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            [theme.breakpoints.down('sm')]: {
                flex: 1,
            },
        },
        card1: {
            borderRadius: 3,
            border: 0,
            height: '100%',
            width: 300,
            paddingLeft: '1em',
            paddingRight: '1em',
            // boxShadow: 'none',
            [theme.breakpoints.down('sm')]: {
                minWidth: 273,
                paddingLeft: '0.7em',
                paddingRight: '0.7em',
            },
            [theme.breakpoints.down('xs')]: {
                width: 'inherit',
            },
        },
        button: {
            color: theme.palette.primary.main,
            backgroundColor: '#f5f5f5',
            boxShadow: 'none',
        },
        cardTitle: {
            fontSize: '1em',
            color: '#2C665D',
        },
        smallP: {
            fontWeight: 250,
            color: theme.palette.primary.light,
            margin: '3px 0',
        },
        bigP: {
            fontSize: '2em',
            margin: '0 0 3px',
            fontWeight: 600,
            color: theme.palette.secondary.main,
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // paddingTop: 10,
            // paddingBottom: 10,
        },
        contentRoot: {
            '&:last-child': {
                paddingBottom: 12,
            },
        },
    })
)

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
    />
))

const StyledMenuItem = withStyles((theme) => ({
    root: {
        width: 100,
        '&:focus': {
            backgroundColor: '#f5f5f5',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.primary.main,
            },
        },
    },
}))(MenuItem)

const FirstCard = (): JSX.Element => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleClose = () => setAnchorEl(null)
    return (
        <div className={classes.root}>
            <Card className={classes.card1}>
                <CardHeader
                    classes={{ title: classes.cardTitle }}
                    title="Total Account Balance"
                    action={
                        <div>
                            <Button
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                className={classes.button}
                                onClick={handleClick}
                                endIcon={<ExpandMoreIcon />}
                            >
                                USD
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <StyledMenuItem>KES</StyledMenuItem>
                                <StyledMenuItem>NGN</StyledMenuItem>
                                <StyledMenuItem>GHC</StyledMenuItem>
                            </StyledMenu>
                        </div>
                    }
                />
                <Divider variant="middle" />
                <CardContent
                    classes={{ root: classes.contentRoot }}
                    className={classes.cardContent}
                >
                    <p className={classes.bigP}>$5,332.18</p>
                    <p className={classes.smallP}>1USD = 381.97 NGN</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default FirstCard
