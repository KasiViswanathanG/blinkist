import React from 'react';
import {Meta} from '@storybook/react';
import ImageComponent from '.';

import { ThemeProvider } from '@mui/material/styles'
import CustomTheme from "../../../themes";

const meta: Meta = {
  title: 'Atoms/Image',
  component: ImageComponent
}

export default meta;

export const image = () =>
  <ThemeProvider theme={CustomTheme}>
      <ImageComponent imgLocation={'static/images/2.png'} />
  </ThemeProvider>