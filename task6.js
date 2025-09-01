const prompt = require("prompt-sync")();
let lineas = prompt("Ingresa hasta que numero quieres que se haga el juego:")
let lista=[];
for (let i = 1; i <= lineas; i++) {
  let output ='';
  
  if (i%3===0) {
    output += 'Fizz'}
  if (i%5===0){
    output+= "Buzz"}
  if(i%7===0){
    output+="Woof"
  }
  if(output !== ""){
    lista.push(output)
    
  } else{
    lista.push(i)
    
  }
  

  };
console.log(lista);
