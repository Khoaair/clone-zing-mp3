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
    iconLeft: <ImNotification />,
    iconRight: '',
    text: 'Giới thiệu',
  },
  {
    id: 2,
    iconLeft: <IoCallOutline />,
    iconRight: <BsArrowUpRight />,
    text: 'Liên hệ',
  },
  {
    id: 3,
    iconLeft: <RiAdvertisementLine />,
    iconRight: <BsArrowUpRight />,
    text: 'Quảng cáo',
  },
  {
    id: 4,
    iconLeft: <CgNotes />,
    iconRight: <BsArrowUpRight />,
    text: 'Thỏa thuận sử dụng',
  },
  {
    id: 5,
    iconLeft: <BsShieldCheck />,
    iconRight: <BsArrowUpRight />,
    text: 'Chính sách bảo mật',
  },
];

export const menuHeader = [
  {
    id: 1,
    text: 'Trình phát nhạc',
    iconLeft: <AiOutlinePlayCircle />,
    iconRight: <IoIosArrowForward />,
  },
  {
    id: 2,
    text: 'Giao diện',
    iconLeft: <GiPaintRoller />,
    iconRight: <IoIosArrowForward />,
  },
];
