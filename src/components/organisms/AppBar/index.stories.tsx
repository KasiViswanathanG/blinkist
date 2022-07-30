import React from 'react';
import {Meta} from '@storybook/react';
import AppBarComponent from '.';

import { ThemeProvider } from '@mui/material/styles'
import CustomTheme from "../../../themes";
import SearchIcon from '@mui/icons-material/Search';
import { BrowserRouter as Router} from 'react-router-dom';

const meta: Meta = {
  title: 'Organisms/AppBar',
  component: AppBarComponent
}

export default meta;

export const appBar = () =>
  <Router> 
  <ThemeProvider theme={CustomTheme}>
     <AppBarComponent />
  </ThemeProvider>
  </Router>