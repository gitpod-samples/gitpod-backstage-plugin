import React from 'react';
import { useEntity } from '@backstage/plugin-catalog-react';
import { Button, Typography } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';

export const ExampleComponent = () => {
  const { entity } = useEntity();

  const repoUrl = entity.metadata.annotations?.['github.com/project-slug'];
  const gitpodUrl = `https://gitpod.io/#https://github.com/${repoUrl}`;

  return (
    <InfoCard title="Gitpod">
      <Typography variant="body2" gutterBottom>
        Quickly set up your development environment with <a href={gitpodUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Gitpod</a>.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href={gitpodUrl}
        target="_blank"
        disabled={!repoUrl}
      >
        Open in Gitpod
      </Button>
    </InfoCard>
  );
};
