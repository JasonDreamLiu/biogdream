export default [
  {
    title: '冰梦殿',
    path: '/',
    component: 'index',
    routes: [
      {
        path: '/',
        component: 'Home',
        title: '首页',
      },
      {
        path: '/my',
        component: 'Lntroduction',
        title: '简介',
      },
      {
        title: '文章',
        path: '/article',
        component: 'Article',
        routes: [
          {
            path: '/article/:id',
            component: 'Article/Bookmain',
            title: '内容',
          },
        ],
      },
    ],
  },
];
