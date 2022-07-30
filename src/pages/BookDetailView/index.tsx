import React from 'react'
import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import axios from 'axios';
import IconComponent from '../../components/atoms/Icon';


import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageComponent from '../../components/atoms/Image';
import Button from '../../components/atoms/Button';


import {useNavigate, useParams} from 'react-router-dom'
import Template from '../../components/templates/BlinkistTemplate';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
  
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BookDetailViewPage = () => {

    const navigate = useNavigate();

    const { bookId } = useParams();

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const [BookDetails, setBookDetails] = useState<any>({})

    useEffect(() => {
      axios
      .get(`http://localhost:8000/bookdetails/${bookId}`)
      .then(res => {
        setBookDetails(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    })


    const changeBookType = (bookId:number) => {
        let curr = BookDetails     
        if(curr.type === 'Add To Library'){
          curr.type = 'Finished'
        }else if(curr.type === 'Finished'){
          curr.type = 'Read again'
        }else if(curr.type === 'Read again'){
          curr.type = 'Finished'
        }
        fetch(`http://localhost:8000/bookdetails/${bookId}`,{
          method: 'PUT',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(curr)
        }).then((result) => {
          result.json().then((resp) => {
            console.warn(resp)
          })
        })
        
      navigate(`/mylibrary1`)
      }

  return (
    <Template content={
    <Container sx={{marginTop:'30px'}} maxWidth="xl">
      <div style={{marginLeft:25, display:"flex", justifyContent:"space-between"}}>
        <div>
      <Typography sx={{marginTop:'30px'}} variant='body1'>Get the key ideas from</Typography>
      <Typography sx={{marginTop:'30px', font:'Cera Pro', fontWeight:'700', fontSize:'36px', lineHeight:'45.25px'}}>
        {BookDetails.title}
      </Typography>
      <Typography variant='body1' sx={{color:'#6D787E', font:'Cera Pro', marginTop:'15px',marginBottom:'15px'}}>
        By {BookDetails.author}
      </Typography>
      <IconComponent icon={<AccessTimeIcon color='disabled' />} title={`${BookDetails.readTime}-minute read`} titleColor={'text.secondary'} onClick={() => {}} />
      <div style={{marginTop:'50px', display: "flex", justifyContent: "space-around"}}>
        
        {/* <ButtonComponent variant={'outlined'} color={undefined} hoverColor={''} startIcon={''} endIcon={''} title={'Read now'} titleColor={"primary"} buttonDeco={'none'} width={100} borderColor={'#3A4649'} onClick={() => { navigate(`/mylibrary0`); } } borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''} /> */}
        <Button
            sx={{width:100, borderColor:'#3A4649'}}
            variant='outlined'
            onClick={() => { navigate(`/mylibrary0`) }}>
            <Typography color='primary'>Read now</Typography>
        </Button>
        <div style={{marginLeft:'20px'}}> 
        {/* <ButtonComponent variant={'contained'} color={'primary'} hoverColor={'#20BA68'} startIcon={''} endIcon={''} title={'Finished Reading'} titleColor={undefined} buttonDeco={'none'} width={150} borderColor={''} onClick={() => changeBookType(BookDetails.id)} borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''} /> */}
        <Button
            sx={{width:150,
              borderColor:'#3A4649',
              '&:hover': {
              backgroundColor: '#20BA68'
            }}}
            variant='contained'
            color='primary'
            onClick={() => changeBookType(BookDetails.id)}>
            <Typography>Finished Reading</Typography>
        </Button>
        </div>
        <div style={{marginLeft:'20px'}}> 
        {/* <ButtonComponent variant={'text'} color={undefined} hoverColor={''} startIcon={''} endIcon={<ArrowForwardIcon color='disabled' />} title={'Send to Kindle'} titleColor={'text.secondary'} buttonDeco={'none'} width={136} borderColor={''} onClick={() => { } } borderBottom={''} paddingBottom={''} paddingTop={''} backgroundColor={''} /> */}
        <Button
            sx={{width:136,
            borderColor:'#3A4649',
            borderRadius:'0px',
            '&:hover': {
              borderBottom : '2px solid',
              paddingBottom : '2px',
              paddingTop : '6px',
              backgroundColor: 'white'
            }}}
            variant='text'
            endIcon={<ArrowForwardIcon color='disabled' />}
            onClick={() => changeBookType(BookDetails.id)}>
            <Typography color='text.secondary'>Send to Kindle</Typography>
        </Button>
        </div>
      </div>
        </div>
        <div style={{marginTop:80, marginRight:150}}>
      <ImageComponent imgLocation={BookDetails.imgLocation} />
      </div>
      </div>
    <Box sx={{ width: '55%',marginLeft:2.5, marginRight:4 }}>
    <Box sx={{marginTop:'60px', borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab sx={{textTransform:'none', font:'Cera Pro',fontWeight:'700',fontSize:'18px',lineHeight:'22.63px'}} label="Synopsis &emsp;&emsp;&emsp;&emsp;&emsp;" {...a11yProps(0)} />
        <Tab sx={{textTransform:'none', font:'Cera Pro',fontWeight:'700',fontSize:'18px',lineHeight:'22.63px'}} label="Who is it for? &emsp;&emsp;&emsp;" {...a11yProps(1)} />
        <Tab sx={{textTransform:'none', font:'Cera Pro',fontWeight:'700',fontSize:'18px',lineHeight:'22.63px'}} label="About the author &emsp;&emsp;" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <Typography>
        {BookDetails.title} updates {BookDetails.author} essential 1992 business handbook, {BookDetails.title} for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
      </Typography>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Typography>
      You
      </Typography>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <Typography>
        {BookDetails.author}
      </Typography>
    </TabPanel>
  </Box>
  </Container>} />
  )
}

export default BookDetailViewPage