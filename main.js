// Q1: Switch statement
let arr = [1, 2, 3, 4, 5, 6, 7];
switch (arr) {
  case 1:
    console.log(sunday);
    break;
  case 2:
    console.log(monday);
    break;
  case 3:
    console.log(tuesday);
    break;
  case 4:
    console.log(wednesday);
    break;
  case 5:
    console.log(thursday);
    break;
  case 6:
    console.log(friday);
    break;
  case 7:
    console.log(saturday);
    break;
}

// Q2: If else statement
// a) even and odd numbers
let num = 10;
if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// b) Grading
grade = 90;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80 && grade <= 89) {
  console.log("B");
} else if (grade >= 70 && grade <= 79) {
  console.log("C");
} else if (grade >= 60 && grade <= 69) {
  console.log("D");
} else {
  console.log("F");
}

// c) Leap year
let curr_year = new Date().getFullYear();
curr_year % 2 == 0 ? console.log("Even") : console.log("Odd");
curr_year % 400 == 0 || (curr_year % 4 == 0 && curr_year % 100 != 0)
  ? console.log(curr_year + " is a leap year")
  : console.log(curr_year + " is NOT a leap year");

// Q3: For loop
// a) Fibonacci
let arr = new Array(20);
for (let i = 0; i < 20; i++) {
  if (i == 0 || i == 1) {
    arr[i] = i;
  } else {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
}
console.log(arr);

// b) square of numbers
let squared = new Array(10);
for (let i = 1; i < 11; i++) {
  squared = i ** 2;
}
console.log(squared);

// Q4: Nested for loop
// a)
let row = new Array(5);
for (let i = 0; i < 5; i++) {
  row[i] = new Array(10);
  for (let j = 0; j < 10; j++) {
    row[i][j] = (i + 1) * (j + 1);
  }
}
console.log(row);

// Q5: While loop
// a) odd number
let j = 0;
while (j <= 20) {
  if (j % 2 != 0) {
    console.log(j);
  }
  j++;
}
let num = 10;
if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// b) Power of 2
let x = "6";
console.log((Math.log(x) / Math.log(2)) % 1 === 0);
