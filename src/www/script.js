console.log("Hello Script!");

$("#loginForm").on("submit", function (event) {
  console.log("Posting?");
  // Stop form from submitting normally
  event.preventDefault();

  // Send the data using post
  var req = $.post("/api/login", $("#loginForm").serialize());

  // Put the results in a div
  req.done(function (data) {
    console.log(data);
    data = JSON.parse(data);
    //https://stackoverflow.com/questions/10909630/jquery-change-css-class
    if (!data.valid) {
      $("#errormsg").removeClass("hidemessage");
      $("#errormsg").addClass("showmessage");
    } else {
      $("#errormsg").removeClass("showmessage");
      $("#errormsg").addClass("hidemessage");
    }
  });
});
