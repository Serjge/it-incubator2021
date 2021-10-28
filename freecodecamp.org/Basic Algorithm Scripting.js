//Test01

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);

//Test02

function reverseString(str) {
  return [...str].reverse().join('');
}

reverseString('hello');

//Test03

function factorialize(num) {
  let mult = 1;
  for (let i = 1; i <= num; i++) {
    mult = mult * i;
  }
  return mult;
}

factorialize(5);

//Test04

function findLongestWordLength(str) {
  let newStr = str.split(' ');
  let strLength = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > strLength) {
      strLength = newStr[i].length;
    }
  }
  return strLength;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

//Test05

function largestOfFour(arr) {
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  let newArr = [];
  for (let vol of arr) {
    newArr.push(getMaxOfArray(vol));
  }

  return newArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

//Test06

function confirmEnding(str, target) {
  let regex = new RegExp(`${target}$`, 'g');
  return regex.test(str);
}

confirmEnding('Bastian', 'n');

//Test07

function repeatStringNumTimes(str, num) {
  let newstr = '';
  if (num < 0) {
    return '';
  } else {
    for (let i = 1; i <= num; i++) {
      newstr += str;
    }
  }
  return newstr;
}
repeatStringNumTimes('abc', 3);

//Test08

function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  } else {
    return str.slice(0, num) + '...';
  }
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

//Test09

function findElement(arr, func) {
  let num = 0;
  for (let vol of arr) {
    console.log(func(vol));
    if (func(vol) === true) {
      num = vol;
      break;
    } else {
      num = undefined;
    }
  }
  return num;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

//Test10

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

booWho(null);

//Test11

function titleCase(str) {
  let newstr = str.toLowerCase();
  let words = newstr.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
  }
  return words.join(' ');
}

//Test12

function frankenSplice(arr1, arr2, n) {
  let newarr = [];

  for (let i = 0; i < n; i++) {
    newarr.push(arr2[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    newarr.push(arr1[i]);
  }
  for (let i = n; i < arr2.length; i++) {
    newarr.push(arr2[i]);
  }

  return newarr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Test13

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, 'ate', '', false, 9]);

//Test14

function getIndexToIns(arr, num) {
  let sum = 0;
  for (let vol of arr) {
    if (vol < num) {
      sum++;
    }
  }
  return sum;
}

getIndexToIns([40, 60], 50);

//Test15

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
mutation(['hello', 'hey']);

//Test16

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
