import { Box, Container, Tab, Tabs, Typography, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardComponent from '../../components/organisms/Card';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
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

  
 const MyLibraryPage = () => {


    let { val } = useParams();

    let tabVal = parseInt(val!)
    if (isNaN(tabVal)){
      tabVal = 0
    }
    const [value, setValue] = React.useState(tabVal);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const [BookDetails, setBookDetails] = useState<any[]>([])

    useEffect(() => {
      axios
      .get('http://localhost:8000/bookdetails')
      .then(res => {
        setBookDetails(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    })

    const navigate = useNavigate();

    const selectUser = (id:number) => {
      console.log(id)
      let curr:any
      BookDetails.forEach((bookDetail) => {if(bookDetail.id === id) {curr = bookDetail}})      
      if(curr.type === 'Add To Library'){
        curr.type = 'Finished'
      }else if(curr.type === 'Finished'){
        curr.type = 'Read again'
        setValue(1);
      }else if(curr.type === 'Read again'){
        curr.type = 'Finished'
        navigate(`/bookdetailview${id}`)
      }
      fetch(`http://localhost:8000/bookdetails/${id}`,{
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
    }
  
    return (
      <Template content={<Container maxWidth="xl">
        <Box sx={{ width: '100%', marginLeft:4, marginRight:4 }}>
        <Typography variant="h1" sx={{marginTop:'50px'}}>My Library</Typography>
        <Box sx={{marginTop:'30px', borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{textTransform:'none', font:'Cera Pro',fontWeight:'700',fontSize:'18px',lineHeight:'22.63px'}} label="Currently reading &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" {...a11yProps(0)} />
            <Tab sx={{textTransform:'none', font:'Cera Pro',fontWeight:'700',fontSize:'18px',lineHeight:'22.63px'}} label="Finished &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {BookDetails.map(bookDetail => {if(bookDetail.type === 'Finished'){return (
            <Grid item key={bookDetail.id} xs={2} sm={4} md={4}>
              <CardComponent imgLocation={bookDetail.imgLocation} title={bookDetail.title} author={bookDetail.author} readTime={bookDetail.readTime} readers={bookDetail.readers} type={bookDetail.type} onClick={ () => selectUser(bookDetail.id)} />
            </Grid>
          )}})}
      </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {BookDetails.map(bookDetail => {if(bookDetail.type === 'Read again'){return (
            <Grid item key={bookDetail.id} xs={2} sm={4} md={4}>
              <CardComponent imgLocation={bookDetail.imgLocation} title={bookDetail.title} author={bookDetail.author} readTime={bookDetail.readTime} readers={bookDetail.readers} type={bookDetail.type} onClick={ () => selectUser(bookDetail.id)} />
            </Grid>
          )}})}
      </Grid>
        </TabPanel>
      </Box>
      </Container>} />
    );
  }
  

export default MyLibraryPage;
