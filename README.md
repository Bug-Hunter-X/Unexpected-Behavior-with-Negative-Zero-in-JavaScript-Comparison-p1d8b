# Unexpected Behavior with Negative Zero in JavaScript Comparison

This repository demonstrates a subtle bug in JavaScript related to the handling of negative zero (-0).  JavaScript's loose comparison (`==`) treats 0 and -0 as equal, but its strict comparison (`===`) distinguishes between them.  This difference can lead to unexpected behavior in functions that aren't explicitly designed to handle negative zero.

The `bug.js` file contains a function `foo` that incorrectly handles negative zero. The `bugSolution.js` file provides a corrected version.  This example highlights the importance of carefully considering how your code handles edge cases like negative zero, especially when dealing with numerical computations or comparisons.