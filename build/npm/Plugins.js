const Plugins = [
  {
    from: 'node_modules/jquery/dist/',
    to: 'public/plugins/jquery'
  },
  {
    from: 'node_modules/bootstrap/dist/',
    to: 'public/plugins/bootstrap'
  },
  {
    from: 'node_modules/swiper/',
    to: 'public/plugins/swiper',
    filter: [
      'node_modules/swiper/*.min.{js,css}',
    ]
  },
  
]

module.exports = Plugins
