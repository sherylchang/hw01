"use strict";

window.builtins = {};

// In this exercise, we'll be recreating some common JavaScript built-in
// functions such as contains() and trim() using the skills we already know.

// For a reference to all JavaScript built-in objects and functions,
// check out this MDN reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// ----------------------------------------------------------------------------

// Exercise 1. trim() using loops and conditionals

// Write a function that takes a string and returns the same string without
// leading and trailing spaces.

// ex. builtins.trim('  Horizons  ') -> 'Horizons'
// ex. builtins.trim('Hello World!    ') -> 'Hello World!'

builtins.trim = function(str) {
  // let newStr = "";
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] !== " ") {
  //     newStr += str[i];
  //   }
  // }
  // return newStr;
  let i = 0;
  let j = str.length - 1;
  while (str[i] == " ") {
  	i += 1;
  }
  while (str[j] == " ") {
  	j -= 1;
  }
  return str.slice(i, j+1)
};

// ----------------------------------------------------------------------------

// Exercise 2. contains() using indexOf()

// Write a function that takes a string to be searched and a string to
// search for, returning true or false as to whether or not the latter
// was found in the source string.

// ex. builtins.search('Horizons', 'o') -> true
// ex. builtins.search('Horizons', 'oz') -> false
// ex. builtins.search('rizo', 'Horizons') -> false
// ex. builtins.search('', 'Horizons') -> false
// ex. builtins.search('Horizons', '') -> true
// ex. builtins.search('Horizons', 'h') -> false

builtins.search = function(sourceString, searchString) {
  // if (searchString.indexOf(sourceString)) {
  //   return true;
  // } else {
  //   return false;
  // }
  let n = sourceString.indexOf(searchString);
  if (((n) && (n !== -1)) || (n === 0)) {
    return true;
  } else {
    return false;
  }
};

// ----------------------------------------------------------------------------

// Exercise 3. Rewriting reverse()

// Write a function that takes an array and returns the array in reversed order
// (by indices).

// ex. builtins.reverse([1, 2, 3]) -> [3, 2, 1]
// ex. builtins.reverse(['dogs', 'cats', 'moose']) -> ['moose', 'cats', 'dogs']
// ex. builtins.reverse([]) -> []
// ex. builtins.reverse([123]) -> [123]

builtins.reverse = function(arr) {
	if (arr === undefined || arr.length == 0) {
    	return arr;
	} else if (arr.length === 1) {
		return arr;
	} else {
  		let next = [arr.shift()];
  		return builtins.reverse(arr).concat(next);
	}
  // let next = arr.unshift();
  // return builtins.reverse(arr).concat(next);
};
