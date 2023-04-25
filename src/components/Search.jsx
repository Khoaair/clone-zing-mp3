import React from 'react';
import icons from '../ultils/icons';
const { BsSearch } = icons;

const Search = () => {
  return (
    <div className='w-full relative flex items-center gap-2'>
      <input
        type='text'
        className='h-10 rounded-3xl w-full bg-[#dde4e4] text-gray-500 pl-10 placeholder:text-sm focus: outline-none'
        placeholder='Tìm kiếm bài nhạc, nghệ sĩ, lời bài hát,...'
      />
      <button
        type='button'
        onClick={console.log('search')}
        className=' text-[#A2AAAD] left-[10px] py-[10px] pt-[10px] pr-[8px] absolute'
      >
        <BsSearch size={20} />
      </button>
    </div>
  );
};

export default Search;
