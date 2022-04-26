import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

//import './App.css';
import TripDashboard from './components/TripDashboard/TripDashboard';
import { Provider } from 'react-redux';
import { store } from './state/reduxStore';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { green, lightBlue, pink, purple } from '@material-ui/core/colors';

declare module '@material-ui/core/styles' {
  interface Theme {
    eventColors: {
      simple: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    eventColors?: {
      simple: string
      location: string
      travel: string
      lodging: string
    }
  }
}

const theme = createTheme({
  eventColors: {
    simple: pink[400],
    location: purple[600],
    travel: lightBlue[300],
    lodging: green[200]
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Provider store={store}>
          <TripDashboard />
        </Provider>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

export default App;
