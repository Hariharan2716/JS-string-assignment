// JS Strings.

let string = "I am a";
let string2 = "Kalvian";
console.log(string + " "+ string2) ;

// challenge 2:

let raise = 'If you fail, never give up because FAIL means "First Attempt In Learning".';

// challenge 3:
let length = "I learn programming fast effecient, quick and smart.";
console.log(length.length);

// challenge 4:
let uppercase = "I win.";
console.log(uppercase.toUpperCase());

// challenge 5 to store string in a variable and replace the word.

let change = "I love programming";
let changed = change.replace("programming", "JavaScript programming");
console.log(changed);

// challenge 6 store a string in variable and print the string in console 3 times using repeat method.

let repeat = " I win. ";
console.log(repeat.repeat(3));

// challenge 7 store the given string in a variable and use indexOf method to find the index of "Ti";

let store = "Time and Tide wait for none";
console.log(store.indexOf("Ti"));

// challenge 8 store the given string in a variable and find whether it includes "...";

let lemon = "When life gives you lemons make lemonade";
console.log(lemon.includes("lemon"));

// challenge 9 to slice and use substring method 
let word = "You must be the change you wish to see in the world."
console.log(word.slice(15, 21));
console.log(word.substring(42, 47));