{{#alacarte}}
const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)
{{/alacarte}}

module.exports = {
    // Headers of the page
    head: {
        title: 'toollibary-nuxt',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'A smart tool management library for the manufacturing shops of the future' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
        ]
    },
    plugins: ['~/plugins/vuetify.js'],
    css: [
        '~/assets/style/app.styl',
    ],

    // Customize the progress bar color
    loading: { color: '#3B8070' },

    // Build configuration
    build: {
        {{#alacarte}}
        babel: {
            plugins: [
                ["transform-imports", {
                    "vuetify": {
                        "transform": "vuetify/es5/components/${member}",
                        "preventFullImport": true
                    },
                }],
            ],
        },

        {{/alacarte}}
        vendor: ['~/plugins/vuetify.js'],

        extractCSS: true,
        // cssSourceMap: false, // fixes 404 error

        // Run ESLint on save
        extend (config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
            {{#alacarte}}
            if (ctx.isServer) {
                config.externals = [
                    nodeExternals({
                        whitelist: [/^vuetify/]
                    }),
                ];
            }
            {{/alacarte}}
        }
    }
}
