import React from 'react';
import {Meta} from '@storybook/react';
import CardComponent from '.';

import { ThemeProvider } from '@mui/material/styles'
import CustomTheme from "../../../themes";

const meta: Meta = {
  title: 'Organisms/Card',
  component: CardComponent
}

export default meta;

export const dots = () =>
  <ThemeProvider theme={CustomTheme}>
      <CardComponent imgLocation={'static/images/1.png'} title={'Bring Your Human to Work'} author={'Erica Keswin'} readTime={13} readers={'1.9k'} type={'dots'} onClick={() => {}} />
  </ThemeProvider>

export const addToLibarry = () =>
  <ThemeProvider theme={CustomTheme}>
      <CardComponent imgLocation={'static/images/1.png'} title={'Bring Your Human to Work'} author={'Erica Keswin'} readTime={13} readers={'1.9k'} type={'Add To Library'} onClick={() => {}} />
  </ThemeProvider>

export const finished = () =>
  <ThemeProvider theme={CustomTheme}>
      <CardComponent imgLocation={'static/images/1.png'} title={'Bring Your Human to Work'} author={'Erica Keswin'} readTime={13} readers={'1.9k'} type={'Finished'} onClick={() => {}} />
  </ThemeProvider>

export const readAgain = () =>
<ThemeProvider theme={CustomTheme}>
    <CardComponent imgLocation={'static/images/1.png'} title={'Bring Your Human to Work'} author={'Erica Keswin'} readTime={13} readers={'1.9k'} type={'Read again'} onClick={() => {}} />
</ThemeProvider>