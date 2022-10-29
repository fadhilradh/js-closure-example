function normalFunction() {
  let x = 0;
  x++;
}

function closureFunction() {
  let x = 0;

  function increment() {
    x++;
  }
}

let closure = closureFunction();

normalFunction();
normalFunction();

closure.increment();
