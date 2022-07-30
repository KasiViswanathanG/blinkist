import React from 'react';
import {Meta} from '@storybook/react';
import AvatarComponent from '.';

import { ThemeProvider } from '@mui/material/styles'
import CustomTheme from "../../../themes";


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const meta: Meta = {
  title: 'Molecules/Avatar',
  component: AvatarComponent
}

export default meta;

export const singleName = () =>
  <ThemeProvider theme={CustomTheme}>
      <AvatarComponent userName={'Viswanathan'} color={undefined} icon={undefined}/>
  </ThemeProvider>

export const twoNames = () =>
  <ThemeProvider theme={CustomTheme}>
      <AvatarComponent userName={'Kasi Viswanathan'} color={undefined} icon={undefined}/>
  </ThemeProvider>

export const twoNamesColored = () =>
  <ThemeProvider theme={CustomTheme}>
      <AvatarComponent userName={'Kasi Viswanathan'} color={'purple'} icon={undefined}/>
  </ThemeProvider>

export const withIcon = () =>
  <ThemeProvider theme={CustomTheme}>
      <AvatarComponent userName={'Kasi Viswanathan'} color={'purple'} icon={<KeyboardArrowDownIcon />}/>
  </ThemeProvider>