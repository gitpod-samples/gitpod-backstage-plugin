# Gitpod Backstage Demo

This repository contains a demo of a Backstage instance that includes the Gitpod Backstage plugin. The Gitpod plugin allows users to easily launch a workspace directly from Backstage.

## Getting Started

To get started with this demo, follow the steps below:

1. Open the project in Gitpod by clicking the following link: [Open in Gitpod](https://gitpod.io/#/workspace/gitpod-backstage-plugin)
2. Once the Backstage instance is running, you can create a new app or add an existing `catalog-info.yml` file.
3. After importing the app or catalog, navigate to the respective page.
4. On the component page, you will find an "Open in Gitpod" button. Click on it to launch a cloud development environment.

That's it! You can now explore the Gitpod Backstage plugin and its features.

## Changing the Gitpod Deployment URL

In your `app-config.yml` file, add the following line:
```
gitpod:
  baseUrl: 'https://gitpod.io/'
```
This is where you can configure what Gitpod deployment model you want to use (e.g. Gitpod Cloud, or Dedicated).

## Displaying the Gitpod plugin

Once the plugin is installed, remember to add the GitpodButton component typically where you display information about your services or components. For example, in `EntityPage.tsx`:

```
import { GitpodButton } from '@internal/backstage-plugin-gitpod';

// Add <GitpodButton /> where it makes sense in your UI
```

In our demo, we’ve implemented it in the Overview Content component so that it shows in the overview section:

```
const overviewContent = (
 <Grid container spacing={3} alignItems="stretch">
   {entityWarningContent}

   <Grid item md={6}>
     <EntityAboutCard variant="gridItem" />
   </Grid>
   <Grid item md={6}>
     <GitpodButton />
   </Grid>
   <Grid item md={6} xs={12}>
     <EntityCatalogGraphCard variant="gridItem" height={400} />
   </Grid>

   <Grid item md={4} xs={12}>
     <EntityLinksCard />
   </Grid>
   <Grid item md={8} xs={12}>
     <EntityHasSubcomponentsCard variant="gridItem" />
   </Grid>
  
 </Grid>
);
```
