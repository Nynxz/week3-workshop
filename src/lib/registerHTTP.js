export function registerHTTP(method, endpoint, router, callback) {
  console.log(`++ (${method.toUpperCase()}) ${endpoint}`);
  router[method](endpoint, (req, res) => {
    callback(req, res);
  });
}
