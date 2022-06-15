function handleSubmit(ev) {
  ev.preventDefault(); //stop refresh
  let firstname = document.getElementById("nameInput").value;
  let lastname = document.getElementById("lastNameInput").value;
  let age = document.getElementById("ageInput").value;
  let area = document.getElementById("areasInput").value;
  let price;
  const basePrice = 1000;
  const maam = 1.17;
  console.log("your name is: " + firstname);
  console.log("your lastname is: " + lastname);
  console.log("your age is: " + age);
  if (area == "South") {
    price = basePrice * maam;
  }
  if (area == "Center") {
    price = basePrice * 1.5 * maam;
  }
  if (area == "North") {
    price = basePrice * 1.2 * maam;
  }
  if (area == "Lowland") {
    price = basePrice * 1.3 * maam;
  }
  //   switch (area) {
  //     case "South":
  //       price = basePrice * maam;
  //       break;
  //     case "Center":
  //       price = basePrice * 1.5 * maam;
  //       break;
  //     case "North":
  //       price = basePrice * 1.2 * maam;
  //       break;
  //     case "Lowland":
  //       price = basePrice * 1.3 * maam;
  //       break;
  //   }
  console.log("you have to pay: " + price);
  let alertMsg = "your name is: " + firstname;
  alertMsg += "\nyour lastname is: " + lastname; // alertMsg = alertMsg + "your lastname is: " + lastname;
  alertMsg += "\nyour age is: " + age;
  alertMsg += "\nyou have to pay: " + price;
  alert(alertMsg);
}
