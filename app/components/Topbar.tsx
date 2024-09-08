"use client"

import Image from "next/image";
import { useState } from "react";
import "../component-styles/Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__name-and-logo">
        <Image 
          src="/homepage-image.svg"
          alt="topbar image"
          height="200"
          width="200"
          priority={true}
          className="topbar__name-and-logo__logo"
        />
        <h1 className="topbar__name-and-logo__name">The Frog Blog</h1>
      </div>
      <div className="topbar__menu">
        <div className="topbar__menu__list">
          <a href="/" className="topbar__menu__list__link">Home</a>
          <a href="/posts" className="topbar__menu__list__link">Posts</a>
          <a href="/about" className="topbar__menu__list__link">About</a>
        </div>
      </div>
      <TopbarMobileMenu />
    </div>
  );
}

const TopbarMobileMenu = () => {
  const [ toggleMenu, displayMenu ] = useState(false);

  const clickToggleMenu = () => {
    displayMenu(!toggleMenu);
  };

  return (
    <div className="topbar__mobile-menu">
      <button 
        className="topbar__mobile-menu__toggle-button"
        onClick={clickToggleMenu}
      >
        { toggleMenu ? <>&#9747;</> : <>&#8801;</>}
      </button>
      <div className={ toggleMenu ? "topbar__mobile-menu__list show" : "topbar__mobile-menu__list hide" }>
        <a href="/" className="topbar__mobile-menu__list__link">Home</a>
        <a href="/posts" className="topbar__mobile-menu__list__link">Posts</a>
        <a href="/about" className="topbar__mobile-menu__list__link">About</a>
      </div>
   </div>
  );
}

export default Topbar;
