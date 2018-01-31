//object notation
var obj  =  {} // this is empty object

var obj2 = {prop1 :"this is contains string" } // this is object with props

var obj3 = {method:function(){return "string"}}

console.log(obj3) //dumping entire object
console.log(obj2.prop1) // printing property of an object
console.log(obj3.method()) // calling method of an object

//Dynamic assignment of object properties

var dObj = {};
dObj.dynamicProps = "this is string assigned on go";
dObj.dynamicMethod = function(){return "dynamic string";};
console.log(dObj.dynamicProps);
console.log(dObj.dynamicMethod());

//Assiging object property usign array notation

var key = 'prop2';

dObj[key] = "this is string from array"
console.log(dObj);
console.log(dObj[key])
console.log(dObj.prop2)


//constructor pattern
console.log('---------------------------------------------');
var intVar = 5; //primitives
var funcVar = function(){
  this.a = 5;
  return "string"
}; //object
// var objVar = {} //object

console.log(new funcVar());
// console.log(objVar);


// prototype pattern
var func = function(){}
var obj = {}
var arr = []
console.log('---------------------------------------------');
console.log(func.__proto__.__proto__);
console.log(obj.__proto__.__proto__);
console.log(arr.__proto__.__proto__);
