const indicatorTab = document.querySelector('.tokenomics__indicator')

let activeTab = document.querySelector('.tokenomics__tab._active')

setTimeout(()=>{
  indicatorTab.style.width= activeTab.clientWidth + 18 + 'px'
  indicatorTab.style.left= activeTab.offsetLeft - 9 + 'px'
}, 100)

let tabs = () => {
  let nav = document.querySelectorAll('.tokenomics__tab'),
    result = document.querySelectorAll('.tokenomics__block'),
    tabName

  nav.forEach(item => {
    item.addEventListener('click', selectnav)
  })

  function selectnav() {
    nav.forEach(item => {
      item.classList.remove('_active');
    });
    this.classList.add('_active')
    indicatorTab.style.width= this.clientWidth + 18 + 'px'
    indicatorTab.style.left= this.offsetLeft - 9 + 'px'

    tabName = this.getAttribute('data-tab-name')
    selectresult(tabName)
  }

  function selectresult(tabName) {
    result.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active')
    })
  }
}

tabs()