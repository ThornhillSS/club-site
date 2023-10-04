// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    reactStrictMode: true,
    experimental: {
        forceSwcTransforms: true,
    },
});