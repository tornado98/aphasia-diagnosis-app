import React from 'react';
import './main-layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import TopNav from '../components/Topnav/TopNav'; 

export const RequestLayout = () => {
  return (
    <>
      <Sidebar/>
      <div className="main">
        <div className="main__content">
          <TopNav/>
          <Outlet/>
        </div>
      </div>
        
    </>
  )
}


export default RequestLayout