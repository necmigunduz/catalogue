import '../assets/styles/css-lib/borders.css';
import '../assets/styles/css-lib/colors.css';
import '../assets/styles/css-lib/positioning.css';
import '../assets/styles/css-lib/fonts.css';
import { FaHome } from 'react-icons/fa';

const NavBar = () => (
  <nav className="bord-1 bg-5d flx jsc-between pad-20">
    <a href="#Search" className="color-white no-decor whattoeat courgette-font fs-30 fw-900 bord-10 pad-20">WhatToEat</a>
    <span className="fs-40 courgette-cursive color-b1a pad-20">Cook with what you have in your fridge!</span>
    <a href="/" className="color-white no-decor home rad fs-30 pad-20 m-top-20">
      <FaHome />
    </a>
  </nav>
);

export default NavBar;
