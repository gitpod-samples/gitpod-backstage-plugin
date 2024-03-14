# Gitpod Backstage Plugin

This is the official Backstage plugin for Gitpod. It integrates Gitpod's cloud development environments directly into Spotify's Backstage, allowing developers to manage and interact with Gitpod workspaces directly from their Backstage instance. This plugin aims to streamline the development workflow, making it easier for teams to access and manage their cloud-based development environments.

## Getting started

To get started with the Gitpod plugin in your Backstage app, follow these installation steps:

1. **Install the plugin**:

```bash
# From your Backstage root directory
yarn add --cwd packages/app @gitpod-io/backstage-plugin-gitpod
```

2. **Add the `/gitpod` route to your `App.tsx`**:

```tsx
// In packages/app/src/App.tsx
import { Gitpod } from '@backstage/plugin-gitpod';

const AppRoutes = () => (
  <FlatRoutes>
    {/* Other routes */}
    <Route path="/gitpod" element={<Gitpod />} />
  </FlatRoutes>
);
```

3. **Add the Gitpod component to a page in your app:**

```
import { GitpodButton } from '@gitpod-io/backstage-plugin-gitpo';
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

## Links

- [Backstage](https://backstage.io)
- [Gitpod](https://www.gitpod.io)
- [Learn more about Backstage plugins](https://backstage.io/docs/plugins/)

## Contributing

We welcome contributions to the Gitpod Backstage plugin! Feel free to leave issues with feature requests or raise a pull request.