import 'dotenv/config';

const isProd = process.env.APP_ENV === 'production';
const isPreview = process.env.APP_ENV === 'preview';

export default {
  expo: {
    name: 'GutterPro',
    slug: 'gutterpro',
    owner: 'pat_indy', // optional but helps with EAS linking
    version: '1.0.0',
    runtimeVersion: { policy: 'appVersion' },
    sdkVersion: '53.0.0',
    platforms: ['ios', 'android', 'web'],
    assetBundlePatterns: ['**/*'],

    updates: {
      url: 'https://u.expo.dev/b24ce4fc-95d7-4dbc-9758-e82404b50c0f',
      fallbackToCacheTimeout: 0,
    },

    extra: {
      eas: {
        projectId: 'b24ce4fc-95d7-4dbc-9758-e82404b50c0f',
      },
      apiUrl: isProd
        ? 'https://api.gutterpro.com'
        : isPreview
        ? 'https://preview-api.gutterpro.com'
        : 'http://localhost:3000',
    },

    android: {
      package: 'com.gutterpro.app',
      versionCode: 1,
      permissions: ['INTERNET', 'ACCESS_NETWORK_STATE'],
    },

    ios: {
      bundleIdentifier: 'com.gutterpro.app',
      buildNumber: '1.0.0',
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },

    web: {
      favicon: './assets/favicon.png',
    },
  },
};
