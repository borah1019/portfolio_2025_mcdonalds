// HEADER
// UTIL - SEARCH
const btnSearch = document.querySelector('.util>.btn_search');
const searchWrap = document.querySelector('.util .pc_search_wrap');

btnSearch.addEventListener('click', function() {
  function closeSearchWrap() {
    btnSearch.className = "btn_search";
    searchWrap.style.transform = "translateY(-100%)";  
  }

  if (this.className === "btn_search") {
    btnSearch.className = "btn_close";
    searchWrap.style.transform = "translateY(0)";
  } else {
    closeSearchWrap();
  }

  window.addEventListener('resize', closeSearchWrap);
})

// ALL MENU - ALL MENU WRAP
const btnAllmenu = document.querySelector('.btn_allmenu');
const allmenuWrap = document.querySelector('.allmenu_wrap');
const btnClose = document.querySelector('.allmenu_wrap .btn_close');

function closeAllmenuWrap() {
  allmenuWrap.style.transform = "translateX(100%)";
}
btnAllmenu.addEventListener('click', function() {
  allmenuWrap.style.transform = "translateX(0)";
})

btnClose.addEventListener('click', closeAllmenuWrap);
window.addEventListener('resize', closeAllmenuWrap);

// ALL MENU - MENU
const allmenuDep1 = document.querySelectorAll('.allmenu .allmenu_dep1');
const allmenuDep2 = document.querySelectorAll('.allmenu .allmenu_dep1 .allmenu_dep2');

allmenuDep1.forEach(function(e) {
  const allmenuDep1Link = e.querySelector('b');

  allmenuDep1Link.addEventListener('click', function() {
    const thisAllmenuDep2 = e.querySelector('.allmenu_dep2');
    
    allmenuDep2.forEach(function(e) {
      e.style.opacity = '0';
      e.parentElement.style.height = "64px";
      e.parentElement.querySelector('b').classList.remove('clicked');
    })

    if (this.parentElement.offsetHeight == 64) {
      thisAllmenuDep2.style.opacity = '1';
      this.parentElement.style.height = `${64 + thisAllmenuDep2.offsetHeight}px`;
      this.classList.add('clicked');
    } else {
      thisAllmenuDep2.style.opacity = '0';
      this.parentElement.style.height = "64px";
      this.classList.remove('clicked');
    }
  })
})

// TABS

// const tabs = Array.from(document.querySelectorAll('.tabs li'));
// const tabBoxes = Array.from(document.querySelectorAll('.tab_box .tab_list'));

// tabs.forEach(function(e) {
//   let tabIndex;
//   e.addEventListener('click', function() {
//     tabIndex = tabs.indexOf(e);
//     tabs.forEach(function(e) {
//       e.classList.remove('clicked');
//     })
//     e.classList.add('clicked');
//     tabBoxes.forEach(function(e) {
//       e.classList.remove('clicked');
//     })
//     tabBoxes[tabIndex].classList.add('clicked');
//   })
// })

const tabs = Array.from(document.querySelectorAll('.tabs'));

tabs.forEach(function(e) {
  const tab = Array.from(e.children);
  const tabList = Array.from(e.parentElement.querySelector('.tab_box').children);

  tab.forEach(function(e) {
    e.addEventListener('click', function() {
      const tabIndex = tab.indexOf(e);
      tab.forEach(function(e) {
        e.classList.remove('clicked');
      })
      e.classList.add('clicked');
      tabList.forEach(function(e) {
        e.classList.remove('clicked');
      })
      tabList[tabIndex].classList.add('clicked');
    })
  })
})