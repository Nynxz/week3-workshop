module.exports = {
  route: (app, req, res) => {
    res.sendFile("./src/www/index.html", { root: "./" });
  },
};
