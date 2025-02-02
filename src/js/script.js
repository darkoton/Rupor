//< " CONNECTING JS COMPONENTS " >=============================================================================================================>//
import isWebp from './modules/webp.js'; //SUPPORT WEBP

import isDevice from './modules/device.js'; //DEFINE DEVICE

// import './modules/preloader.js'; // PRELOADER

import './modules/spoiler.js'; // SPOILERS

// import "./modules/dynamic_adap.js"  // DYNAMIC ADAPTIVE

// import "./modules/scroll_header.js"  // SCROLL HEADER

import './modules/swiper.js'; // SLIDER SWIPER

// import "./modules/animate_scroll.js"  // ANIMATE WITH SCROLL

import './modules/tabs.js'; // TABS

import './modules/chart.js'; // CHART

// import "./modules/parallax.js"  // PARALLAX EFFECT

//< " СКРИПТЫ " >=============================================================================================================>//

isWebp();
isDevice();

// Header burger

const burgerClose = document.querySelector('.header__close');
const burgerOpen = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__nav');

burgerOpen.addEventListener('click', () => {
  burgerMenu.classList.add('active');
  document.body.classList.add('_lock-scroll');
});

burgerClose.addEventListener('click', () => {
  burgerMenu.classList.remove('active');
  document.body.classList.remove('_lock-scroll');
});
