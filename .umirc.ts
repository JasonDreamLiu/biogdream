import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'all',
  },
  routes: [
    { 
      title: '冰梦幻天地',
      path: '/', component: 'index',
      routes: [
        { path: '/', component: 'Home', title: '首页' },
        { path: '/my', component: 'Lntroduction', title: '简介' },
        { 
          title: '文章',
          path: '/article', component: 'Article' ,
          routes: [
            // { path: '/article', component: 'Article', title: '文章' },
            { path:'/article/:id', component: 'Article/Bookmain', title: '内容' }
          ] 
        },
      ]
    },
  ],
  dynamicImport: {
    loading: '@/Loading'
  },
  dva: {
      immer: true,
      hmr: false,
  },
  antd: {
      dark: true,
      compact: true,
  }
});
