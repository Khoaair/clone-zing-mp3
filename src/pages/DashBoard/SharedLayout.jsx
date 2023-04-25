import React from 'react';
import { SidebarRight, SidebarLeft, Header } from '../../components';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div className='w-full flex overflow-y-hidden '>
      <div className='w-240 flex-none border border-red-900 bg-[#DDE4E4]'>
        <SidebarLeft />
      </div>
      <div className='flex-auto border border-red-900 bg-[#CED9D9]'>
        <Header />
        <Outlet />
      </div>
      <div className='w-329 flex-none border border-red-900 bg-[#CED9D9]'>
        <SidebarRight />
      </div>
    </div>
  );
};

export default SharedLayout;
