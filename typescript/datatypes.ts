//Datatype

//Data types are used to define the type of data that can be stored in a variable.

//1)Strings:Stores text values like URL,names.

let candidateName:string = "Zubayr";
let myUrl:string = "https://www.youtube.com/watch?v=ygjBTwBSeaE&t=1266s";
console.log(candidateName);
console.log(myUrl);

//concatenation of strings

let cname:string="Zubayr";
let text:string="is learning typescript";
console.log(cname+" "+text);
let text2:string="is also learning playwright";
console.log(`${cname} ${text2}`);

//2)Numbers:Stores numeric values like age,price,quantity.

let mybirthday:number=9;
let mybirthdaymonth:number=8;
let mybirthyear:number=2001;
console.log(`${mybirthday}/${mybirthdaymonth}/${mybirthyear}`);

//3)Boolean:Stores true or false values.

let istrue:boolean=true;
let isfalse:boolean=false;
console.log(istrue);
console.log(isfalse);   

//4)Any:Stores any type of value like string,number,boolean etc.

let users:string[]=["Zubayr","Nizamuddin","Mohammed"];//Array of strings
let users2:any[]=["Zubayr","Nizamuddin","Mohammed",88,true];//tuple of any type
console.log(users[2]);
console.log(users2[3]);

let marks:Array<number>=[90,80,70,60];
// what's the difference between string[] and Array<string>?
//will check in the objects module
console.log(marks[3]);
console.log(marks.at(-3));

//5)Object:Stores key-value pairs like name,age,gender etc.

let usermarks:Array<{name:string,marks:number}>=[
    {name:"Zubayr",marks:90},
    {name:"Nizamuddin",marks:80},
    {name:"Mohammed",marks:70}
];
console.log(usermarks[1].name);
console.log(usermarks[0].marks);
