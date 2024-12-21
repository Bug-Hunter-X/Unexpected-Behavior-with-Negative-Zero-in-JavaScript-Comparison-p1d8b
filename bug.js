function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; //This will cause unexpected behavior if either 'a' or 'b' is negative zero
  }
  return a + b;
}

console.log(foo(0, 1)); //Expected Output: 0
console.log(foo(1, 0)); //Expected Output: 0
console.log(foo(-0, 1)); //Actual Output: 1, Expected Output: 0
console.log(foo(1, -0)); //Actual Output: 1, Expected Output: 0