interface Route {
  path?: string;
  icon?: string;
  name: string;
  routes?: Route[];
}

export default Route;
