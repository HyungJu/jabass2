import { PATHNAMES } from '../constants/pathnames.js';
import { hasPropertyValue } from '../utils/index.js';

export default function getValidPathname(pathname) {
  const currentPathname = window.location.pathname;

  try {
    if (!isValidPathname(pathname)) {
      // showNotification
      return currentPathname;
    }
    if (!hasAccessRight(pathname)) {
      // showNotification
      return currentPathname;
    }
  } catch (error) {}

  return pathname;
}

function hasAccessRight(pathname) {
  return; //
}

function isValidPathname(pathname) {
  return hasPropertyValue(PATHNAMES, pathname);
}
