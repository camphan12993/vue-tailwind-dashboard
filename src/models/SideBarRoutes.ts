import Route from './Route';

const sideBarRoutes: Route[] = [
  {
    path: '/dashboard', // the url
    icon: 'dashboard', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/user', // the url
    icon: 'user', // the component being exported from icons/index.js
    name: 'User', // name that appear in Sidebar
  },
  {
    path: '/contact', // the url
    icon: 'contact', // the component being exported from icons/index.js
    name: 'Contact', // name that appear in Sidebar
  },
];

export default sideBarRoutes;
