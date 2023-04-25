import React from 'react';
import icons from '../ultils/icons';
const { BsSearch } = icons;

const Search = () => {
  return (
    <div className='w-full flex items-center'>
      <button
        type='button'
        onClick={console.log('search')}
        className='bg-red-500 pl-[10px] pr-2 py-[10px]'
      >
        <BsSearch size={20} />
      </button>
      <input
        type='text'
        className='h-10 rounded-3xl w-full bg-[#dde4e4] text-gray-500'
        placeholder='Tìm kiếm bài nhạc, nghệ sĩ, lời bài hát,...'
      />
    </div>
  );
};

export default Search;
