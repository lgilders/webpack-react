import React from 'react'
import PropTypes from 'prop-types'

import '@fontsource/roboto'
import '@fontsource/material-icons'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function App({ title = 'Webpack/Babel React with MUI, and Storybook' }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <h1>{title}</h1>
      </CssBaseline>
    </ThemeProvider>
  )
}

App.propTypes = {
  title: PropTypes.string,
}
