const a = 5;
const StringTonum = a.toString();
console.log("Using toString() the datatype of a is : ", typeof StringTonum);

const StringTonum2 = String(a);
console.log("Using String cast the datatype of a is : ", typeof StringTonum2);

const StringTonum3 = "" + a;
console.log("Using empty string the datatype of a is : ", typeof StringTonum3);
