// @ts-ignore
import { defineConfig } from 'umi';
// @ts-ignore
import route from './routes/route.js';

export default defineConfig({
  nodeModulesTransform: {
    type: 'all',
  },
  targets: {
    ie: 10,
  },
  hash: true,
  routes: route,
  dynamicImport: {
    loading: '@/Loading',
  },
  dva: {
    immer: true,
    hmr: false,
  },
  antd: {
    dark: true,
    compact: true,
  },
});
