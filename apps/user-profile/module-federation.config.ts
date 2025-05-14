import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'user-profile',

  exposes: {
    './Module': './src/app/app.tsx',
  },
};

export default config;
