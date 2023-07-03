import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.san-kp.app',
  appName: 'san-kp',
  webDir: '../../dist/apps/san-kp',
  server: {
    androidScheme: 'https',
  },
};

export default config;
