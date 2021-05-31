import React, { ReactElement } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'

type Props = {
    name: string
    iconName: ReactElement
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: 3,
            border: 0,
            height: 48,
            // padding: '0 1em 0 0',
            padding: '0 0 0 2em',
            margin: '2px 0',
            justifyContent: 'inherit',
            fontWeight: 300,
            color: theme.palette.primary.light,
            '&:hover': {
                backgroundColor: '#f5f5f5',
                color: theme.palette.primary.main,
                fontWeight: 600,
            },
        },
        newRoot: {
            borderRadius: 3,
            border: 0,
            height: 48,
            // padding: '0 1em 0 0',
            padding: '0 0 0 2em',
            justifyContent: 'inherit',
            fontWeight: 300,
            color: theme.palette.primary.light,
            backgroundColor: theme.palette.common.white,
            '&:hover': {
                backgroundColor: '#f5f5f5',
                color: theme.palette.primary.main,
                fontWeight: 600,
            },
        },
        label: {
            textTransform: 'capitalize',
        },
    })
)

const Sidecard = ({ name, iconName }: Props): JSX.Element => {
    const [flag, setFlag] = React.useState(false)
    const classes = useStyles()
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleChange = () => setFlag(!flag)

    return (
        <div>
            <Button
                startIcon={iconName}
                disableElevation
                fullWidth
                component={NavLink}
                to="/#"
                onClick={handleChange}
                classes={
                    flag
                        ? {
                              root: classes.newRoot,
                              label: classes.label,
                          }
                        : {
                              root: classes.root,
                              label: classes.label,
                          }
                }
            >
                {name}
            </Button>
        </div>
    )
}

export default Sidecard
