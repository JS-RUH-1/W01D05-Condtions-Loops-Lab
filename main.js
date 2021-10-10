
// Lab 1 JS 10/10/2021 Abdulalam Aldawari
// Task  1  Switch 
let day = 7 ;
switch (day){
  case  1:
        console.log("Saturday");
        break;
  case  2:
        console.log("Sunday");
        break;
  case  3:
        console.log("Monday");
          break;
  case  4:
        console.log("Tuesday");
        break;
  case  5 :
  console.log("Wednesday")
        break;
  case  6 :
  console.log("Thursday")
        break;
  case  7 :
  console.log("Friday")
        break;
    
        default:
         console.log("Please Choos a number between 1-7");
}
// Task  2 if/else 
// Task  2.0  even/odd
let evenOdd = 11;

if(evenOdd %2 ==0)
  console.log("i am even")
else{
   console.log("i am Odd")
}
// Task 2.1 Grade check 
let grade = 100;
if(grade>=90)
  console.log("A")
else if (grade>=80)
  console.log("B")
else if (grade>=70)
  console.log("C")
else if (grade>=60)
  console.log("D")
else{
   console.log("F")
}
// Task 2.1 Leep Year
let year = 2008
 // check if it even of odd
  if(year %2 ==0)
    console.log("year is even")
    else{
       console.log("year is Odd")
    }
 
 if ((year % 4 == 0 ) && (year % 100 != 0  ) || (year % 400 == 0)) 
        console.log(year +  " is a leap year");
     else {
        console.log(year +  " is not a leap year");
    }


// Task 3.1  Fibonacci sequence:
let num1 = 0, num2 = 1, sum;

for (let i = 1; i <= 20; i++) {
    console.log(num1);
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  
  
}
// 3.2 squares of numbers
let number=0;
for(let i =1;i<=10;i++){
  number = i;
  console.log(`The square of ${number}  = ${i*i}`);
     
}
// 3,3 Nested Lopps - Multiplaction Tabel 
let result = 0;
for(let i =1;i<=5;i++){
  for(let j =1;j<=i;j++){
    result = j * i;
    console.log(`${i}  X  ${j} = ${result}`);
  }   
}

// 3,3 While Lopp - Odd Numbers
let counter = 1;

while(counter<=20){
  if(counter %2 !=0)
    console.log(counter);
    counter++; 
}
  // 3,4 While Lopp - power of 2
  let n=100;
  while(n != 1)
  {
      n = n/2;

      if(n%2 != 0 && n != 1)
      {console.log("0") }
  }
  
  if(n==1){
    console.log("True");
  }
  






  

















