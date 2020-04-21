'use strict';


import './styles.css';
import menu from './menu.json';
import menuItemTemplate from './templates/menu-item.hbs';


const refs = { 
  menuList: document.querySelector('.js-menu'),
  themeSwitch: document.querySelector('#theme-switch-control'),
  body: document.querySelector('body'), 
};

const markup = menuItemTemplate(menu); // разметка меню
refs.menuList.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const userTheme = localStorage.getItem('userTheme');

if (userTheme) {
  if (userTheme === Theme.DARK) {
    refs.themeSwitch.checked = true;
  } else {
    refs.themeSwitch.checked = false;
  }
  refs.body.classList.add(userTheme);
}

refs.themeSwitch.addEventListener('change', e => {
  if (e.target.checked) {
    // refs.body.classList.remove(Theme.LIGHT);
    // refs.body.classList.add(Theme.DARK);
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('userTheme', Theme.DARK);
  } else {
    // refs.body.classList.remove(Theme.DARK);
    // refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('userTheme', Theme.LIGHT);
  }
});