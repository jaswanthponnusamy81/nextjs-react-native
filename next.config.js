const path = require('path');
const {withGluestackUI} = require('@gluestack/ui-next-adapter');

module.exports = withGluestackUI({
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FID'],
  },
  webpack: config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };

    config.resolve.extensions = ['.web.js', '.js', '.jsx', '.ts', '.tsx'];
    return config;
  },
  transpilePackages: [
    'nativewind',
    'react-native-css-interop',
    'react-native',
    'react-native-web',
    'react-native-safe-area-context',
  ],
});
