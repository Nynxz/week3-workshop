module.exports = {
  route: (app, req, res) => {
    res.sendFile("./src/www/account-page.html", { root: "./" });
    return "<h1>Home</h1> <a href='/test'> Test </a>";
  },
};
