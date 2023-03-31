import React from 'react'
import PropTypes from 'prop-types'

import '@fontsource/roboto'
import '@fontsource/material-icons'

import CssBaseline from '@mui/material/CssBaseline'
import './App.css'

const App = ({ title }) => {
  ;<>
    <CssBaseline>
      <div>{title}</div>
    </CssBaseline>
  </>
}

App.propTypes = {
  title: PropTypes.string,
}

export default App
