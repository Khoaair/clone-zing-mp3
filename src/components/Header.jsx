import React from 'react';
import icons from '../ultils/icons';
import Search from './Search';
import { Link } from 'react-router-dom';

const { BsArrowLeft, BsArrowRight } = icons;

const Header = () => {
  return (
    <div className='h-[70px] w-full px-[59px] flex items-center justify-between'>
      {/* right button */}
      <div className='flex items-center gap-8 w-full'>
        <div className='flex gap-4 text-[#A2AAAD]'>
          <Link to='/'>
            <BsArrowLeft size={24} />
          </Link>
          <Link to='/'>
            <BsArrowRight size={24} />
          </Link>
        </div>
        <div className='w-2/5'>
          <Search />
        </div>
      </div>
      {/* left button */}
      <div className='flex'>
        <div>vip</div>
        <div>cai dat</div>
        <div>dang nhap</div>
      </div>
    </div>
  );
};

export default Header;
