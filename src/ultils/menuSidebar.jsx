import React from 'react';
import icons from './icons';

const {
  MdOutlineLibraryMusic,
  SiYoutubemusic,
  BiLineChart,
  RiRadioLine,
  RiUserFollowLine,
} = icons;

export const sidebarMenu = [
  {
    id: 1,
    path: 'personal',
    text: 'Cá Nhân',
    icon: <MdOutlineLibraryMusic />,
  },
  {
    id: 2,
    path: '/',
    text: 'Khám Phá',
    icon: <SiYoutubemusic />,
  },
  {
    id: 3,
    path: '',
    text: '#zingchart',
    icon: <BiLineChart />,
  },
  {
    id: 4,
    path: 'radio',
    text: 'Radio',
    icon: <RiRadioLine />,
  },
  {
    id: 5,
    path: 'follow',
    text: 'Theo dõi',
    icon: <RiUserFollowLine />,
  },
];
