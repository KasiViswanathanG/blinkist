// // import React from "react";
// // import Button from ".";

// // import { ThemeProvider } from '@mui/material/styles'
// // import CustomTheme from "../../../themes";

// // const ButtonComponent = {
// //   title: "Button",
// //   component: Button,
// //   argTypes: { onClick: { action: "clicked" } },
// // };

// // const Template = (args) => (
// //   <ThemeProvider theme={CustomTheme}>
// //     <Button {...args} />
// //   </ThemeProvider>
// // );

// // export const dynamicButton = Template.bind({});
// // dynamicButton.args = {
// //   variant:"contained",
// //   color:"primary",
// //   hoverColor : 'white',
// //   startIcon:null,
// //   endIcon:null,
// //   title:'Button',
// //   titleColor: 'black',
// //   buttonDeco: "none" ,
// //   width:130,
// //   borderColor:'black'
// // };

// // export default ButtonComponent;

// import React from 'react';
// import {Meta} from '@storybook/react';
// import ButtonComponent from '.';

// import { ThemeProvider } from '@mui/material/styles'
// import CustomTheme from "../../../themes";


// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import AddIcon from '@mui/icons-material/Add';

// const meta: Meta = {
//   title: 'Button',
//   component: ButtonComponent
// }

// export default meta;

// export const outlined = () =>
//   <ThemeProvider theme={CustomTheme}>
//     <ButtonComponent variant={'outlined'} color={undefined} hoverColor={''} startIcon={''} endIcon={''} title={'Read now'} titleColor={"primary"} buttonDeco={'none'} width={100} borderColor={'#3A4649'} onClick={() => { } } borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''} />
//   </ThemeProvider>

// export const outlinedWithIcon = () =>
// <ThemeProvider theme={CustomTheme}>
//   <ButtonComponent variant={'outlined'} color={undefined} hoverColor={''} startIcon={''} endIcon={<ArrowForwardIcon />} title={'Read now'} titleColor={"primary"} buttonDeco={'none'} width={150} borderColor={'#3A4649'} onClick={() => { } } borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''} />
// </ThemeProvider>

// export const contained = () =>
//   <ThemeProvider theme={CustomTheme}>
//     <ButtonComponent variant={'contained'} color={'primary'} hoverColor={'#20BA68'} startIcon={''} endIcon={''} title={'Finished Reading'} titleColor={undefined} buttonDeco={'none'} width={150} borderColor={''} onClick={() => { } } borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''} />
//   </ThemeProvider>

// export const containedWithIcon = () =>
// <ThemeProvider theme={CustomTheme}>
//   <ButtonComponent variant={'contained'} color={'primary'} hoverColor={'#20BA68'} startIcon={''} endIcon={<ArrowForwardIcon />} title={'Finished Reading'} titleColor={undefined} buttonDeco={'none'} width={200} borderColor={''} onClick={() => { } } borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''} />
// </ThemeProvider>

// export const containedWithIconSecondary = () =>
// <ThemeProvider theme={CustomTheme}>
//   <ButtonComponent variant={'contained'} color={'secondary'} hoverColor={''} startIcon={<AddIcon />} endIcon={''} title={'Add To Library'} titleColor={"inherit"} buttonDeco={'none'} width={284} borderColor={'#E5E4E2'} onClick={() => { } } borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''} />
// </ThemeProvider>

// export const text = () =>
//   <ThemeProvider theme={CustomTheme}>
//     <ButtonComponent variant={'text'} color={undefined} startIcon={''} endIcon={''} title={'My Library'} titleColor={'black'} buttonDeco={'none'} hoverColor={''} width={91} borderColor={''} onClick={() => { } } borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''}  />
//   </ThemeProvider>

// export const textOnHover = () =>
//   <ThemeProvider theme={CustomTheme}>
//     <ButtonComponent variant={'text'} color={undefined} startIcon={''} endIcon={''} title={'My Library'} titleColor={'black'} buttonDeco={'none'} hoverColor={''} width={91} borderColor={''} onClick={() => { } } borderBottom={'2px solid'} paddingBottom={'1px'} paddingTop={'3px'} backgroundColor={'white'}  />
//   </ThemeProvider>

// export const textWithIcon = () =>
//   <ThemeProvider theme={CustomTheme}>
//     <ButtonComponent variant={'text'} color={undefined} startIcon={''} endIcon={<KeyboardArrowDownIcon htmlColor='black' />} title={'Explore'} titleColor={'black'} buttonDeco={'none'} hoverColor={''} width={90} borderColor={''} onClick={() => { } } borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''}/>
//   </ThemeProvider>

// export const textWithIconSecondary = () =>
// <ThemeProvider theme={CustomTheme}>
//   <ButtonComponent variant={'text'} color={'secondary'} hoverColor={''} startIcon={<AddIcon />} endIcon={''} title={'Add To Library'} titleColor={"inherit"} buttonDeco={'none'} width={284} borderColor={'#E5E4E2'} onClick={() => { } } borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''} />
// </ThemeProvider>

// import React from 'react'

// function sto() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default sto

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';
import CustomTheme from "../../../themes";
import { ThemeProvider } from '@mui/material/styles'

import { addDecorator } from '@storybook/react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

addDecorator((story) => (
  <ThemeProvider theme={CustomTheme}>{story()}</ThemeProvider>
));

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  color: 'primary',
  sx: { '&:hover': { backgroundColor: '#20BA68' } },
  children: 'Finished Reading',
};

export const ContainedWithIcon = Template.bind({});
ContainedWithIcon.args = {
  variant: 'contained',
  color: 'primary',
  endIcon: <ArrowForwardIcon />,
  sx: { '&:hover': { backgroundColor: '#20BA68' } },
  children: 'Finished Reading',
};

export const ContainedWithIconSecondary = Template.bind({});
ContainedWithIconSecondary.args = {
  variant: 'contained',
  color: 'secondary',
  startIcon: <AddIcon />,
  sx: {width:284 },
  children: 'Add To Library',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'Read now',
};

export const OutlinedWithIcon = Template.bind({});
OutlinedWithIcon.args = {
  variant: 'outlined',
  endIcon: <ArrowForwardIcon />,
  children: 'Read now',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'contained',
  disabled: true,
  children: 'Button',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  children: <Typography color='black'>My Library</Typography>,
};

export const TextOnHover = Template.bind({});
TextOnHover.args = {
  variant: 'text',
  sx: {'&:hover': {
    borderBottom : '2px solid',
    backgroundColor: 'white'},
    borderRadius:'0px'},
  children: <Typography color='black'>My Library</Typography>,
};

export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
  variant: 'text',
  endIcon: <KeyboardArrowDownIcon htmlColor='black' />,
  sx: {'&:hover': {
    borderBottom : '2px solid',
    backgroundColor: 'white'},
    borderRadius:'0px'},
  children: <Typography color='black'>Explore</Typography>,
};

export const TextWithIconSecondary = Template.bind({});
TextWithIconSecondary.args = {
  variant: 'text',
  color: 'secondary',
  startIcon: <AddIcon />,
  sx: {width:'284'},
    children: 'Add To Library',
};