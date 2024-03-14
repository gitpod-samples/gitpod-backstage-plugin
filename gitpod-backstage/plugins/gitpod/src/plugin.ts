import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const GitpodPlugin = createPlugin({
  id: 'gitpod',
  routes: {
    root: rootRouteRef,
  },
});

export const Gitpod = GitpodPlugin.provide(
  createRoutableExtension({
    name: 'Gitpod',
    component: () =>
      import('./components/GitpodButton').then(m => m.GitpodButton),
    mountPoint: rootRouteRef,
  }),
);
