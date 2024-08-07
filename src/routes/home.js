module.exports = {
  route: (app, req, res) => {
    res.sendFile("week3-workshop/src/www/index.html");
    return "<h1>Home</h1> <a href='/test'> Test </a>";
  },
};
