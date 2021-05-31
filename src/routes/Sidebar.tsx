import React from 'react'
import { AiOutlineAppstore } from 'react-icons/ai'
import { BiWalletAlt } from 'react-icons/bi'
import { TiGroupOutline } from 'react-icons/ti'
import { DiGoogleAnalytics } from 'react-icons/di'
import { FiRepeat, FiPhone } from 'react-icons/fi'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import { IoLogOutOutline } from 'react-icons/io5'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import logo from '../assets/image/klasha.png'
import Sidecard from '../components/sidebar/Sidecard'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: '100%',
            backgroundColor: '#f9f9f9',
            padding: '2em 0 6.5em',
            backdropFilter: 'blur(20px)',
        },
        section: {
            padding: '0 0 0 1.5em',
            color: theme.palette.primary.main,
            margin: '2em 0 0.8em',
        },
        logo: {
            padding: '0 0 0 1.8em',
        },
        icon: {
            color: theme.palette.secondary.main,
        },
    })
)

const Sidebar = (): JSX.Element => {
    const classes = useStyles()
    const main = [
        { name: 'Dashboard', iconName: AiOutlineAppstore },
        { name: 'Balances', iconName: BiWalletAlt },
        { name: 'Customers', iconName: TiGroupOutline },
        { name: 'Analytics', iconName: DiGoogleAnalytics },
    ]
    const general = [
        { name: 'Settings', iconName: FiRepeat },
        { name: 'Team', iconName: StarBorderOutlinedIcon },
        { name: 'Customers', iconName: FiPhone },
        { name: 'Logout', iconName: IoLogOutOutline },
    ]
    return (
        <div className={classes.root}>
            <header className={classes.logo}>
                <img src={logo} alt="Company logo" />
            </header>
            <section>
                <h3 className={classes.section}>Main pages </h3>
                {main.map((card) => {
                    return (
                        <Sidecard
                            name={card.name}
                            iconName={<card.iconName />}
                        />
                    )
                })}
            </section>
            <section>
                <h3 className={classes.section}>General</h3>
                {general.map((card) => {
                    return (
                        <Sidecard
                            name={card.name}
                            iconName={<card.iconName />}
                        />
                    )
                })}
            </section>
        </div>
    )
}

export default Sidebar
