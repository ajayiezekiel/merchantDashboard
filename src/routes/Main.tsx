import React from 'react'
import {
    Button,
    IconButton,
    Drawer,
    Divider,
    useMediaQuery,
} from '@material-ui/core'
import {
    makeStyles,
    createStyles,
    Theme,
    useTheme,
} from '@material-ui/core/styles'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Header from '../components/main/header/Header'
import Cards from '../components/main/card/Cards'
import Tables from '../components/main/table/Tables'
import TableHeader from '../components/main/tableHeader/TableHeader'
import Sidebar from './Sidebar'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2em 2em 0',
            [theme.breakpoints.down('xs')]: {
                padding: 4,
            },
        },
        button: {
            width: '100%',
            height: 50,
        },
        label: {
            textTransform: 'capitalize',
            color: theme.palette.secondary.light,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            // padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        iconRoot: {
            paddingLeft: 0,
        },
    })
)

const Main = (): JSX.Element => {
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('xs'))
    const [open, setOpen] = React.useState(false)
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleDrawerOpen = () => {
        setOpen(true)
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleDrawerClose = () => {
        setOpen(false)
    }
    return (
        <div className={classes.root}>
            {matches ? (
                <div>
                    <IconButton
                        classes={{ root: classes.iconRoot }}
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <MenuIcon color="primary" style={{ fontSize: 30 }} />
                    </IconButton>
                </div>
            ) : (
                false
            )}
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <Sidebar />
            </Drawer>
            <Header />
            <Cards />
            <TableHeader />
            <Tables />
            <Button
                variant="outlined"
                className={classes.button}
                classes={{ label: classes.label }}
            >
                See more
            </Button>
        </div>
    )
}

export default Main
