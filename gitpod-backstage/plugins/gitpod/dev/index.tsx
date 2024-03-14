import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { GitpodPlugin, Gitpod } from '../src/plugin';

createDevApp()
  .registerPlugin(GitpodPlugin)
  .addPage({
    element: <Gitpod />,
    title: 'Root Page',
    path: '/gitpod'
  })
  .render();
