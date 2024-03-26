# Gitpod Backstage Plugin

The Gitpod Backstage Plugin is the official integration of Gitpod's cloud development environments into Spotify's Backstage. 

It enables developers to start workspaces directly from their Backstage instance. This plugin aims to streamline the development workflow, providing teams with easy access and efficient management of their cloud development environments.

## Getting started

To get started with the Gitpod plugin in your Backstage app, follow these steps:

1. **Install the plugin**:

```bash
# From your Backstage root directory
yarn add --cwd packages/app @gitpod-io/backstage-plugin-gitpod
```

2. **Add the Gitpod component to a page in your app:**

```jsx 
import { GitpodButton } from '@gitpod-io/backstage-plugin-gitpod';
//....
const HomePage = () => (
    // ...
      <Grid item md={3} xs={6}>
          <GitpodButton />
      </Grid>
    // ... 
);
```

4. **Configure the Gitpod URL**:

Add your Gitpod URL to your `app-config.yaml` - this can either be Gitpod Cloud or Dedicated.

```yaml
gitpod:
  baseUrl: 'https://gitpod.io'
```

## Contributing

We welcome contributions to the Gitpod Backstage plugin! If you have any feature requests or would like to raise a pull request, please feel free to leave an issue.

## Links

- [Gitpod](https://www.gitpod.io)
- [Internal Developer Portals and Gitpod](https://www.gitpod.io/docs/integrations/internal-developer-portals)
- [Backstage](https://backstage.io)
- [Learn more about Backstage plugins](https://backstage.io/docs/plugins/)
