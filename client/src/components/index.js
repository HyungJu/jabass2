import { $ } from '../utils/index.js';
import { PATHNAMES } from '../constants/pathnames.js';
import { renderHome } from '../pages/home/view.js';
import { renderHeader } from './header/view.js';
import { renderLogin } from '../pages/login/view.js';

const $header = $('header');
const $main = $('main');

const renderContents = {
  [PATHNAMES.HOME]: renderLogin,
  [PATHNAMES.LOGIN]: renderHome,
};

export const renderContent = (pathname) => {
  console.log(pathname, 'what');
  renderContents[pathname]($main);
};

export const render = (pathname) => {
  renderHeader(pathname, $header);
  renderContent(pathname);
};
