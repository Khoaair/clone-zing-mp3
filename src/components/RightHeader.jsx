import React from 'react';
import icons from '../ultils/icons';
import { Link } from 'react-router-dom';
const { VscDesktopDownload } = icons;
const RightHeader = () => {
  return (
    <div className='flex items-center gap-3'>
      <Link
        to='/download'
        className='flex w-auto gap-1  bg-[#DDE4E4] py-3 rounded-full font-bold text-activeColor'
      >
        <span className='pl-6'>
          <VscDesktopDownload size={20} />
        </span>
        <h3 className='text-[14px] flex items-center pr-6'>Tải bản Windows</h3>
      </Link>
      <div>vip</div>
      <div>cai dat</div>
      <div>dang nhap</div>
    </div>
  );
};

export default RightHeader;
