import { render } from '../components/index.js';
import { PATHNAMES } from '../constants/pathnames.js';
import { renderContent } from '../components/index.js';

export function handleWindowPopstate({ target }) {
  const { pathname } = target.location;
  console.log('handlewindowpopstate실행');
  renderContent(pathname);
}

export function handleLinkClick(event) {
  const $anchor = event.target.closest('a');
  if ($anchor === null || isDifferentOrigin($anchor.origin)) {
    return;
  }

  event.preventDefault();

  const { pathname } = $anchor;
  if (pathname === PATHNAMES.LOGOUT) {
    // logout()
    // go(PATHNAMES.HOME);
    return;
  }

  go(pathname);
}

export function go(pathname) {
  console.log(pathname, 'ingo');
  addPathnameToBrowserHistory(pathname);
  render(pathname);
}

function addPathnameToBrowserHistory(pathname) {
  if (!isChangedPathname(pathname)) return;
  window.history.pushState(null, null, pathname);
}

function isChangedPathname(pathname) {
  return window.location.pathname !== pathname;
}

function isDifferentOrigin(targetOrigin) {
  return window.location.origin !== targetOrigin;
}
