import React from 'react';
import logo from '../assets/images/logo-light.svg';
import { Link, NavLink } from 'react-router-dom';
import { sidebarMenu } from '../ultils/menuSidebar';

const SidebarLeft = () => {
  const active = 'mr-3 flex items-center gap-4 text-activeColor';
  const disable = 'mr-3 flex items-center gap-4';
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
          <div key={id} className='h-10 py-2 px-[25px] font-bold'>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? active : disable)}
            >
              {icon}
              <h3 className='text-[13px]'>{text}</h3>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarLeft;
