import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

//import './App.css';
import TripDashboard from './components/TripDashboard/TripDashboard';
import { Provider } from 'react-redux';
import { store } from './state/reduxStore';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const theme = createTheme()

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
