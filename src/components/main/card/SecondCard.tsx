import React from 'react'
import { Card, CardHeader, Divider, CardContent } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card1: {
            borderRadius: 3,
            border: 0,
            height: '100%',
            width: 300,
            backgroundColor: '#f5f5f5',
            paddingLeft: '1em',
            paddingRight: '1em',
            marginLeft: '-7px',
            [theme.breakpoints.down('sm')]: {
                marginTop: '-2px',
                marginLeft: 0,
                minWidth: 273,
                paddingLeft: '0.7em',
                paddingRight: '0.7em',
            },
            [theme.breakpoints.down('xs')]: {
                width: 'inherit',
            },
        },
        smallP: {
            padding: '3.5px 0',
            fontSize: '1em',
            color: theme.palette.primary.main,
        },
        bigP: {
            fontSize: '2em',
            fontWeight: 600,
            color: theme.palette.secondary.main,
            marginTop: 0,
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        contentRoot: {
            '&:last-child': {
                paddingBottom: 12,
            },
        },
    })
)

const SecondCard = (): JSX.Element => {
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.card1}>
                <CardHeader
                    classes={{ title: classes.smallP }}
                    title="Funds on hold"
                />
                <Divider variant="middle" />
                <CardContent
                    classes={{ root: classes.contentRoot }}
                    className={classes.cardContent}
                >
                    <p className={classes.bigP}>$5,332.18</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default SecondCard
