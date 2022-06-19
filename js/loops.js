function luahHaKefel() {
  const maxRow = 10;
  const maxCol = 10;

  /* init variables;condition to continue the loop; command */
  for (let row = 1; row <= maxRow; row++) {
    for (let col = 1; col <= maxCol; col++) {
      // console.log("row: " + row + ", col: " + col);
      console.log(row + " • " + col + " = " + row * col);
    }
  }
}

// luahHaKefel();

function fibunachi() {
  const max = 10;
  let number1 = 0,
    number2 = 1,
    sum;
  for (let index = 1; index <= max; index++) {
    console.log(number1);
    sum = number1 + number2;
    number1 = number2;
    number2 = sum;
  }
}

// fibunachi();

function runningNumbers() {
  const max = 100;
  for (let number = 1; number <= max; number++) {
    //number++ => number = number + 1
    console.log(number);
  }
}

// runningNumbers();

function whileLoopForever() {
  //! do not try this at home!!!!
  //! this loop will never stop!!!!
  //! do this at your own risk!!!!
  //! attempt it only be highly trained programmers!!!!
  while (1 == 1) {}
}
// whileLoopForever();

function whileLoop() {
  let index = 0;
  const max = 100;
  while (index <= max) {
    console.log(index);
    index += 2;
  }
}
// whileLoop();

function primeNumbers() {
  //1, 2, 3, 5, 7, 11, 13...
  const max = 100;
  for (let index = 1; index <= max; index++) {
    let index2 = 2;
    let notPrime = 1;
    while (index2 < index) {
      if (index % index2 == 0) {
        notPrime = 0;
      }
      index2++;
    }
    if (notPrime == 1) {
      console.log(index);
    }
  }
}
primeNumbers();
