function handleBtnClick() {
  console.log("you pressed the button");
  let emailValue = document.getElementById("emailInput").value;
  let passwordValue = document.getElementById("passwordInput").value;
  if (emailValue == "1@2.com") {
    console.log("your email in our system");
    if (passwordValue == "1") {
      console.log("your email and password are correct");
    } else {
      console.log("password invalid");
    }
  } else {
    console.log("email invalid");
  }
}
