import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AndroidIcon from '@mui/icons-material/Android';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className='top'><span className="logo">Admin</span></div>
    <hr />
    <div className='center'>
        <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className='title'>LISTS</p>
            <li>
                <PersonOutlineTwoToneIcon className='icon'/>
                <span>Users</span>
            </li>
            <li>
            <AccountBalanceTwoToneIcon className='icon'/>
                <span>Banks</span>
            </li>
            <li>
            <ProductionQuantityLimitsIcon className='icon'/>
                <span>Orders</span>
            </li>
            <p className='title'>USEFUL</p>
            <li>
            <QueryStatsIcon className='icon'/>
                <span>Stats</span>
            </li>
            <li>
            <NotificationsActiveIcon className='icon'/>
                <span>Notifications</span>
            </li>
            <p className='title'>SERVICE</p>
            <li>
            <AndroidIcon className='icon'/>
                <span>Logs</span>
            </li>
            <p className='title'>USER</p>
            <li>
            <SettingsIcon className='icon'/>
                <span>Settings</span>
            </li>
            <li>
            <AccountBoxIcon className='icon'/>
                <span>Profile</span>
            </li>
            <li>
            <ExitToAppIcon className='icon'/>
                <span>Logout</span>
            </li>
        </ul>
    </div>
    <div className='bro'> 
        <div className="colourOptions"></div>
        <div className="colourOptions"></div>
    </div>
    </div>
  )
}

export default Sidebar