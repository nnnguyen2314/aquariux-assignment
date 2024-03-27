/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(new webpack.EnvironmentPlugin(process.env));
        return config;
    }
};

export default nextConfig;
