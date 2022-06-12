console.log("Hello world!");
// alert("Hello world!");
console.log(1 + 1); // calculate 1+1
console.log("1 + 1"); // js think that this is a string
//and js will display 1+1 as is

let x = 5; //define new variable and name it x
let y = 3; //define new variable and name it y
console.log(x + y);

let sum = x + y;
//sum = 8 + 1;
sum = sum + 1;
console.log(sum);
/*
    x = 5 //7
    y = 3 //8
    sum = 8 //11
    sum = 9 //12
*/

function calcAndDisplay(a, b) {
  let sumOfAAndB = a + b;
  console.log(sumOfAAndB);
}

calcAndDisplay(5, 6);

function calcAndReturnToMe(a, b) {
  let sumOfAAndB = a + b;
  return sumOfAAndB;
}

console.log(calcAndReturnToMe(10, 20) + 5);

// 1) calcAndReturnToMe(10, 20) => 30
// 2) 30 + 5 => 35
// 3) console.log(35)
