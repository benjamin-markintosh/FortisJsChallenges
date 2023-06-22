//1. WriteafunctionnamedfizzBuzzthattakesintwo(2)parameterswhich are expected to be strings. The function should return the string Fizz if the combined length of the parameters is divisible by 3, the string Buzz if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and 3.//

function fizzBuzz(a, b) {
  const c = a.length + b.length;
  if (c % 3 == 0 && c % 5 == 0) {
    return "FizzBuzz";
  } else if (c % 3 == 0) {
    return "Fizz";
  } else if (c % 5 == 0) {
    return "Buzz";
  }
}

//using arrow functions

fizzBuzz = (a, b) => {
  const c = a.length + b.length;
  if (c % 3 == 0 && c % 5 == 0) {
    return "FizzBuzz";
  } else if (c % 3 == 0) {
    return "Fizz";
  } else if (c % 5 == 0) {
    return "Buzz";
  }
};

/*1. Writea
function
namedfizzBuzz
thattakesintwo(2)parameters
which are expected to be strings. 
The function should return the string Fizz
 if
  the combined length of the parameters is divisible by 3,
 the string Buzz if it is divisible by 5, 
 and the string FizzBuzz if it is divisible by both 5 and 3.


function fizzBuzz(param1, param2){
const sumLength = param1.length + param2.length;
    if(sumLength % 3 == 0){
        return 'Fizz';
    }else if(sumLength % 5 == 0){
        return 'Buzz';
    }else if(sumLength  % 3 == 0 && sumLength % 5 == 0){
        return 'FizzBuzz';
    }

}


'3' === 3

fizzBuzz("boy","girl")



function fortis(a,b){
return "Boy"
}


fortis = (a,b) => {return "Boy"}



const fortis = a => {return "Boy"}

*/
