// import { Button, Typography } from '@mui/material'
// import React from 'react'

// type ButtonProp = {
//   variant:"text" | "outlined" | "contained" | undefined
//   color:"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined
//   hoverColor : string
//   startIcon:React.ReactNode | null
//   endIcon:React.ReactNode | null
//   title:string
//   titleColor: string | undefined
//   buttonDeco: "none" | "underline"
//   width:number
//   borderColor:string
//   onClick:(event: React.MouseEvent<HTMLButtonElement>) => void
//   borderBottom:string
//   paddingBottom:string
//   paddingTop:string
//   backgroundColor:string
// }

// const ButtonComponent = ({variant,color,hoverColor,startIcon,endIcon,title,titleColor,buttonDeco,width,borderColor,onClick,borderBottom,paddingBottom,paddingTop,backgroundColor}: ButtonProp) => {
//   return (
//     <Button 
//     variant={variant}
//     color={color}
//     startIcon={startIcon}
//     endIcon={endIcon}
//     onClick={onClick}
//     sx={{'&:hover':{backgroundColor: hoverColor},textDecoration: buttonDeco, width:width, borderColor:borderColor,
//     borderBottom : {borderBottom},
//     paddingBottom : {paddingBottom},
//     paddingTop : {paddingTop},
//     backgroundColor: {backgroundColor}}}>
//       <Typography color={titleColor}>
//         {title}
//       </Typography>
//     </Button>
//   )
// }

// export default ButtonComponent


import { styled } from '@mui/material/styles';
import { Button as MUIButton, ButtonProps } from '@mui/material';

import CustomTheme from "../../../themes";

const StyledButton = styled(MUIButton)({
  ...CustomTheme.typography.body1,
  textTransform: 'none',
  borderRadius: '4px',
});

interface IButtonProps extends ButtonProps {}

const Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <StyledButton {...rest} data-testid={children}>
      {children}
    </StyledButton>
  );
};

export default Button;
