import React from 'react';
import icons from './icons';
const {
  BsArrowUpRight,
  ImNotification,
  IoCallOutline,
  CgNotes,
  RiAdvertisementLine,
  BsShieldCheck,
  AiOutlinePlayCircle,
  IoIosArrowForward,
  GiPaintRoller,
} = icons;
export const submenuHeader = [
  {
    id: 1,
    iconLeft: <ImNotification size={20} />,
    iconRight: '',
    text: 'Giới thiệu',
  },
  {
    id: 2,
    iconLeft: <IoCallOutline size={20} />,
    iconRight: <BsArrowUpRight size={16} />,
    text: 'Liên hệ',
  },
  {
    id: 3,
    iconLeft: <RiAdvertisementLine size={20} />,
    iconRight: <BsArrowUpRight size={16} />,
    text: 'Quảng cáo',
  },
  {
    id: 4,
    iconLeft: <CgNotes size={20} />,
    iconRight: <BsArrowUpRight size={16} />,
    text: 'Thỏa thuận sử dụng',
  },
  {
    id: 5,
    iconLeft: <BsShieldCheck size={20} />,
    iconRight: <BsArrowUpRight size={16} />,
    text: 'Chính sách bảo mật',
  },
];

export const menuHeader = [
  {
    id: 1,
    text: 'Trình phát nhạc',
    iconLeft: <AiOutlinePlayCircle size={20} />,
    iconRight: <IoIosArrowForward size={16} />,
  },
  {
    id: 2,
    text: 'Giao diện',
    iconLeft: <GiPaintRoller size={20} />,
    iconRight: <IoIosArrowForward size={16} />,
  },
];
