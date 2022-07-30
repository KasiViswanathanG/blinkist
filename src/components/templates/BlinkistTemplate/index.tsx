import { Container } from '@mui/material'
import React from 'react'
import AppBarComponent from '../../organisms/AppBar'
import FooterComponent from '../../molecules/Footer'

type TemplateProps = {
    content: React.ReactNode | React.ReactNode[];
}

function Template({content} : TemplateProps) {
  return (
    <React.Fragment>
    <Container sx={{marginTop:'10px'}}>
      <AppBarComponent />
      {content}
    </Container>
    <FooterComponent />
    </React.Fragment>
  )
}

export default Template
