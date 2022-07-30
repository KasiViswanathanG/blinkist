import React from 'react';
import {addDecorator, ComponentMeta, ComponentStory, Meta , Story} from '@storybook/react';
import IconComponent from '.';

import { ThemeProvider } from '@mui/material/styles'
import CustomTheme from "../../../themes";


import SearchIcon from '@mui/icons-material/Search';
import RocketIcon from '@mui/icons-material/Rocket';

export default {
  title: 'Atoms/Icon',
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

const Template: ComponentStory<typeof IconComponent> = (args) => <IconComponent {...args} />;

addDecorator((story) => (
  <ThemeProvider theme={CustomTheme}>{story()}</ThemeProvider>
));

export const Default = Template.bind({});
Default.args = {
  icon: <SearchIcon htmlColor='black' />,
};

export const IconWithTitle = Template.bind({});
IconWithTitle.args = {
  icon: <RocketIcon htmlColor='black' />,
  title:'Entrepreneurship',
};

export const iconWithTitleOnHover = Template.bind({});
iconWithTitleOnHover.args = {
  icon: <RocketIcon color='secondary' />,
  title:'Entrepreneurship',
  titleColor:'secondary',
};

