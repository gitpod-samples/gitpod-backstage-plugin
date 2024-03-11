import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const myPluginPlugin = createPlugin({
  id: 'gitpod',
  routes: {
    root: rootRouteRef,
  },
});

export const MyPluginPage = myPluginPlugin.provide(
  createRoutableExtension({
    name: 'MyPluginPage',
    component: () =>
      import('./components/GitpodButton').then(m => m.GitpodButton),
    mountPoint: rootRouteRef,
  }),
);
