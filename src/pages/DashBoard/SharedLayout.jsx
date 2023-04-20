import React from 'react';
import { SidebarRight, SidebarLeft } from '../../components';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div className='w-full flex overflow-y-hidden'>
      <div className='w-240 flex-none border border-red-900'>
        <SidebarLeft />
      </div>
      <div className='flex-auto border border-red-900'>
        <Outlet />
      </div>
      <div className='w-329 flex-none border border-red-900'>
        <SidebarRight />
      </div>
    </div>
  );
};

export default SharedLayout;
