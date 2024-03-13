import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { GitpodPlugin, GitpodPage } from '../src/plugin';

createDevApp()
  .registerPlugin(GitpodPlugin)
  .addPage({
    element: <GitpodPage />,
    title: 'Root Page',
    path: '/gitpod'
  })
  .render();
