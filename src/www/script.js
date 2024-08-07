console.log("Hello Script!");

$("#loginForm").on("submit", function (event) {
  console.log("Posting?");
  // Stop form from submitting normally
  event.preventDefault();

  // Send the data using post
  var req = $.post("/api/login");

  // Put the results in a div
  req.done(function (data) {
    $("#result").empty().append(data);
  });
});
