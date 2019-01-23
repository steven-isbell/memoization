# Memoization

Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

For memoization to be valuable, it's important that we are writing pure functions. At it's most basic, a pure function is a function that, given an input, will always return the same output. E.g add(2, 2) should always return 4 no matter how many times I call it. This works well with memoization because we would expect that the cached arguments would generate the same result every time. If add(2, 2) randomly returned 5, we would not be able to cache that value with certainty.

Memoization is a common practice across the JavaScript ecosystem. Here, I'll highlight common use cases in JavaScript, as well as React.
