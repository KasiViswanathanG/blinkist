import { createTheme } from '@mui/material/styles'

const CustomTheme = createTheme({
  palette: {
    primary: {
      main: '#2CE080',
      light: '#2CE080',
      dark: '#2CE080',
    },
    secondary:{
      main: '#0365F2',
      light: '#0365F2',
      dark: '#0365F2',
    }
  },components: {
    MuiCard:{
      styleOverrides: {
        root:{
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          textTransform:'none'
        },
        contained: {
          textTransform:'none'
        },
        text: {
          borderRadius:'0px',
          textTransform:'none',
        }
      }
    }
  },
  typography: {
    fontFamily: 'Cera Pro',
    h1: {
      fontSize: '36px',
      fontWeight: 700,
      fontStyle: 'normal',
      lineHeight: '45.25px',
      letterSpacing: '0.9px'
    },
    body1:{
      fontSize: '16px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '24px'
    },
    body2:{
      fontSize: '14px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '24px'
    },
    caption:{
      fontSize: '14px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '22px'
    },
    subtitle2:{
      fontSize: '18px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '22.63px',
      color: '#6D787E'
    }
  }
})

export default CustomTheme;