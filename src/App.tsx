import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

//import './App.css';
import { AppStore } from './state/Store';
import CreateNewTrip from './components/CreateNewTrip/CreateNewTrip';


const theme = createTheme()

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppStore>
        <div className='new-trip-container'>
          <CreateNewTrip />
        </div>
      </AppStore>
    </MuiThemeProvider>
  );
}

export default App;
