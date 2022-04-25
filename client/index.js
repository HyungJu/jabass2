import { $ } from './src/utils/index.js';
import { PATHNAMES } from './src/constants/pathnames.js';
import {
  go,
  handleWindowPopstate,
  handleLinkClick,
} from './src/router/index.js';

import './src/scss/index.scss';

const $app = $('#app');

$app.addEventListener('click', handleLinkClick);
window.addEventListener('popstate', handleWindowPopstate);

go(PATHNAMES.HOME);
