import React from 'react';
import logo from '../assets/images/logo-light.svg';
import { Link, NavLink } from 'react-router-dom';
import { sidebarMenu } from '../ultils/menuSidebar';

const SidebarLeft = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center'>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-[120px] h-10' />
        </Link>
      </div>
      {sidebarMenu.map(item => {
        const { id, text, icon, path } = item;
        return (
          <div key={id} className='flex items-center'>
            <NavLink to={path} className='mr-3'>
              {icon}
            </NavLink>
            <h3>{text}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarLeft;
