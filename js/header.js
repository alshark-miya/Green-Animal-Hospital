const headerNavLists = document.querySelectorAll('#header-nav-lists .header-nav-list');
const headerDropdownMenuWrappers = document.querySelectorAll('#header-nav-lists .header-dropdown-menu-wrapper');
const headerDropdownMenuMedicalInfoFlexContainer = document.querySelector('#header-dropdown-menu-medical-info-flex-container');

console.log(headerDropdownMenuMedicalInfoFlexContainer);
console.log(headerNavLists);
console.log(headerDropdownMenuWrappers);

const arrayHeaderNavLists = Array.from(headerNavLists);
const arrayHeaderDropdownMenuWrappers = Array.from(headerDropdownMenuWrappers);

console.log(arrayHeaderNavLists);
console.log(arrayHeaderDropdownMenuWrappers);

const headerNavList1 = arrayHeaderNavLists[0];
const headerNavList2 = arrayHeaderNavLists[1];
const headerNavList3 = arrayHeaderNavLists[2];
const headerNavList4 = arrayHeaderNavLists[3];
const headerNavList5 = arrayHeaderNavLists[4];
const headerNavList6 = arrayHeaderNavLists[5];


const headerDropdownMenu1 = arrayHeaderDropdownMenuWrappers[0];
const headerDropdownMenu2 = arrayHeaderDropdownMenuWrappers[1];
const headerDropdownMenu3 = headerDropdownMenuMedicalInfoFlexContainer;
const headerDropdownMenu4 = arrayHeaderDropdownMenuWrappers[3];
const headerDropdownMenu5 = arrayHeaderDropdownMenuWrappers[4];
const headerDropdownMenu6 = arrayHeaderDropdownMenuWrappers[5];

const headerNavHome = document.querySelector('.header-nav-home');
console.log(headerNavHome);

arrayHeaderNavLists.forEach((arrayHeaderNavList) => {
  
  arrayHeaderNavList.addEventListener('mouseover', () => {
    console.log(arrayHeaderNavList);
    
    const currentIndex = this.getAttribute('data-index');
    console.log(currentIndex);
    
    });
  });

arrayHeaderNavLists.forEach((arrayHeaderNavList) => {
  arrayHeaderNavList.addEventListener('mouseover', function () {
    const currentIndexMouseover = this.getAttribute('data-index');
    // 同じインデックス番号のパネルをvisibleに変更
    const targetArrayHeaderDropdownMenuMouseover1 = document.querySelector(`#header-nav-lists .header-dropdown-menu-wrapper[data-index = "${currentIndexMouseover}"]`);
    
    console.log(arrayHeaderNavList);
    console.log(currentIndexMouseover);
    console.log(targetArrayHeaderDropdownMenuMouseover1);
    
  if (targetArrayHeaderDropdownMenuMouseover1) {
    targetArrayHeaderDropdownMenuMouseover1.style.visibility = 'visible';
  }
    
    const targetArrayHeaderDropdownMenu2 = document.querySelector(`#header-dropdown-menu-medical-info-flex-container[data-index = "${currentIndexMouseover}"]`);
    if (targetArrayHeaderDropdownMenu2) {
      targetArrayHeaderDropdownMenu2.style.visibility = 'visible';
    }
  });
  arrayHeaderNavList.addEventListener('mouseout', function() {
    const currentIndexMouseout = this.getAttribute('data-index');
    // 同じインデックス番号のパネルをhiddenに変更
    const targetArrayHeaderDropdownMenuMouseout1 = document.querySelector(`#header-nav-lists .header-dropdown-menu-wrapper[data-index = "${currentIndexMouseout}"]`);
    if (targetArrayHeaderDropdownMenuMouseout1) {
      targetArrayHeaderDropdownMenuMouseout1.style.visibility = 'hidden';
    }
    const targetArrayHeaderDropdownMenuMouseout2 = document.querySelector(`#header-dropdown-menu-medical-info-flex-container[data-index = "${currentIndexMouseout}"]`);
    if (targetArrayHeaderDropdownMenuMouseout2) {
      targetArrayHeaderDropdownMenuMouseout2.style.visibility = 'hidden';
    }
  });
});


`/
/* 
ヘッダーナビの『ホーム』のlistが現在ありません、追加された時に使用してください
headerNavList1.addEventListener('mouseover', () => {
  headerDropdownMenu1.style.visibility = 'visible';
});
headerNavList1.addEventListener('mouseout', () => {
  headerDropdownMenu1.style.visibility = 'hidden';             
});
*/

headerNavList2.addEventListener('mouseover', () => {
  headerDropdownMenu2.style.visibility = 'visible';
});

/* 上のコードと一緒
headerNavBtns[1].addEventListener('mouseover', () => {
  headerDropdownMenuWrappers[1].style.visibility = 'visible';
});
*/

headerNavList2.addEventListener('mouseout', () => {
  headerDropdownMenu2.style.visibility = 'hidden';             
});
headerNavList3.addEventListener('mouseover', () => {
  headerDropdownMenu3.style.visibility = 'visible';
});
headerNavList3.addEventListener('mouseout', () => {
  headerDropdownMenu3.style.visibility = 'hidden';    
});

/* ヘッダーナビの『よくあるご質問』のlistが現在ありません、追加された時に使用してください
headerNavList4.addEventListener('mouseover', () => {
  headerDropdownMenu4.style.visibility = 'visible';
});
headerNavList4.addEventListener('mouseout', () => {
  headerDropdownMenu4.style.visibility = 'hidden';             
});
*/
headerNavList5.addEventListener('mouseover', () => {
  headerDropdownMenu5.style.visibility = 'visible';
});
headerNavList5.addEventListener('mouseout', () => {
  headerDropdownMenu5.style.visibility = 'hidden';
});
headerNavList6.addEventListener('mouseover', () => {
  headerDropdownMenu6.style.visibility = 'visible';
});
headerNavList6.addEventListener('mouseout', () => {
  headerDropdownMenu6.style.visibility = 'hidden';
});
*/
/`

/*
const headerNavLists = document.querySelectorAll('.header-nav-list');
const headerDropdownMenuWrappers = document.querySelectorAll('#header-dropdown-menu-wrapper');

console.log(headerNavLists);
console.log(headerDropdownMenuWrappers);

const arrayNavLists = Array.from(headerNavLists);
const arrayDropdownMenuWrappers = Array.from(headerDropdownMenuWrappers);

console.log(arrayNavLists);
console.log(arrayNavLists.length);
console.log(arrayDropdownMenuWrappers);
console.log(arrayDropdownMenuWrappers.length);

for (let i = 0; i < arrayLists.length; i++) {
  const arrayListIndex = i;
  console.log(arrayListIndex);
  console.log(arrayLists[i]);
}
for (let i = 0; i < arrayDropdownMenuWrappers.length; i++) {
  const arrayDropdownMenuWrapperIndex = i;
  console.log(arrayDropdownMenuWrapperIndex);
  console.log(arrayDropdownMenuWrappers[i]);
}

arrayNavLists.forEach((arrayNavList) => {
  arrayNavList.addEventListener('mouseover', () => {
   arrayDropdownMenuWrappers.style.
  });
});
*/

// ヘッダーナビを『click』すると ページ移動 開始
headerNavHome.addEventListener('click', () => {
// window.location.href = 'https://codepen.io/btsqskej-the-lessful/pen/myPpJWw'; // 同じタブ移動 履歴に残る 戻るボタンで戻れる『通常のページ遷移』
// window.location.replace = 'https://codepen.io/btsqskej-the-lessful/pen/myPpJWw'; // 同じタブ移動 履歴に残らない 戻るボタンで戻れない 『ログイン後のリダイレクトなど』
  window.open('https://codepen.io/btsqskej-the-lessful/pen/myPpJWw','_blank'); // 別タブ移動 
});
// ヘッダーナビを『click』すると ページ移動 終了
// ハンバーガーメニューパネル 開始
const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerCloseIcon = document.querySelector('.hamburger-close-icon');
const hamburgerMenuPanel = document.querySelector('#hamburger-menu-panel');
const hamburgerMenuIconFlexContainer  = document.querySelector('#hamburger-menu-icon-flex-container');
const hamburgerMenuLists = document.querySelectorAll('.hamburger-menu-list');

// メニューを開く
hamburgerIcon.addEventListener('click', openHamburgerMenu);

function openHamburgerMenu() {
  console.log('メニューを開く');
  
  setTimeut(() => {
    hamburgerMenuIconFlexContainer.style.transform = 'rotateX(180deg)'
  }, 840);
  
  const keyframes1 = {
    translate: ['100vw', 0],
  };
  const options1 = {
    duration: 1400,
    easing: 'ease-in-out',
    fill: 'forwards',
  };
  hamburgerMenuPanel.animate(keyframes1, options1); 
  
  hamburgerMenuLists.forEach((hamburgerMenuList, index) => {
    console.log(hamburgerMenuList);
    console.log(`${index}番目のリスト`);
    const keyframes2 = {
      opacity: [0, 1],
      translate: ['2rem', 0],
    };
    const options2 = {
      duration: 2400,
      easing: 'ease-in-out',
      fill: 'both',
      delay: index * 300,
    };
    hamburgerMenuList.animate(keyframes2, options2); 
  });
}
// メニューを閉じる
hamburgerCloseIcon.addEventListener('click', closeHamburgerMenu);

function closeHamburgerMenu() {
  console.log('メニューを閉じる');
  
  setTimeout(() => {
    hamburgerMenuIconFlexContainer.style.transform = 'rotateX(360deg)'
  }, 580);
  
  const keyframes = {
    translate:[0, '100vw'],
  };
  const options = {
    duration: 1400,
    easing: 'ease-in-out',
    fill: 'forwards',
  }
  hamburgerMenuLists.forEach((hamburgerMenuList) => {
    hamburgerMenuList.animate({opacity: [1, 0]}, options);
  });
  hamburgerMenuPanel.animate(keyframes, options);
}
// ハンバーガーメニューパネル 終了
