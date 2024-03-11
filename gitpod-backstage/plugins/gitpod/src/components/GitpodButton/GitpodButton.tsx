import React from 'react';
import { useEntity } from '@backstage/plugin-catalog-react';
import { Button, Typography, Link } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';

export const GitpodButton = () => {
  const { entity } = useEntity();

  // Attempt to retrieve the repository URL from annotations
  const githubRepo = entity.metadata.annotations?.['github.com/project-slug'];
  const gitlabRepo = entity.metadata.annotations?.['gitlab.com/project-slug'];
  const bitbucketRepo = entity.metadata.annotations?.['bitbucket.org/project-slug'];

  // Construct the Gitpod URL based on the available repository information
  let gitpodUrl = '';
  if (githubRepo) {
    gitpodUrl = `https://gitpod.io/#https://github.com/${githubRepo}`;
  } else if (gitlabRepo) {
    gitpodUrl = `https://gitpod.io/#https://gitlab.com/${gitlabRepo}`;
  } else if (bitbucketRepo) {
    gitpodUrl = `https://gitpod.io/#https://bitbucket.org/${bitbucketRepo}`;
  }

  const repoUrl = githubRepo || gitlabRepo || bitbucketRepo;

  return (
    <InfoCard title="Gitpod">
      <Typography variant="body2" gutterBottom>
        Quickly set up your development environment with <strong><a href={gitpodUrl} target="_blank" rel="noopener noreferrer">Gitpod</a>.</strong>
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
      {!repoUrl ? (
        <Typography variant="body2" color="error" style={{ marginTop: '16px' }}>
          You must configure a repository URL in your catalog file for this plugin to work. <Link href="https://link-to-docs" target="_blank" rel="noopener noreferrer">Read docs</Link>.
        </Typography>
      ) : null}
    </InfoCard>
  );
};
