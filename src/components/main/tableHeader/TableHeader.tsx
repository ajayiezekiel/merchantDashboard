import React from 'react'
import { TextField, InputAdornment, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            marginTop: '2.2em',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
            },
        },
        button: {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.common.white,
            width: '20vh',
            height: 40,
            '&:hover': {
                color: theme.palette.secondary.light,
                backgroundColor: '#f5f5f5',
            },
            [theme.breakpoints.down('xs')]: {
                width: '100%',
                marginBottom: 10,
            },
        },
        label: {
            textTransform: 'capitalize',
        },
        textfield: {
            marginRight: 8,
            [theme.breakpoints.down('sm')]: {
                marginBottom: 10,
            },
            [theme.breakpoints.down('xs')]: {
                marginRight: 0,
            },
        },
        header: {
            display: 'flex',
            justifyContent: 'flex-end',
            flex: 1,
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'inherit',
            },
            [theme.breakpoints.down('xs')]: {
                justifyContent: 'center',
                flexDirection: 'column',
            },
        },
        form: {
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
            },
            [theme.breakpoints.down('xs')]: {
                display: 'flex',
                flexDirection: 'column',
            },
        },
        bigP: {
            fontSize: '1.2em',
            margin: '0 0 3px',
            fontWeight: 600,
            color: theme.palette.secondary.main,
        },
    })
)

const TableHeader = (): JSX.Element => {
    const classes = useStyles()
    const [month] = React.useState(null)
    return (
        <div className={classes.root}>
            <h3>Payout table</h3>
            <div className={classes.header}>
                <form className={classes.form}>
                    <TextField
                        id="input-with-icon-textfield"
                        placeholder="Search something..."
                        variant="outlined"
                        size="small"
                        className={classes.textfield}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        id="date"
                        type="date"
                        size="small"
                        placeholder="March 2020"
                        className={classes.textfield}
                        variant="outlined"
                        value={month ? 'March 2020' : 'mm/dd/yyyy'}
                    />
                    <Button
                        size="small"
                        className={classes.button}
                        classes={{ label: classes.label }}
                    >
                        Payout
                    </Button>
                </form>
            </div>
        </div>
    )
}
export default TableHeader
