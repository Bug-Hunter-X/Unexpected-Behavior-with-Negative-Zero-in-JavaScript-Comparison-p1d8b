function foo(a, b) {
  //This will handle negative zero correctly
  if (a === 0 && b === 0) { 
    return 0; 
  }
  if (a === 0 || b === 0) { 
    return 0; 
  }
  return a + b;
}

console.log(foo(0, 1)); //Expected Output: 0
console.log(foo(1, 0)); //Expected Output: 0
console.log(foo(-0, 1)); //Expected Output: 0
console.log(foo(1, -0)); //Expected Output: 0