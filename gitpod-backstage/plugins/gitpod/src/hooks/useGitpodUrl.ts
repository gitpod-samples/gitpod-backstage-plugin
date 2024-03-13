import { useApi } from '@backstage/core-plugin-api';
import { configApiRef } from '@backstage/core-plugin-api';

export const useGitpodUrl = () => {
    const config = useApi(configApiRef);
    // Use getOptionalString to avoid errors if the config is missing
    const gitpodBaseUrl = config.getOptionalString('gitpod.baseUrl') || 'https://gitpod.io/';

    return gitpodBaseUrl;
};
