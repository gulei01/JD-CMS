module.exports = ({ env }) => {
  return {
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: env("NETLIFY_TOKEN"),
        sites: [
          {
            name: env("NETLIFY_DEPLOY_NAME"),
            id: env("NETLIFY_DEPLOY_ID"),
            buildHook: env("NETLIFY_BUILD_HOOK"),
            branch: env("NETLIFY_DEPLOY_BRANCH"),
          },
        ],
      },
    },
    "duplicate-button": true,
    "strapi-plugin-populate-deep": {
      config: {
        defaultDepth: 10, // Default is 5
      },
    },
    "drag-drop-content-types": {
      enabled: true,
      // resolve: "./src/plugins/drag-drop-content-types",
    },
    seo: {
      enabled: true,
    },
    oembed: {
      enabled: true,
      resolve: "./src/plugins/strapi-plugin-oembed",
    },
    upload: {
      config: {
        breakpoints: {
          small: 750,
        },
        providerOptions: {
          localServer: {
            maxage: 31536000 * 4,
          },
        },
      },
    },
  };
};
