import React from 'react';
import { useEntity } from '@backstage/plugin-catalog-react';
import { Button } from '@material-ui/core';

export const ExampleComponent = () => {
  const { entity } = useEntity();

  const repoUrl = entity.metadata.annotations?.['github.com/project-slug'];
  const gitpodUrl = `https://gitpod.io/#https://github.com/${repoUrl}`;

  return (
    <Button
      variant="contained"
      color="primary"
      href={gitpodUrl}
      target="_blank"
    >
      Open in Gitpod
    </Button>
           
    );
};

 

