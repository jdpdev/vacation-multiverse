import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

//import './App.css';
import TripDashboard from './components/TripDashboard/TripDashboard';
import { Provider } from 'react-redux';
import { store } from './state/reduxStore';


const theme = createTheme()

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <TripDashboard />
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
