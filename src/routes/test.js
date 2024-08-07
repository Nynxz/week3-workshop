module.exports = {
  route: (app, req, res) => {
    res.sendFile("./src/www/test.html", { root: "./" });
  },
};
