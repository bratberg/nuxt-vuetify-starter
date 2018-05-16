{{#alacarte}}
const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)
{{/alacarte}}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{ description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
      // 在国内，建议使用 https://fonts.cat.net/  替换
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [ '@nuxtjs/apollo' ],
	apollo: {
		clientConfigs: {
			default: '~/graphql/apollo-client.js'
		}
	},
  /*
  ** Build configuration
  */
  build: {
    {{#alacarte}}
    babel: {
      plugins: [
        ["transform-imports", {
          "vuetify": {
            "transform": "vuetify/es5/components/${member}",
            "preventFullImport": true
          }
        }]
      ]
    },
    {{/alacarte}}
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    extend (config, ctx) {
      {{#alacarte}}
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
      {{/alacarte}}
    }
  }
}
