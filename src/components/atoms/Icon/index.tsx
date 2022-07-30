import {Typography } from '@mui/material'
import React from 'react'

type IconProps = {
  icon:React.ReactNode | null
  title:string
  titleColor: string
  onClick:(event: React.MouseEvent<HTMLDivElement>) => void
  }

const IconComponent = ({icon,title,titleColor,onClick}: IconProps) => {
  return (
    <div onClick={onClick} style={{display:"inline-flex"}}>
      {icon}
      <Typography variant="body2" color={titleColor} >
        {title}
      </Typography>
    </div>
  )
}

export default IconComponent
