// Basic Memoization function
// It takes in a function memoize
const memoize = func => {
  // Here we'll cache the arguments that we used in the passed in function
  // as well as the value those arguments output
  let cache = {};
  // We'll wrap the cache in a closure so we can track it's state between calls
  return function() {
    // Create a string of our passed in arguments that we'll compare new arguments
    // against to see if they're in our cache
    // Check this -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    const key = JSON.stringify(arguments);
    // If the value has been calculated for the given arguments
    // Don't recalculate, just grab the value
    if (cache[key]) {
      console.log('pulling from cache');
      return cache[key];
    }
    // otherwise, calculate
    console.log('calculated');
    // .apply will immediately invoke the function with the passed in arguments
    // and return the result
    const val = func.apply(this, arguments);
    // We then set the result in the cache at the key
    // which represents our passed in arguments
    cache[key] = val;
    // Then return the value
    return cache[key];
  };
};

// A basic function that adds two numbers
const newAddFunction = memoize((num1, num2) => num1 + num2);

newAddFunction(1, 2); // calculated
newAddFunction(1, 2); // pulling from cache
newAddFunction(1, 3); // calculate
newAddFunction(1, 3); // pulling from cache

// An expensive recursive function. We keep calling the memoized version
// of the function over and over again until we reach the result.
// The cache will store each result of the called function, meaning we don't have
// to recalculate everytime we recall the fibMemo function
const fibMemo = memoize(n => (n < 2 ? 1 : fibMemo(n - 2) + fibMemo(n - 1)));

fibMemo(5);
// calculated with 5
// calculated with 3
// calculated with 1
// calculated with 2
// calculated with 0
// pulling from cache with 1
// calculated with 4
// pulling from cache with 2
// pulling from cache with 3
fibMemo(5); // entire sequence has already been cached, no calculation
fibMemo(6); // calculated with 6, 5 and below were pulled from the cache

// Because fibonacci will examine some numbers more than once,
// we can retrieve the values that have already been calculated from the cache.
// For more on fibonacci https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
