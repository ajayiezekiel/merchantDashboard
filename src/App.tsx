import React from 'react'
import { ThemeProvider, useTheme } from '@material-ui/core/styles'
import { useMediaQuery, Grid } from '@material-ui/core'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Main from './routes/Main'
import Sidebar from './routes/Sidebar'
import { newTheme } from './assets/theme'

function App(): JSX.Element {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('xs'))
    return (
        <ThemeProvider theme={newTheme}>
            <Router>
                <Switch>
                    <Grid container>
                        <Grid item xs={false} sm={3} md={2}>
                            {matches ? false : <Sidebar />}
                        </Grid>
                        <Grid item xs={12} sm={9} md={10}>
                            <Main />
                        </Grid>
                    </Grid>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
