const RAW_PATHNAMES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout',
  MYTEAM: '/myteam',
  TEAM: '/team',
};

const RAW_PATHNAMES_ENTRIES = Object.entries(RAW_PATHNAMES);
const PATHNAME_ENTRIES = RAW_PATHNAMES_ENTRIES.map(([key, route]) => [
  key,
  `${route}`, //SUBPATH는? 일단 이렇게 놓자.
]);

export const PATHNAMES = Object.freeze(Object.fromEntries(PATHNAME_ENTRIES));
console.log(PATHNAMES);

export const ACCESSIBLE_PATHNAMES = (isLoggedIn) =>
  isLoggedIn ? [HOME, LOGOUT] : [HOME, LOGIN, SIGNUP];
