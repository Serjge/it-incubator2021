//test1

let myString = 'Hello, World!';
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

//test2

let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

//test3

let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//test4

let myString = 'freeCodeCamp';
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

//test5

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//test6

let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

//test7

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

//test8

let quoteSample =
  'Beware of bugs in the above code; I have only proved it correct, not tried it.';
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

//test9

let quoteSample = 'The quick brown fox jumps over the lazy dog.';
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//test10

let quoteSample = 'Blueberry 3.141592653s are delicious.';
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//test11

let quoteSample = '3 blind mice.';
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//test12

let difficultSpelling = 'Mississippi';
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

//test13

// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

//test14

let text = '<h1>Winter is coming</h1>';
let myRegex = /<.*?>/gi; // Change this line
let result = text.match(myRegex);

//test15

let reCriminals = /C+/g; // Change this line

//test16

let rickyAndCal = 'Cal and Ricky both like racing.';
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

//test17

let caboose = 'The last car on a train is the caboose';
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

//test18

let quoteSample = 'The five boxing wizards jump quickly.';
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//test19

let quoteSample = 'The five boxing wizards jump quickly.';
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

//test20

let movieName = '2001: A Space Odyssey';
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

//test21

let movieName = '2001: A Space Odyssey';
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

//test22

let username = 'JackOfAllTrades';
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

//test23

let sample = 'Whitespace is important in separating words';
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

//test24

let sample = 'Whitespace is important in separating words';
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

//test25

let ohStr = 'Ohhh no';
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

//test26

let haStr = 'Hazzzzah';
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

//test27

let timStr = 'Timmmmber';
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

//test28

let favWord = 'favorite';
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

//test29

let sampleWord = 'astronaut';
let pwRegex = /(?=\w{5,})(?=\D{2,}\d{2,})/i; // Change this line
let result = pwRegex.test(sampleWord);

//test30

let myString = 'Eleanor Roosevelt';
let myRegex = /(Eleanor|Franklin D.?) Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

//test31

let repeatNum = '42 42 42';
let reRegex = /^(\d+)\s\1\s\1$/g; // Change this line
let result = reRegex.test(repeatNum);

//test32

let str = 'one two three';
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = '$3 $2 $1'; // Change this line
let result = str.replace(fixRegex, replaceText);

//test33

let hello = '   Hello, World!  ';
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
