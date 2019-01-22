// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function simpleClosure(name){
  console.log(`what up ${name}!`)
  function cheeseAndCrackers(apple){
    console.log(`cool ${name}, wanna ${apple} later?`)
    function peanutButterandJelly(bread){
      console.log(`no? ok ${name}, see ya later ${bread}.`)
    }
  }
}



// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  const anotherCounter = counter();
  anotherCounter();
  anotherCounter();
  anotherCounter();
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
