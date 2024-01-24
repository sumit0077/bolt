import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
      <div className="search">
        <input type="text" placeholder='Search..' />
        <SearchIcon/>
      </div>
      <div className="items">
        <div className="item">
          English
          <LanguageIcon className='icon'/>
        </div>
        <div className="item">
        <DarkModeIcon className='icon'/>
        </div>
        <div className="item">
        <FullscreenIcon className='icon'/>
        </div>
        <div className="item">
        <NotificationsNoneOutlinedIcon className='icon'/>
        <div className='counter'> 
          1
        </div>
        </div>
        <div className="item">
        <ChatOutlinedIcon className='icon'/>
        <div className='counter'> 
          2
        </div>
        </div>
        <div className="item">
        <ListOutlinedIcon className='icon'/>
        </div>
        <div className="item">
        <img src="" alt="" className='avatar'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar