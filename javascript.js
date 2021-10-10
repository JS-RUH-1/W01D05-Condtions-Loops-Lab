// task 1
let arr = [1, 2, 3, 4, 5, 6, 7];
let i = 1;

while (i <= arr.length) {
  switch (i) {
    case 1:
      console.log("Sunday");
      break;

    case 2:
      console.log("Moday");
      break;

    case 3:
      console.log("Tuesday");
      break;

    case 4:
      console.log("Wednesday");
      break;

    case 5:
      console.log("Thursday");
      break;

    case 6:
      console.log("Friday");
      break;

    case 7:
      console.log("Saturday");
      break;
  }
  i++;
}

//task 2

let num = 3;

if (num / 2 == 0) {
  console.log("even num");
} else {
  console.log("odd num");
}

//task 3

let grade = 90;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80 || grade <= 89) {
  console.log("B");
} else if (grade >= 70 || grade <= 79) {
  console.log("C");
} else if (grade >= 60 || grade <= 69) {
  console.log("D");
} else if (grade <= 59) {
  console.log("F");
}

//Task 4

let y = 2004;

if (y / 2 == 0) {
  console.log("even num");
} else {
  console.log("odd num");
}

if ((y % 4 == 0 && y % 100 !== 0) || y % 400 == 0) {
  console.log("Leap year");
}

//Task 5

let n1 = 0;
let n2 = 1;

for (let i = 1; i < 20; i++) {
  console.log(n1);
  let x = n1 + n2;
  n1 = n2;
  n2 = x;
}

// Task 5

for (let i = 0; i < 10; i++) {
  console.log(i ** 2);
}

//Task 6
for (let x = 0; x <= 5; x++) {
  console.log(x * 5);
}

//while loop

let x = 1;

while (x <= 20) {
  if (x % 2 == 0) {
    console.log("even");
  } else if (x % 2 !== 0) {
    console.log("odd");
  }
  x++;
}

//power of 2

let x = 0;

while (x <= 20) {
  if (x % 2 == 0) {
    console.log(true);
  } else {
    console.log("False");
  }

  x++;
}
