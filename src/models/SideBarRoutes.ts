import Route from './Route';

const sideBarRoutes: Route[] = [
  {
    path: '/app/dashboard', // the url
    icon: 'home', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/forms',
    icon: 'forms',
    name: 'Forms',
  },
  {
    path: '/app/cards',
    icon: 'cards',
    name: 'Cards',
  },
  {
    path: '/app/charts',
    icon: 'charts',
    name: 'Charts',
  },
  {
    path: '/app/buttons',
    icon: 'buttons',
    name: 'Buttons',
  },
  {
    path: '/app/modals',
    icon: 'modals',
    name: 'Modals',
  },
  {
    path: '/app/tables',
    icon: 'tables',
    name: 'Tables',
  },
];

export default sideBarRoutes;
