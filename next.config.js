// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

const fromCWD = require('from-cwd');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// -----------------------------------------------------------------------------
// Next.js config
// @see {@link https://nextjs.org/docs/api-reference/next.config.js/introduction}
// -----------------------------------------------------------------------------

module.exports = (phase, { defaultConfig,}) => ({
    pageExtensions: ['tsx', 'ts'],
    webpack(config, { isServer }) {
        if (phase === PHASE_DEVELOPMENT_SERVER && !isServer) {
            config.plugins.push(
                new ForkTsCheckerWebpackPlugin(
                    PnpWebpackPlugin.forkTsCheckerOptions({
                        async: false,
                        typescript: {
                          useTypescriptIncrementalApi: true,
                          checkSyntacticErrors: true,
                          tsconfig: fromCWD('./tsconfig.json'),
                          reportFiles: ['**', '!**/__tests__/**', '!**/?(*.)(spec|test).*'],
                          compilerOptions: { isolatedModules: true, noEmit: true },
                          silent: true,
                        },
                        formatter: 'codeframe'
                    })
                )
            );
        }
        return config;
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/api/graphql',
          permanent: true,
        },
      ]
    }
});