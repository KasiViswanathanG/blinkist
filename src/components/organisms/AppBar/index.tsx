import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AvatarComponent from '../../molecules/Avatar';


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import Button from '../../atoms/Button';
import IconComponent from '../../atoms/Icon';
import { CardMedia, Chip, Icon } from '@mui/material';

import Modal from '@mui/material/Modal';
import { Grid} from '@mui/material';


import RocketIcon from '@mui/icons-material/Rocket';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import FiberSmartRecordOutlinedIcon from '@mui/icons-material/FiberSmartRecordOutlined';
import TempleBuddhistOutlinedIcon from '@mui/icons-material/TempleBuddhistOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

import {useNavigate, useParams} from 'react-router-dom'


const style = {
  position: 'absolute' as 'absolute',
  transform: 'translate(-50%, -50%)',
  top:'13%',
  left:'50%',
  width: '100%',
  bgcolor: '#F1F6F4',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AppBarComponent = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const[color , setColor] = React.useState <'inherit' | 'secondary'>('inherit')

  const mouseIn = (event: React.MouseEvent<HTMLDivElement>) =>{
    setColor('secondary')
  }
  const mouseOut = (event: React.MouseEvent<HTMLDivElement>) =>{
    setColor('inherit')
  }

  return (
    <AppBar style={{ background: 'transparent', boxShadow: 'none'}}  position="static">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description" 
      >
        <Box sx={style}>
        <AppBar style={{height:95, marginTop:200, background: 'white', boxShadow: 'none'}}  position="static">
    <Container maxWidth="lg">
      <Toolbar sx={{ marginLeft:2 ,display:"flex", justifyContent:"space-between"}}>
      <Box sx={{ marginTop:2,display:"flex", justifyContent:"space-between", flexGrow:0.1}}>
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
        <span style={{marginTop:7}}><IconComponent icon={<SearchIcon htmlColor='black' />} title={''} titleColor={''} onClick={() => {}} /></span>
        <Button
            sx={{
            borderBottom : '2px solid',
            paddingBottom : '1px',
            paddingTop : '3px',
            backgroundColor: 'white',
            width:90,
            borderRadius:'0px'}}
            variant='text'
            endIcon={<KeyboardArrowUpIcon htmlColor='black' />}
            onClick={() => handleClose()}>
            <Typography data-testid='ModalExplore' color='black'>Explore</Typography>
        </Button>
         <Button 
            sx={{'&:hover': {
            borderBottom : '2px solid',
            paddingBottom : '1px',
            paddingTop : '3px',
            backgroundColor: 'white'},
            width:91,
            borderRadius:'0px'}}
            variant='text'
            onClick= {() => { navigate('/mylibrary0') }}>
            <Typography data-testid='ModalMyLibrary' color='black'>My Library</Typography>
        </Button>
      </Box>
      <Box sx={{ marginTop:2 ,marginRight:3.93 ,flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton sx={{ p: 0 }}>
            <AvatarComponent userName={'Viswanathan'} color={'green'} icon={<KeyboardArrowDownIcon />} />
          </IconButton>
        </Tooltip>
      </Box>
      </Toolbar>
      </Container>
    </AppBar>
        <Box sx={{display:'flex', marginLeft:'363px', marginRight:'363px', justifyContent:'space-between', marginTop:'30px', borderBottom: 1, borderColor: 'divider' }}>
            <Typography color='secondary'>Explore by category</Typography>
            <Typography>See recently added titles</Typography>
            <Typography sx= {{marginRight:10}}>See popular titles</Typography>
        </Box>
        <br/>

        <div style={{display:'flex',justifyContent:'center', marginLeft:'381px',marginRight:'100px'}}>
        <Grid  container spacing={{ xs: 0, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
            <Grid item key='1' xs={2} sm={4} md={4}>
              <div onMouseOver={mouseIn} onMouseOut={mouseOut}>
            <IconComponent icon={<RocketIcon color={color} />} title={'Entrepreneurship'} titleColor={color} onClick={() => {navigate('/entrepreneurship')}} />
            </div>
            </Grid>

            <Grid item key='2' xs={2} sm={4} md={4}>
            <IconComponent icon={<AccountBalanceOutlinedIcon />} title={'Politics'} titleColor={''} onClick={() => {}} />
            </Grid>

            <Grid item key='3' xs={2} sm={4} md={4}>
            <IconComponent icon={<ShowChartOutlinedIcon />} title={'Marketing & Sales'} titleColor={''} onClick={() => {}} />
            </Grid>

            <Grid item key='4' xs={2} sm={4} md={4}>
            <IconComponent icon={<ScienceOutlinedIcon />} title={'Science'} titleColor={''} onClick={() => {}} />
            </Grid>

            <Grid item key='5' xs={2} sm={4} md={4}>
            <IconComponent icon={<LocalHospitalOutlinedIcon />} title={'Health & Nutrition'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='6' xs={2} sm={4} md={4}>
            <IconComponent icon={<DirectionsRunOutlinedIcon />} title={'Personal Development'} titleColor={''} onClick={() => {}} />
            </Grid>

            <Grid item key='7' xs={2} sm={4} md={4}>
            <IconComponent icon={<FiberSmartRecordOutlinedIcon />} title={'Economics'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='8' xs={2} sm={4} md={4}>
            <IconComponent icon={<TempleBuddhistOutlinedIcon />} title={'History'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='9' xs={2} sm={4} md={4}>
            <IconComponent icon={<ChatBubbleOutlineOutlinedIcon />} title={'Communication Skills'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='10' xs={2} sm={4} md={4}>
            <IconComponent icon={<WorkOutlineOutlinedIcon />} title={'Corporate Culture'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='11' xs={2} sm={4} md={4}>
            <IconComponent icon={<LightbulbOutlinedIcon />} title={'Motivation & Inspiration'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='12' xs={2} sm={4} md={4}>
            <IconComponent icon={<AccountBalanceWalletOutlinedIcon />} title={'Money & Investments'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='13' xs={2} sm={4} md={4}>
            <IconComponent icon={<PsychologyOutlinedIcon />} title={'Psychology'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='14' xs={2} sm={4} md={4}>
            <IconComponent icon={<HourglassBottomOutlinedIcon />} title={'Productivity'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='15' xs={2} sm={4} md={4}>
            <IconComponent icon={<FavoriteBorderOutlinedIcon />} title={'Sex & Relationship'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='16' xs={2} sm={4} md={4}>
            <IconComponent icon={<ForestOutlinedIcon />} title={'Nature & Environment'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='17' xs={2} sm={4} md={4}>
            <IconComponent icon={<ThumbUpAltOutlinedIcon />} title={'Career & Success'} titleColor={''} onClick={() => {}} />
            </Grid>
            
            <Grid item key='18' xs={2} sm={4} md={4}><IconComponent icon={<SchoolOutlinedIcon />} title={'Education'} titleColor={''} onClick={() => {}} />
            </Grid>
        </Grid>
        </div>
        </Box>
      </Modal>


    <Container maxWidth="xl">
      <Toolbar sx={{ display:"flex", justifyContent:"space-between"}}>    
      <Box sx={{ display:"flex", justifyContent:"space-between", flexGrow:0.1}}>
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
        <span style={{marginTop:7}}><IconComponent icon={<SearchIcon htmlColor='black' />} title={''} titleColor={''} onClick={() => {}} /></span>
        <Button
            sx={{'&:hover': {
            borderBottom : '2px solid',
            paddingBottom : '1px',
            paddingTop : '3px',
            backgroundColor: 'white'},
            width:90,
            borderRadius:'0px'}}
            variant='text'
            endIcon={<KeyboardArrowDownIcon htmlColor='black' />}
            onClick={() => handleOpen()}>
            <Typography color='black'>Explore</Typography>
        </Button>
        <Button 
            sx={{'&:hover': {
            borderBottom : '2px solid',
            paddingBottom : '1px',
            paddingTop : '3px',
            backgroundColor: 'white'},
            width:91,
            borderRadius:'0px'}}
            variant='text'
            onClick= {() => { navigate('/mylibrary0') }}>
            <Typography color='black'>My Library</Typography>
        </Button>
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton sx={{ p: 0 }}>
            <AvatarComponent userName={'Viswanathan'} color={'green'} icon={<KeyboardArrowDownIcon />} />
          </IconButton>
        </Tooltip>
      </Box>
      </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarComponent;
