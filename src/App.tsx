import React from 'react';
import './App.css';
import ButtonComponent from './components/atoms/Button';
import IconComponent from './components/atoms/Icon';
import ImageComponent from './components/atoms/Image';

import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

import { ThemeProvider } from '@mui/material/styles'
import CustomTheme from './themes';
import AvatarComponent from './components/molecules/Avatar';
import TextFieldComponent from './components/molecules/TextField';
import AppBarComponent from './components/organisms/AppBar';
import CardComponent from './components/organisms/Card';
import MyLibraryPage from './pages/MyLibrary';
import EntrepreneurshipPage from './pages/Entrepreneurship';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BookDetailViewPage from './pages/BookDetailView';

function App() {
  return (

    <ThemeProvider theme={CustomTheme}>
    <Router>
      <Routes>
        <Route path="/" element={<MyLibraryPage />} />
        <Route path="/mylibrary:val" element={<MyLibraryPage />} />
        <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
        <Route path="/bookdetailview:bookId" element={<BookDetailViewPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
