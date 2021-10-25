//test 01

let yourArray = ['Sergey', 37, true, null, undefined]; // Change this line

//test 02

let myArray = ['a', 'b', 'c', 'd'];
// Only change code below this line
myArray[1] = 'Hello';
// Only change code above this line
console.log(myArray);

//test 03

function mixedNumbers(arr) {
  // Only change code below this line
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three');
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

//test 04

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

//test 05

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4);
// Only change code above this line
console.log(arr);

//test 06

function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  // Only change code above this line
  return arr;
}

console.log(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick',
  ])
);

//test 07

function forecast(arr) {
  // Only change code below this line
  let arr2 = arr.slice(2, 4);
  return arr2;
}

// Only change code above this line
console.log(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])
);

//test 08

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

//test 09

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());

//test 10

function quickCheck(arr, elem) {
  // Only change code below this line
  // if (arr.indexOf(elem) >= 0) {
  //   return true
  // }else {
  //   return false
  // }
  return arr.indexOf(elem) >= 0 ? true : false;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//test 11

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

//test 12

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array', ['deep', ['deeper', ['deepest']]]],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
  // Only change code above this line
];

//test 13

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// Only change code below this line
foods.bananas = 13;
foods['grapes'] = 35;
const str = 'strawberries';
foods[str] = 27;

// Only change code above this line

console.log(foods);

//test 14

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42,
  },
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

//test 15

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // Only change code below this line
  let tmp = foods[scannedItem];
  return tmp;
  // Only change code above this line
}

console.log(checkInventory('apples'));

//test 16

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);

//test 17

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  return (
    userObj.hasOwnProperty('Alan') &&
    userObj.hasOwnProperty('Jeff') &&
    userObj.hasOwnProperty('Sarah') &&
    userObj.hasOwnProperty('Ryan')
  );
  // // Only change code above this line
}

console.log(isEveryoneHere(users));

//test 18

function countOnline(usersObj) {
  // Only change code below this line
  let sum = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      sum++;
    }
  }
  return sum;
  // Only change code above this line
}

//test 19

let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));

//test 20

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: ['Sam', 'Kira', 'Tomo'],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
