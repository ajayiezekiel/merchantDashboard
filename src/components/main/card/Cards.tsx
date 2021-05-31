import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            marginTop: '2.2em',
            flexFlow: 'row wrap',
        },
    })
)

const Cards = (): JSX.Element => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <FirstCard />
            <SecondCard />
        </div>
    )
}

export default Cards
