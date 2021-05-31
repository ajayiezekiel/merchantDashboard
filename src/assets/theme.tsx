import { createMuiTheme } from '@material-ui/core'

const newTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#2a2a2a',
            light: '#a6abb2',
        },
        secondary: {
            main: '#200e32',
            light: '#2c665d',
        },
    },
})

export { newTheme }
