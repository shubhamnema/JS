// var multiplier2 = function(i){
//   return "2 x "+i + " = " +2*i
// }
//
// var multiplier3 = function(i){
//   return "3 x "+i + " = " +3*i
// }

var multiplerGenerator = function(n){

  return function(i){
    return n + " x "+i + " = " +n*i;
  }
}

var multiplier2 = multiplerGenerator(2);
var multiplier3 = multiplerGenerator(3);

var multiplictionTableOfTwo = function(){
   for(var i =1; i<=10; i++ ){
     console.log(multiplier2(i));
   }
}



var multiplictionTableOfThree = function(){
   for(var i =1; i<=10; i++ ){
     console.log(multiplier3(i));
   }
}

multiplictionTableOfTwo();
multiplictionTableOfThree();
