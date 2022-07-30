import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

type TextFieldProps = {
    id:string
    placeholder:string
    icon:React.ReactNode | null
    length:number
    onChange:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
}

const TextFieldComponent = ({id, placeholder, icon, length,onChange} : TextFieldProps) => {
  return (
    <TextField
    sx={{width:length}}
    id={id}
    placeholder={placeholder}
    onChange={onChange}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          {icon}
        </InputAdornment>
      ),
    }}
    variant="standard"
  />
  )
}

export default TextFieldComponent
