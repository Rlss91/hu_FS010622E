function handleSubmit(ev) {
  ev.preventDefault(); //stop refresh
  let firstname = document.getElementById("nameInput").value; //take the data from html and store it in variable
  let lastname = document.getElementById("lastNameInput").value; //take the data from html and store it in variable
  let age = document.getElementById("ageInput").value; //take the data from html and store it in variable
  let area = document.getElementById("areasInput").value; //take the data from html and store it in variable
  let price;
  const basePrice = 1000;
  const maam = 1.17;
  console.log("your name is: " + firstname);
  console.log("your lastname is: " + lastname);
  console.log("your age is: " + age);
  if (area == "South") {
    price = basePrice;
  }
  if (area == "Center") {
    price = basePrice * 1.5;
  }
  if (area == "North") {
    price = basePrice * 1.2;
  }
  if (area == "Lowland") {
    price = basePrice * 1.3;
  }
  if (age <= 17) {
    alert(
      "Dear " +
        firstname +
        " " +
        lastname +
        " man you are not allowed to register!"
    );
    return; //stop here the function
  }
  if (age >= 18 && age <= 39) {
    price *= 1.3; // price = price * 1.3;
  }
  if (age >= 40 && age <= 59) {
    price *= 1.2; // price = price * 1.2;
  }
  price *= maam;
  console.log("you have to pay: " + price);
  let alertMsg = "your name is: " + firstname;
  alertMsg += "\nyour lastname is: " + lastname; // alertMsg = alertMsg + "your lastname is: " + lastname;
  alertMsg += "\nyour age is: " + age;
  alertMsg += "\nyou have to pay: " + price;
  alert(alertMsg);
}
