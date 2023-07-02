import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'san-kp',
  webDir: '../../dist/apps/san-kp',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
