import React from 'react'

import Paper from '@mui/material/Paper';
import { CardMedia, Container, Typography } from '@mui/material';

function FooterComponent() {
  return (
    <Paper sx={{marginTop:'100px', width:'100%',height:'370px',backgroundColor:'#F1F6F4'}} elevation={0} >
        <Container maxWidth='lg'>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <div style={{marginTop:'40px'}}>
          <CardMedia
          component="img"
          image='static/images/logo.png'
          alt="logo"
          sx={{
          mr: 2,
          width:'124.09px',
          height:'26px'
          }}
        />
        <Typography color='secondary' sx={{marginTop:'20px',fontWeight:'bold', fontSize:'24px', lineHeight:'32px'}}>Big ideas in small packages
        </Typography>
        <Typography color='secondary' sx={{fontWeight:'bold', fontSize:'24px', lineHeight:'32px'}}>Start learnign now
        </Typography>
        
          </div>
          <div style={{marginTop:'40px'}}>
              <Typography gutterBottom sx={{fontWeight:'bold'}}>Editorial</Typography>
              <Typography gutterBottom color='#6D787E'>Book lists</Typography>
              <Typography gutterBottom color='#6D787E'>What is Nonfiction?</Typography>
              <Typography gutterBottom color='#6D787E'>What to read next?</Typography>
              <Typography gutterBottom color='#6D787E'>Benefits of reading</Typography>
              
          </div>
          <div style={{marginTop:'40px'}}>
          <Typography gutterBottom sx={{fontWeight:'bold'}}>Useful links</Typography>
              <Typography gutterBottom color='#6D787E'>Pricing</Typography>
              <Typography gutterBottom color='#6D787E'>Blinkist business</Typography>
              <Typography gutterBottom color='#6D787E'>Gift cards</Typography>
              <Typography gutterBottom color='#6D787E'>Blinkist magaine</Typography>
              <Typography gutterBottom color='#6D787E'>Contact & help</Typography>
              
          </div>
          <div style={{marginTop:'40px'}}>

          <Typography gutterBottom sx={{fontWeight:'bold'}}>Company</Typography>
              <Typography gutterBottom color='#6D787E'>About</Typography>
              <Typography gutterBottom color='#6D787E'>Careers</Typography>
              <Typography gutterBottom color='#6D787E'>partners</Typography>
              <Typography gutterBottom color='#6D787E'>Code of Conduct</Typography>
              
          </div>
        </div>
        <div style={{marginTop:'40px', marginLeft:'65px'}}>
        <Typography color='#6D787E'>© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</Typography>
        </div>
        </Container>
    </Paper>
  )
}

export default FooterComponent
