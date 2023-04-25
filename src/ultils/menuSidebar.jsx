import React from 'react';
import icons from './icons';

const {
  MdOutlineLibraryMusic,
  SiYoutubemusic,
  BiLineChart,
  RiRadioLine,
  MdOutlineFeed,
} = icons;

export const sidebarMenu = [
  {
    id: 2,
    path: '/',
    text: 'Khám Phá',
    icon: <SiYoutubemusic size={20} />,
  },
  {
    id: 3,
    path: 'chart',
    text: '#zingchart',
    icon: <BiLineChart size={20} />,
  },
  {
    id: 4,
    path: 'radio',
    text: 'Radio',
    icon: <RiRadioLine size={20} />,
  },
  {
    id: 5,
    path: 'follow',
    text: 'Theo dõi',
    icon: <MdOutlineFeed size={20} />,
  },
];
