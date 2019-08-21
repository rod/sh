const pkg = require('./package')

module.exports = {
  mode: 'spa',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
  },
  css: [
    '@/assets/styles/main.css',
  ],
  loading: { color: '#000' },
  build: {
    extend(config, ctx) {
    }
  }
}
