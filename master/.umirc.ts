import { defineConfig } from '@umijs/max';

export default defineConfig({
  outputPath: '../dist/mainApp/',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '主应用',
  },
  qiankun: {
    master: {},
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '关于',
      path: '/about',
      component: './About',
    },
    {
      name: '子应用1',
      path: '/subApp1',
      microApp: 'microApp1',
    },
    {
      name: '子应用2',
      path: '/subApp2',
      microApp: 'microApp2',
    },
  ],
  npmClient: 'pnpm',
});
