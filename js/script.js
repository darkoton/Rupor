/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/chart.js":
/*!*********************************!*\
  !*** ./src/js/modules/chart.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst datas = [\r\n  {\r\n    name: 'Percentage',\r\n    colorByPoint: true,\r\n    data: [\r\n      {\r\n        id: 0,\r\n        name: 'Public',\r\n        y: 5,\r\n        borderColor: '#ECECED',\r\n        color: {\r\n          linearGradient: { x1: 0, x2: 2, y1: 1, y2: 0 },\r\n          stops: [\r\n            [0, 'rgba(255,255,255,0.4)'],\r\n            [1, 'rgba(255,255,255,0)'],\r\n          ],\r\n        },\r\n      },\r\n      {\r\n        id: 1,\r\n        name: 'Public',\r\n        y: 75,\r\n        borderColor: '#779176',\r\n        color: {\r\n          linearGradient: { x1: 0, x2: 2, y1: 1, y2: 0 },\r\n          stops: [\r\n            [0, 'rgba(109, 184, 102, 0.4)'],\r\n            [1, 'rgba(255,255,255,0)'],\r\n          ],\r\n        },\r\n      },\r\n      {\r\n        id: 2,\r\n        name: 'Public',\r\n        sliced: true,\r\n        y: 15,\r\n        borderColor: '#A49D69',\r\n        color: {\r\n          linearGradient: { x1: 0, x2: 2, y1: 1, y2: 0 },\r\n          stops: [\r\n            [0, 'rgba(255, 232, 103, 0.4)'],\r\n            [1, 'rgba(255,255,255,0)'],\r\n          ],\r\n        },\r\n      },\r\n      {\r\n        id: 3,\r\n        name: 'Public',\r\n        y: 25,\r\n        borderColor: '#A66455',\r\n        color: {\r\n          linearGradient: { x1: 0, x2: 2, y1: 1, y2: 0 },\r\n          stops: [\r\n            [0, 'rgba(253, 127, 102, 0.4)'],\r\n            [1, 'rgba(255,255,255,0)'],\r\n          ],\r\n        },\r\n      },\r\n    ],\r\n  },\r\n];\r\n\r\nconst indicatorTabToken = document.querySelector('.tokenomics__indicator');\r\nlet activeTabToken = document.querySelector('.tokenomics__tab._active');\r\n\r\nlet chart;\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n  chart = Highcharts.chart('tokenomics__charts', {\r\n    chart: {\r\n      width: 1320,\r\n      height: 500,\r\n      type: 'pie',\r\n      backgroundColor: 'transparent',\r\n    },\r\n    title: null,\r\n    tooltip: {\r\n      valueSuffix: '%',\r\n    },\r\n    plotOptions: {\r\n      series: {\r\n        allowPointSelect: false,\r\n        cursor: 'pointer',\r\n        dataLabels: [\r\n          {\r\n            enabled: true,\r\n            format: `\r\n            <div style=\"\r\n                display: flex;\r\n                flex-direction: column;\r\n                font-family: Space Grotesk;\r\n\r\n            \">\r\n            <span style=\"\r\n            font-family: Space Grotesk;\r\n            font-size: 45px;\r\n            line-height: 57px;\r\n            font-weight: 500;\r\n            color: #F9A962\">\r\n               &nbsp {point.y}%\r\n            </span>\r\n            <br>\r\n            <br>\r\n            <span style=\"\r\n            font-family: Space Grotesk;\r\n            font-size: 27px;\r\n            line-height: 26px;\r\n            font-weight: 100;\r\n            text-transform: uppercase;\r\n            color: #fff\">\r\n             {point.name}\r\n            </span>\r\n            </div>`,\r\n            // connectorColor: 'rgba(128,128,128,0.5)',\r\n            distance: 80,\r\n            style: {\r\n              textOutline: 'none',\r\n              opacity: 1,\r\n              textAlign: 'center',\r\n              //   color: '#F4D35E',\r\n            },\r\n          },\r\n          {\r\n            enabled: false,\r\n            distance: -40,\r\n            format: '{point.percentage:.1f}%',\r\n            style: {\r\n              fontSize: '1.2em',\r\n              textOutline: 'none',\r\n              opacity: 0.7,\r\n            },\r\n            filter: {\r\n              operator: '>',\r\n              property: 'percentage',\r\n              value: 10,\r\n            },\r\n          },\r\n        ],\r\n      },\r\n    },\r\n    series: datas,\r\n  });\r\n});\r\n\r\nsetTimeout(() => {\r\n  indicatorTabToken.style.width = activeTabToken.clientWidth + 18 + 'px';\r\n  indicatorTabToken.style.left = activeTabToken.offsetLeft - 9 + 'px';\r\n}, 100);\r\n\r\nlet tabsToken = () => {\r\n  let nav = document.querySelectorAll('.tokenomics__tab'),\r\n    result = document.querySelectorAll('.tokenomics__block'),\r\n    tabName;\r\n\r\n  nav.forEach(item => {\r\n    item.addEventListener('click', selectnav);\r\n  });\r\n\r\n  function selectnav() {\r\n    nav.forEach(item => {\r\n      item.classList.remove('_active');\r\n    });\r\n    this.classList.add('_active');\r\n\r\n    indicatorTabToken.style.width = this.clientWidth + 18 + 'px';\r\n    indicatorTabToken.style.left = this.offsetLeft - 9 + 'px';\r\n\r\n    tabName = this.getAttribute('data-tab-name');\r\n    const chartEl = this.getAttribute('data-chart-el');\r\n\r\n    datas[0].data = datas[0].data.map(el => {\r\n      el.sliced = false;\r\n      return el;\r\n    });\r\n\r\n    datas[0].data[chartEl].sliced = true;\r\n\r\n    chart.update({\r\n      series: datas,\r\n    });\r\n\r\n    console.log(chart);\r\n\r\n    selectresult(tabName);\r\n  }\r\n\r\n  function selectresult(tabName) {\r\n    result.forEach(item => {\r\n      item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active');\r\n    });\r\n  }\r\n};\r\n\r\ntabsToken();\r\n\n\n//# sourceURL=webpack://rupor/./src/js/modules/chart.js?");

/***/ }),

/***/ "./src/js/modules/device.js":
/*!**********************************!*\
  !*** ./src/js/modules/device.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  let isMobile = {\r\n    Android: function () { return navigator.userAgent.match(/Android/i); },\r\n    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },\r\n    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },\r\n    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },\r\n    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },\r\n    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }\r\n  };\r\n\r\n  if (isMobile.any()) {\r\n    document.body.classList.add(\"_touch\");\r\n  } else {\r\n    document.body.classList.add(\"_pc\");\r\n  }\r\n} \n\n//# sourceURL=webpack://rupor/./src/js/modules/device.js?");

/***/ }),

/***/ "./src/js/modules/spoiler.js":
/*!***********************************!*\
  !*** ./src/js/modules/spoiler.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst spollersArray = document.querySelectorAll('[data-spollers]');\r\n\r\nif (spollersArray.length > 0) {\r\n  // Получение обычных спойлеров\r\n  const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {\r\n    return !item.dataset.spollers.split(\",\")[0];\r\n  });\r\n  // Инициализация обычных спойлеров\r\n  if (spollersRegular.length > 0) {\r\n    initSpollers(spollersRegular);\r\n  }\r\n\r\n  // Получение спойлеров с медиа запросами\r\n  const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {\r\n    return item.dataset.spollers.split(\",\")[0];\r\n  });\r\n\r\n  // Инициализация спойлеров с медиа запросами\r\n  if (spollersMedia.length > 0) {\r\n    const breakpointsArray = [];\r\n    spollersMedia.forEach(item => {\r\n      const params = item.dataset.spollers;\r\n      const breakpoint = {};\r\n      const paramsArray = params.split(\",\");\r\n      breakpoint.value = paramsArray[0];\r\n      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : \"max\";\r\n      breakpoint.item = item;\r\n      breakpointsArray.push(breakpoint);\r\n    });\r\n\r\n    // Получаем уникальные брейкпоинты\r\n    let mediaQueries = breakpointsArray.map(function (item) {\r\n      return '(' + item.type + \"-width: \" + item.value + \"px),\" + item.value + ',' + item.type;\r\n    });\r\n    mediaQueries = mediaQueries.filter(function (item, index, self) {\r\n      return self.indexOf(item) === index;\r\n    });\r\n\r\n    // Работаем с каждым брейкпоинтом\r\n    mediaQueries.forEach(breakpoint => {\r\n      const paramsArray = breakpoint.split(\",\");\r\n      const mediaBreakpoint = paramsArray[1];\r\n      const mediaType = paramsArray[2];\r\n      const matchMedia = window.matchMedia(paramsArray[0]);\r\n\r\n      // Объекты с нужными условиями\r\n      const spollersArray = breakpointsArray.filter(function (item) {\r\n        if (item.value === mediaBreakpoint && item.type === mediaType) {\r\n          return true;\r\n        }\r\n      });\r\n      // Событие\r\n      matchMedia.addListener(function () {\r\n        initSpollers(spollersArray, matchMedia);\r\n      });\r\n      initSpollers(spollersArray, matchMedia);\r\n    });\r\n  }\r\n  // Инициализация\r\n  function initSpollers(spollersArray, matchMedia = false) {\r\n    spollersArray.forEach(spollersBlock => {\r\n      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;\r\n      if (matchMedia.matches || !matchMedia) {\r\n        spollersBlock.classList.add('_init');\r\n        initSpollerBody(spollersBlock);\r\n        spollersBlock.addEventListener(\"click\", setSpollerAction);\r\n      } else {\r\n        spollersBlock.classList.remove('_init');\r\n        initSpollerBody(spollersBlock, false);\r\n        spollersBlock.removeEventListener(\"click\", setSpollerAction);\r\n      }\r\n    });\r\n  }\r\n  // Работа с контентом\r\n  function initSpollerBody(spollersBlock, hideSpollerBody = true) {\r\n    const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');\r\n    if (spollerTitles.length > 0) {\r\n      spollerTitles.forEach(spollerTitle => {\r\n        if (hideSpollerBody) {\r\n          spollerTitle.removeAttribute('tabindex');\r\n          if (!spollerTitle.classList.contains('_active')) {\r\n            spollerTitle.nextElementSibling.hidden = true;\r\n          }\r\n        } else {\r\n          spollerTitle.setAttribute('tabindex', '-1');\r\n          spollerTitle.nextElementSibling.hidden = false;\r\n        }\r\n      });\r\n    }\r\n  }\r\n  function setSpollerAction(e) {\r\n    const el = e.target;\r\n    if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {\r\n      const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');\r\n      const spollersBlock = spollerTitle.closest('[data-spollers]');\r\n      const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;\r\n      if (!spollersBlock.querySelectorAll('._slide').length) {\r\n        if (oneSpoller && !spollerTitle.classList.contains('_active')) {\r\n          hideSpollersBody(spollersBlock);\r\n        }\r\n        spollerTitle.classList.toggle('_active');\r\n        _slideToggle(spollerTitle.nextElementSibling, 500);\r\n      }\r\n      e.preventDefault();\r\n    }\r\n  }\r\n  function hideSpollersBody(spollersBlock) {\r\n    const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');\r\n    if (spollerActiveTitle) {\r\n      spollerActiveTitle.classList.remove('_active');\r\n      _slideUp(spollerActiveTitle.nextElementSibling, 500);\r\n    }\r\n  }\r\n}\r\n\r\nlet _slideUp = (target, duration = 500) => {\r\n  if (!target.classList.contains('_slide')) {\r\n    target.classList.add('_slide');\r\n    target.style.transitionProperty = 'height, margin, padding';\r\n    target.style.transitionDuration = duration + 'ms';\r\n    target.style.height = target.offsetHeight + 'px';\r\n    target.offsetHeight;\r\n    target.style.overflow = 'hidden';\r\n    target.style.height = 0;\r\n    target.style.paddingTop = 0;\r\n    target.style.paddingBottom = 0;\r\n    target.style.marginTop = 0;\r\n    target.style.marginBottom = 0;\r\n    window.setTimeout(() => {\r\n      target.hidden = true;\r\n      target.style.removeProperty('height');\r\n      target.style.removeProperty('padding-top');\r\n      target.style.removeProperty('padding-bottom');\r\n      target.style.removeProperty('margin-top');\r\n      target.style.removeProperty('margin-bottom');\r\n      target.style.removeProperty('overflow');\r\n      target.style.removeProperty('transition-duration');\r\n      target.style.removeProperty('transition-property');\r\n      target.classList.remove('_slide');\r\n    }, duration);\r\n  }\r\n}\r\nlet _slideDown = (target, duration = 500) => {\r\n  if (!target.classList.contains('_slide')) {\r\n    target.classList.add('_slide');\r\n    if (target.hidden) {\r\n      target.hidden = false;\r\n    }\r\n    let height = target.offsetHeight;\r\n    target.style.overflow = 'hidden';\r\n    target.style.height = 0;\r\n    target.style.paddingTop = 0;\r\n    target.style.paddingBottom = 0;\r\n    target.style.marginTop = 0;\r\n    target.style.marginBottom = 0;\r\n    target.offsetHeight;\r\n    target.style.transitionProperty = \"height, margin, padding\";\r\n    target.style.transitionDuration = duration + 'ms';\r\n    target.style.height = height + 'px';\r\n    target.style.removeProperty('padding-top');\r\n    target.style.removeProperty('padding-bottom');\r\n    target.style.removeProperty('margin-top');\r\n    target.style.removeProperty('margin-bottom');\r\n    window.setTimeout(() => {\r\n      target.style.removeProperty('height');\r\n      target.style.removeProperty('overflow');\r\n      target.style.removeProperty('transition-duration');\r\n      target.style.removeProperty('transition-property');\r\n      target.classList.remove('_slide');\r\n    }, duration);\r\n  }\r\n}\r\nlet _slideToggle = (target, duration = 500) => {\r\n  if (target.hidden) {\r\n    return _slideDown(target, duration);\r\n  } else {\r\n    return _slideUp(target, duration);\r\n  }\r\n}\n\n//# sourceURL=webpack://rupor/./src/js/modules/spoiler.js?");

/***/ }),

/***/ "./src/js/modules/swiper.js":
/*!**********************************!*\
  !*** ./src/js/modules/swiper.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener('DOMContentLoaded', createSliderStart);\r\ndocument.addEventListener('resize', createSliderStart);\r\ndocument.addEventListener('orientationchange ', createSliderStart);\r\n\r\nfunction createSliderStart() {\r\n  const width = window.innerWidth;\r\n  if (width < 768) {\r\n    new Swiper('.start__slider', {\r\n      slidesPerView: 2,\r\n      spaceBetween: 15,\r\n      grabCursor: true,\r\n      loop: true,\r\n      speed: 800,\r\n      autoplay: {\r\n        delay: 3500,\r\n      },\r\n      navigation: {\r\n        nextEl: '.start__right',\r\n        prevEl: '.start__left',\r\n      },\r\n      breakpoints: {\r\n        0: {\r\n          slidesPerView: 1,\r\n        },\r\n        500: {\r\n          slidesPerView: 2,\r\n        },\r\n      },\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://rupor/./src/js/modules/swiper.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst width = window.innerWidth;\r\n\r\nconst indicatorTabMap = document.querySelector('.roadmap__indicator');\r\n\r\nlet activeTabMap = document.querySelector('.roadmap__tab._active');\r\n\r\nsetTimeout(() => {\r\n  if (width > 992) {\r\n    indicatorTabMap.style.height = activeTabMap.clientHeight + 'px';\r\n    indicatorTabMap.style.top = activeTabMap.offsetTop + 'px';\r\n  } else {\r\n    indicatorTabMap.style.width = activeTabMap.clientWidth + 18 + 'px';\r\n    indicatorTabMap.style.left = activeTabMap.offsetLeft - 9 + 'px';\r\n  }\r\n}, 100);\r\n\r\nlet tabsMap = () => {\r\n  let nav = document.querySelectorAll('.roadmap__tab'),\r\n    result = document.querySelectorAll('.roadmap__steps'),\r\n    tabName;\r\n\r\n  nav.forEach(item => {\r\n    item.addEventListener('click', selectnav);\r\n  });\r\n\r\n  function selectnav() {\r\n    nav.forEach(item => {\r\n      item.classList.remove('_active');\r\n    });\r\n    this.classList.add('_active');\r\n\r\n    if (width > 992) {\r\n      indicatorTabMap.style.height = this.clientHeight + 'px';\r\n      indicatorTabMap.style.top = this.offsetTop + 'px';\r\n    } else {\r\n      indicatorTabMap.style.width = this.clientWidth + 'px';\r\n      indicatorTabMap.style.left = this.offsetLeft + 'px';\r\n    }\r\n\r\n    tabName = this.getAttribute('data-tab-name');\r\n    selectresult(tabName);\r\n  }\r\n\r\n  function selectresult(tabName) {\r\n    result.forEach(item => {\r\n      item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active');\r\n    });\r\n  }\r\n};\r\n\r\ntabsMap();\r\n\n\n//# sourceURL=webpack://rupor/./src/js/modules/tabs.js?");

/***/ }),

/***/ "./src/js/modules/webp.js":
/*!********************************!*\
  !*** ./src/js/modules/webp.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isWebp)\n/* harmony export */ });\n/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */\r\nfunction isWebp() {\r\n  // Проверка поддержки webp\r\n  function testWebP(callback) {\r\n    let webP = new Image();\r\n    webP.onload = webP.onerror = () => {\r\n      callback(webP.height == 2)\r\n    }\r\n    webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\"\r\n  }\r\n\r\n  // Добавление класса _webp или _no-webp для HTML\r\n  testWebP((support) => {\r\n    let className = support === true ? \"webp\" : \"no-webp\";\r\n    document.documentElement.classList.add(className);\r\n  })\r\n}\n\n//# sourceURL=webpack://rupor/./src/js/modules/webp.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_webp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/webp.js */ \"./src/js/modules/webp.js\");\n/* harmony import */ var _modules_device_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/device.js */ \"./src/js/modules/device.js\");\n/* harmony import */ var _modules_spoiler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/spoiler.js */ \"./src/js/modules/spoiler.js\");\n/* harmony import */ var _modules_swiper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/swiper.js */ \"./src/js/modules/swiper.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/js/modules/tabs.js\");\n/* harmony import */ var _modules_chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/chart.js */ \"./src/js/modules/chart.js\");\n//< \" CONNECTING JS COMPONENTS \" >=============================================================================================================>//\r\n //SUPPORT WEBP\r\n\r\n //DEFINE DEVICE\r\n\r\n// import './modules/preloader.js'; // PRELOADER\r\n\r\n // SPOILERS\r\n\r\n// import \"./modules/dynamic_adap.js\"  // DYNAMIC ADAPTIVE\r\n\r\n// import \"./modules/scroll_header.js\"  // SCROLL HEADER\r\n\r\n // SLIDER SWIPER\r\n\r\n// import \"./modules/animate_scroll.js\"  // ANIMATE WITH SCROLL\r\n\r\n // TABS\r\n\r\n // CHART\r\n\r\n// import \"./modules/parallax.js\"  // PARALLAX EFFECT\r\n\r\n//< \" СКРИПТЫ \" >=============================================================================================================>//\r\n\r\n(0,_modules_webp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_device_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n// Header burger\r\n\r\nconst burgerClose = document.querySelector('.header__close');\r\nconst burgerOpen = document.querySelector('.header__burger');\r\nconst burgerMenu = document.querySelector('.header__nav');\r\n\r\nburgerOpen.addEventListener('click', () => {\r\n  burgerMenu.classList.add('active');\r\n  document.body.classList.add('_lock-scroll');\r\n});\r\n\r\nburgerClose.addEventListener('click', () => {\r\n  burgerMenu.classList.remove('active');\r\n  document.body.classList.remove('_lock-scroll');\r\n});\r\n\n\n//# sourceURL=webpack://rupor/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;