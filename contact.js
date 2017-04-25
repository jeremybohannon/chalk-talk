// When the document is ready..
$(document).ready(function(){

  //Get cookie and store it in a variable
  var string = document.cookie;

  //Get index of name to see if a cookie exists
  var nameIndex = string.indexOf("name")
  if(nameIndex !== -1){
    //If the name exists then extract the name
    var endingNameIndex = string.indexOf("?name");
    var name = string.substr(nameIndex + 5, endingNameIndex - nameIndex - 5);
    //Repalce the placeholder with the known name
    $("#name").val(name);
    console.log("Cookie Name: " + name);
  }

  //Get index of email to see if a cookie exists
  var emailIndex = string.indexOf("email");
  if(emailIndex !== -1){
    //If the email exists then extract the email
    var endingEmailIndex = string.indexOf("?email")
    var email = string.substr(emailIndex + 6, endingEmailIndex - emailIndex - 6);
    //Repalce the placeholder with the known email
    $("#email").val(email);
    console.log("Cookie Email: " + email);
  }

  //When the user clicks the button
  $('#submit').click(function(){
    //Store the data in a variable
    var name = "name = " + $("#name").val() + "?name";
    var email = "email = " + $("#email").val() + "?email";

    //Store the variables in the cookie
    document.cookie = name;
    document.cookie = email;
  });
  //Log the cookies
  console.log("Current Cookie: " + document.cookie);
})
