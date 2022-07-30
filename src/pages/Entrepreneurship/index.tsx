import { Box, Container, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardComponent from '../../components/organisms/Card';


import axios from 'axios';


import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import TextFieldComponent from '../../components/molecules/TextField';
import Template from '../../components/templates/BlinkistTemplate';
  
 const EntrepreneurshipPage = () => {

    const navigate = useNavigate();

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

    const selectUser = (id:number) => {
      console.log(id)
      let curr:any
      BookDetails.forEach((bookDetail) => {if(bookDetail.id === id) {curr = bookDetail}})      
      if(curr.type === 'Add To Library'){
        curr.type = 'Finished'
      }else if(curr.type === 'Finished'){
        curr.type = 'Read again'
      }else if(curr.type === 'Read again'){
        curr.type = 'Finished'
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
      navigate(`/bookdetailview${id}`)
    }

    const [searchCard, setSearchCard] = useState('')
  
    return (
      <Template content={
      <Container maxWidth="xl">
      <Card sx={{ marginLeft:'50px', marginTop:'50px' ,width:'912px', height:'264px', backgroundColor: '#F1F6F4'}}>
      <CardContent>
        <div style={{display:"flex", justifyContent: "space-around"}}>
          <div style={{maxWidth:'400px'}}>
        <Typography sx={{marginTop:'30px', font:'Cera Pro', color:"#03314B", fontSize: "36px", fontWeight:"700", lineHeight:"45.25px" }} gutterBottom>
          Explore Books on entrepreneurship
        </Typography>
        <Typography variant="subtitle2">
          Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.
        </Typography>
        </div>
        <CardMedia
          component="img"
          image={'static/images/reading.png'}
          alt="image"
          sx={{width: 249, height: 230}} />
        </div>
      </CardContent>
      </Card>
      <div style={{marginLeft:'50px',marginTop:'50px', marginBottom:'50px'}}>
      <TextFieldComponent id={'bookSearch'} placeholder={'Search by title or author'} icon={<SearchIcon htmlColor='black' />} length={500} onChange={(event) => {setSearchCard(event.target.value)}} />
      </div>
      <div>
        <Box sx={{ width: '100%', marginLeft:4, marginRight:4 }}>
        <Typography sx={{marginLeft:'20px',marginBottom:'20px', marginTop:'50px', font:'Cera Pro', fontWeight:'700', fontSize:'24px', lineHeight:'30.17px'}}>Trending blinks</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {BookDetails.filter((bookDetail)=>{
            if(searchCard === ''){
              return bookDetail
            }else if((bookDetail.author.toLowerCase().includes(searchCard.toLowerCase())) ||(bookDetail.title.toLowerCase().includes(searchCard.toLowerCase())) ){
              return bookDetail
            }
          }).map(bookDetail => {if(bookDetail.type === 'Add To Library' && bookDetail.category === 'Trending blinks'){return (
            <Grid item key={bookDetail.id} xs={2} sm={4} md={4}>
              <CardComponent imgLocation={bookDetail.imgLocation} title={bookDetail.title} author={bookDetail.author} readTime={bookDetail.readTime} readers={bookDetail.readers} type={bookDetail.type} onClick={ () => selectUser(bookDetail.id)} />
            </Grid>
          )}})}
        </Grid>
      </Box>
      <Box sx={{ width: '100%', marginLeft:4, marginRight:4 }}>
        <Typography sx={{marginLeft:'20px',marginBottom:'20px', marginTop:'50px', font:'Cera Pro', fontWeight:'700', fontSize:'24px', lineHeight:'30.17px'}}>Just added</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {BookDetails.filter((bookDetail)=>{
            if(searchCard === ''){
              return bookDetail
            }else if((bookDetail.author.toLowerCase().includes(searchCard.toLowerCase())) ||(bookDetail.title.toLowerCase().includes(searchCard.toLowerCase())) ){
              return bookDetail
            }
          }).map(bookDetail => {if(bookDetail.type === 'Add To Library' && bookDetail.category === 'Just added'){return (
            <Grid item key={bookDetail.id} xs={2} sm={4} md={4}>
              <CardComponent imgLocation={bookDetail.imgLocation} title={bookDetail.title} author={bookDetail.author} readTime={bookDetail.readTime} readers={bookDetail.readers} type={bookDetail.type} onClick={ () => selectUser(bookDetail.id)} />
            </Grid>
          )}})}
        </Grid>
      </Box>
      <Box sx={{ width: '100%', marginLeft:4, marginRight:4 }}>
        <Typography sx={{marginLeft:'20px',marginBottom:'20px', marginTop:'50px', font:'Cera Pro', fontWeight:'700', fontSize:'24px', lineHeight:'30.17px'}}>Featured audio blinks</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {BookDetails.filter((bookDetail)=>{
            if(searchCard === ''){
              return bookDetail
            }else if((bookDetail.author.toLowerCase().includes(searchCard.toLowerCase())) ||(bookDetail.title.toLowerCase().includes(searchCard.toLowerCase())) ){
              return bookDetail
            }
          }).map(bookDetail => {if(bookDetail.type === 'Add To Library' && bookDetail.category === 'Featured audio blinks'){return (
            <Grid item key={bookDetail.id} xs={2} sm={4} md={4}>
              <CardComponent imgLocation={bookDetail.imgLocation} title={bookDetail.title} author={bookDetail.author} readTime={bookDetail.readTime} readers={bookDetail.readers} type={bookDetail.type} onClick={ () => selectUser(bookDetail.id)} />
            </Grid>
          )}})}
        </Grid>
      </Box>
      </div>
      </Container>} />
    );
  }
  

export default EntrepreneurshipPage;