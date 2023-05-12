const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'themeKey';

const checkBox = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

checkBox.addEventListener('change', onChange);
isTheme();

function onChange(e) {
  if (e.target.checked) {
    body.classList.remove('ligth-theme');
    body.classList.add('dark-theme');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.DARK));
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('ligth-theme');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.LIGHT));
  }
}

function isTheme() {
  const saveTheme = localStorage.getItem(STORAGE_KEY);
  if (!saveTheme) {
    body.classList.add('ligth-theme');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.LIGHT));
  } else {
    const parseTheme = JSON.parse(saveTheme);
    if (parseTheme === 'dark-theme') {
      body.classList.add('dark-theme');
      checkBox.checked = true;
    }
  }
}

// -------------------

// const icon_dark_theme = document.querySelector('.icon_dark_theme');
// const icon_light_theme = document.querySelector('.icon_light_theme');
// const style = document.querySelector('.js-light-theme');

// icon_dark_theme.addEventListener('click', onDarkThemeButtonClick);
// icon_light_theme.addEventListener('click', onLightThemeButtonClick);

// function onDarkThemeButtonClick(evt) {
//   if (evt.currentTarget) {
//     icon_dark_theme.classList.add('hidden');
//     icon_light_theme.classList.remove('hidden');
//     style.classList.remove('dark-theme');
//     style.classList.add('light-theme');
//   }
// }

// function onLightThemeButtonClick(evt) {
//   if (evt.currentTarget) {
//     icon_light_theme.classList.add('hidden');
//     icon_dark_theme.classList.remove('hidden');
//     style.classList.remove('light-theme');
//     style.classList.add('dark-theme');
//   }
// }
