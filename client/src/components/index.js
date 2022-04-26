import { $ } from '../utils/index.js';
import { PATHNAMES } from '../constants/pathnames.js';
import { renderHome } from '../pages/home/view.js';
import { renderHeader } from './header/view.js';
import { renderSignup } from '../pages/signup/view.js';
import { renderLogin } from '../pages/login/view.js';
import { renderTeam } from '../pages/team/view.js';
import { renderMyTeam } from '../pages/myteam/view.js';

const $header = $('header');
const $main = $('main');

const renderContents = {
  [PATHNAMES.HOME]: renderTeam,
  [PATHNAMES.LOGIN]: renderLogin,
  [PATHNAMES.SIGNUP]: renderSignup,
  [PATHNAMES.TEAM]: renderTeam,
  [PATHNAMES.MYTEAM]: renderMyTeam,
};

export const renderContent = (pathname) => {
  renderContents[pathname]($main);
};

export const render = (pathname) => {
  renderHeader(pathname, $header);
  renderContent(pathname);
};
