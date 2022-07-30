import { Avatar, Stack } from '@mui/material'
import React from 'react'

type AvatarProps = {
  userName: string
  color: string | undefined
  icon: React.ReactNode | null
}

const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

const stringAvatar = (name: string) => {
  var tag = '';
  if(name.indexOf(' ') >= 0){
    tag = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  }else{
    tag = `${name[0][0]}`
  }
  return {
    children: tag
  };
}

const AvatarComponent = ({userName, color, icon}: AvatarProps) => {
  if(color === ''){
    color = stringToColor(userName)
  }
  return (
    <div style={{display:"inline-flex"}}>
      <Avatar {...stringAvatar(userName)} sx={{ bgcolor: color}} />
      <span style={{marginTop:"9px"}}>{icon}</span>
    </div>
  )
}

export default AvatarComponent
