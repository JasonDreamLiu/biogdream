export let onRouteChange = ({
  location,
  routes,
  action,
  matchedRoutes,
}: any) => {
  console.log(location.pathname, routes, action, '路由：', matchedRoutes);
  if (matchedRoutes[matchedRoutes.length - 1].route.title) {
    for (let i = 0; i < matchedRoutes.length; i++) {
      if (i == 0) {
        document.title = matchedRoutes[i].route.title;
      } else {
        document.title = matchedRoutes[i].route.title + '-' + document.title;
      }
    }
  } else {
    document.title = '冰梦殿';
  }
  // document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '123';
};
