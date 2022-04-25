import HEADER_TEMPLATE from './template.js';

const isLoggedIn = true; // 임시

export const renderHeader = (pathname, $parent) => {
  $parent.innerHTML = HEADER_TEMPLATE;
};
