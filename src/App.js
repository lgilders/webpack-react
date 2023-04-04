import React from 'react'
import PropTypes from 'prop-types'

import '@fontsource/lato'
import '@fontsource/roboto'
import '@fontsource/material-icons'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const baseTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#005CB6',
    },
    secondary: {
      main: '#E34025',
    },
    warning: {
      main: '#FFC709',
      contrastText: '#ffffff',
    },
    error: {
      main: '#FF671B',
      contrastText: '#ffffff',
    },
    divider: '#262626',
    info: {
      main: '#005CB6',
    },
  },
  typography: {
    fontFamily: 'Lato, Roboto, Arial',
    fontSize: '10'
  },
})

export default function App({ title }) {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline>
        <h1>{title}</h1>
      </CssBaseline>
    </ThemeProvider>
  )
}

App.propTypes = {
  title: PropTypes.string,
}
