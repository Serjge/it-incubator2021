//Test1

let dog = {
  name: 'Raks',
  numLegs: 4,
};

//Test2

let dog = {
  name: 'Spot',
  numLegs: 4,
};
// Only change code below this line
console.log(dog.name, dog.numLegs);

//Test3

let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return `This dog has ${dog.numLegs} legs.`;
  },
};

dog.sayLegs();

//Test4

let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return 'This dog has ' + this.numLegs + ' legs.';
  },
};

dog.sayLegs();

//Test5

function Dog() {
  this.name = 'Gremlin';
  this.color = 'dark';
  this.numLegs = 4;
}

//Test6

function Dog() {
  this.name = 'Rupert';
  this.color = 'brown';
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();

//Test7

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog('terrier', 'dark');

//Test8

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(13);

myHouse instanceof House;

//Test9

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird('Tweety');
let ownProps = [];
// Only change code below this line

for (let property in canary) {
  if (canary.hasOwnProperty(property)) ownProps.push(property);
}
console.log(ownProps);

//Test10

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog('Snoopy');

//Test11

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog('Snoopy');

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);

//Test12

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

//Test13

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function () {
    console.log('Gav Gav');
  },
  describe: function () {
    console.log(`My name is ${this.name}`);
  },
};

//Test14

//Test15

//Test16

//Test17

//Test18

//Test19

//Test20

//Test21

//Test22

//Test23

//Test24

//Test25

//Test26
