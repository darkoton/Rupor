const width = window.innerWidth;
const indicatorTabToken = document.querySelector('.tokenomics__indicator');

let activeTabToken = document.querySelector('.tokenomics__tab._active');

setTimeout(() => {
  indicatorTabToken.style.width = activeTabToken.clientWidth + 18 + 'px';
  indicatorTabToken.style.left = activeTabToken.offsetLeft - 9 + 'px';
}, 100);

let tabsToken = () => {
  let nav = document.querySelectorAll('.tokenomics__tab'),
    result = document.querySelectorAll('.tokenomics__block'),
    tabName;

  nav.forEach(item => {
    item.addEventListener('click', selectnav);
  });

  function selectnav() {
    nav.forEach(item => {
      item.classList.remove('_active');
    });
    this.classList.add('_active');
    indicatorTabToken.style.width = this.clientWidth + 18 + 'px';
    indicatorTabToken.style.left = this.offsetLeft - 9 + 'px';

    tabName = this.getAttribute('data-tab-name');
    selectresult(tabName);
  }

  function selectresult(tabName) {
    result.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active');
    });
  }
};

tabsToken();

const indicatorTabMap = document.querySelector('.roadmap__indicator');

let activeTabMap = document.querySelector('.roadmap__tab._active');

setTimeout(() => {
  if (width > 992) {
    indicatorTabMap.style.height = activeTabMap.clientHeight + 'px';
    indicatorTabMap.style.top = activeTabMap.offsetTop + 'px';
  } else {
    indicatorTabMap.style.width = activeTabMap.clientWidth + 18 + 'px';
    indicatorTabMap.style.left = activeTabMap.offsetLeft - 9 + 'px';
  }
}, 100);

let tabsMap = () => {
  let nav = document.querySelectorAll('.roadmap__tab'),
    result = document.querySelectorAll('.roadmap__steps'),
    tabName;

  nav.forEach(item => {
    item.addEventListener('click', selectnav);
  });

  function selectnav() {
    nav.forEach(item => {
      item.classList.remove('_active');
    });
    this.classList.add('_active');

    if (width > 992) {
      indicatorTabMap.style.height = this.clientHeight + 'px';
      indicatorTabMap.style.top = this.offsetTop + 'px';
    } else {
      indicatorTabMap.style.width = this.clientWidth + 'px';
      indicatorTabMap.style.left = this.offsetLeft + 'px';
    }

    tabName = this.getAttribute('data-tab-name');
    selectresult(tabName);
  }

  function selectresult(tabName) {
    result.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active');
    });
  }
};

tabsMap();
