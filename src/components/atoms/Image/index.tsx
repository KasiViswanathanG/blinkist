import React from 'react'

import CardMedia from '@mui/material/CardMedia';

type ImageProps = {
    imgLocation:string
}

const ImageComponent = ({imgLocation}: ImageProps) => {
  return (
    <div style={{display:"inline-flex"}}>
    <CardMedia
    component="img"
    height="140"
    image={imgLocation}
    alt="image"
    sx={{width: 294.1, height: 292}} />
    </div>
  )
}

export default ImageComponent;
