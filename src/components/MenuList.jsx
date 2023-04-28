import React from 'react';
import { submenuHeader, menuHeader } from '../ultils/submenuHeader';

export const MenuList = () => {
  return (
    <ul className='absolute w-56 right-0 p-[6px] rounded-lg mt-[10px] pt-2 flex flex-col gap-4 text-[#A2AAAD] text-sm bg-red-500'>
      {menuHeader.map(items => {
        const { id, text, iconRight, iconLeft } = items;
        return (
          <li key={id} className='flex gap-4 items-center pl-[18px]'>
            <div className='flex items-center mr-auto '>
              <span>{iconLeft}</span>
              <p>{text}</p>
            </div>
            <span className=''>{iconRight}</span>
          </li>
        );
      })}
    </ul>
  );
};

export const FooterList = () => {
  return <div>Footer List</div>;
};
