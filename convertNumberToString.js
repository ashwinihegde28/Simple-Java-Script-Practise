const a = 5;
const StringTonum = a.toString();
console.log("Using toString() the datatype of a is : ", typeof StringTonum);

const StringTonum2 = String(a);
console.log("Using String cast the datatype of a is : ", typeof StringTonum2);

const StringTonum3 = "" + a;
console.log("Using empty string the datatype of a is : ", typeof StringTonum3);

let numberString = a.toLocaleString();
console.log(
  "Using toLocaleStrin the datatype of a  is : ",
  typeof numberString
);

let variable_name = "${a}";
console.log(
  "Using toLocaleStrin the datatype of a  is : ",
  typeof variable_name
);
