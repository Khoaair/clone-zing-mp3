import React from 'react';
import icons from '../ultils/icons';
import { Link } from 'react-router-dom';
import { submenuHeader, menuHeader } from '../ultils/submenuHeader';

const { VscDesktopDownload, IoDiamondOutline, IoSettingsOutline } = icons;
const RightHeader = () => {
  // console.log(navigator.userAgent);
  return (
    <div className='flex items-center gap-3'>
      <div>
        <Link
          to='/download'
          className='flex w-auto gap-1  bg-[#DDE4E4] py-3 rounded-full font-bold text-activeColor'
        >
          <span className='pl-6'>
            <VscDesktopDownload size={20} />
          </span>
          <h3 className='text-[14px] flex items-center pr-6'>
            Tải bản Windows
          </h3>
        </Link>
      </div>
      <div
        className='p-2 bg-[#DDE4E4] rounded-full text-[#A2AAAD] font-bold'
        title='nâng cấp vip'
      >
        <Link to='/' title='nâng cấp vip'>
          <IoDiamondOutline size={24} />
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <button
              type='button'
              className='p-2 bg-red-500 rounded-full text-[#A2AAAD]'
              onClick={() => {
                console.log('open submenu');
              }}
            >
              <IoSettingsOutline size={24} />
            </button>
          </li>
          {menuHeader.map(item => {
            const { id, text, iconLeft, iconRight } = item;
            return (
              <ul key={id}>
                <li>
                  <Link to='/'>
                    <span>{iconLeft}</span>
                    <p>{text}</p>
                    <span>{iconRight}</span>
                  </Link>
                </li>
              </ul>
            );
          })}
          <br />
          <li>
            {submenuHeader.map(item => {
              const { id, text, iconLeft, iconRight } = item;
              return (
                <ul key={id}>
                  <li>
                    <Link to='/'>
                      <span>{iconLeft}</span>
                      <p>{text}</p>
                      <span>{iconRight}</span>
                    </Link>
                  </li>
                </ul>
              );
            })}
          </li>
        </ul>
      </div>
      <div>dang nhap</div>
    </div>
  );
};

export default RightHeader;
