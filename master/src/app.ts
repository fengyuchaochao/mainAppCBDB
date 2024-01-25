const isDev = process.env.NODE_ENV === 'development';

// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

export const qiankun = {
  apps: [
    {
      name: 'microApp1',
      entry: isDev ? 'http://localhost:8001' : '../microApp1',
    },
    {
      name: 'microApp2',
      entry: isDev ? 'http://localhost:8002' : '../microApp2',
    },
    // {
    //   name: 'microCloudWebConsole',
    //   entry: 'http://localhost:8003',
    // },
    // {
    //   name: 'microCBDB',
    //   entry: 'http://192.168.5.112:8002',
    // },
  ],
  routes: [
    {
      path: '/subApp1',
      microApp: 'microApp1',
      microAppProps: {
        autoSetLoading: true,
        autoCaptureError: true,
        // loader: (loading: boolean) => <MicroAppLoading loading={loading} />,
      },
    },
    {
      path: '/subApp2',
      microApp: 'microApp2',
      microAppProps: {
        autoSetLoading: true,
        autoCaptureError: true,
      },
    },
    // {
    //   path: '/cloud-web-console',
    //   microApp: 'microCloudWebConsole',
    //   microAppProps: {
    //     autoSetLoading: true,
    //     autoCaptureError: true,
    //     wrapperClassName: 'micro-cloud-web-console-wrapper',
    //   },
    // },
    // {
    //   path: '/cbdb',
    //   microApp: 'microCBDB',
    //   microAppProps: {
    //     autoSetLoading: true,
    //     autoCaptureError: true,
    //   },
    // },
  ],
  lifeCycles: {
    // 所有子应用在挂载完成时，打印 props 信息
    async afterMount(props) {
      console.log('主应用挂载完成', props);
    },
  },
};
