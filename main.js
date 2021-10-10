
let num=10;
if(num%2==0){
  console.log("Even");
}
else{
  console.log("Odd");
}


// ------
let curr_year=new Date().getFullYear();
curr_year%2==0 ? console.log("Even") : console.log("Odd");

let squared= new Array(10);
for(let i=1;i<11;i++){
  squared=i**2;
}
console.log(squared);

let row =new Array(5);
for(let i=0; i<5;i++){
  row[i]=new Array(10);
  for(let j=0; j<10;j++){
    row[i][j]=(i+1)*(j+1);
  }
}console.log(row);


let x='6';
console.log((Math.log(x)/Math.log(2))%1===0);


