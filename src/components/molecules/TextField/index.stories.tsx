import React from 'react';
import {Meta} from '@storybook/react';
import TextFieldComponent from '.';

import { ThemeProvider } from '@mui/material/styles'
import CustomTheme from "../../../themes";
import SearchIcon from '@mui/icons-material/Search';

const meta: Meta = {
  title: 'Molecules/TextField',
  component: TextFieldComponent
}

export default meta;

export const textField = () =>
  <ThemeProvider theme={CustomTheme}>
      <TextFieldComponent id={'search'} placeholder={'Search'} icon={undefined} length={200} onChange={undefined} />
  </ThemeProvider>

export const textFieldWithIcon = () =>
<ThemeProvider theme={CustomTheme}>
    <TextFieldComponent id={'search'} placeholder={'Search'} icon={<SearchIcon />} length={500} onChange={undefined} />
</ThemeProvider>