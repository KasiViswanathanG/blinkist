import React from 'react';
import {Meta} from '@storybook/react';
import FooterComponent from '.';

import { ThemeProvider } from '@mui/material/styles'
import CustomTheme from "../../../themes";

const meta: Meta = {
  title: 'Molecules/Footer',
  component: FooterComponent
}

export default meta;

export const footer = () =>
  <ThemeProvider theme={CustomTheme}>
      <FooterComponent />
  </ThemeProvider>