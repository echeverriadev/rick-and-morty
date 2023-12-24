/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    main: `main@${process.env.URL_APP_MAIN}/_next/static/${location}/remoteEntry.js`,
  };
};
const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "rickAndMorty",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(options.isServer),
        exposes: {},
        extraOptions: {
          exposePages: true,
        },
        shared: ['styled-components']
      })
    );
    return config;
  },
};

module.exports = nextConfig;
