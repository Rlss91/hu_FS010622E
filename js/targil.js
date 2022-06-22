function handleCalc() {
  let n1 = document.getElementById("number1").value;
  let n2 = document.getElementById("number2").value;
  let sum = parseFloat(n1) + parseFloat(n2);
  let sum2 = parseFloat(n1) - parseFloat(n2);
  let sum3 = parseFloat(n1) * parseFloat(n2);
  let sum4 = parseFloat(n1) / parseFloat(n2);
  console.log(n1 + " + " + n2 + " = " + sum);
  console.log(n1 + " - " + n2 + " = " + sum2);
  console.log(n1 + " * " + n2 + " = " + sum3);
  console.log(n1 + " / " + n2 + " = " + sum4);
}
