const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log(123);
  app.use(
    '/api', // Проксируем запросы, начинающиеся с /api
    createProxyMiddleware({
      target: 'http://localhost:3002', // Адрес вашего бэкенда
      changeOrigin: true,
    })
  );
};