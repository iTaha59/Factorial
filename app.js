// FACTORIAL

var count = 1;
function factorial(num){
  for(var i=1; i<=num; i++){
    count *= i
  }
  return alert(count)
}

factorial(prompt("Enter a number to find its factorial"))