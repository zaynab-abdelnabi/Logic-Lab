let example = { name: "Rayan", email: "rayan.email" };

getProperties = (object) => {
  //   return Object.keys(object);
  let arr = [];
  for (data in object) {
    arr.push(data);
  }
  return arr;
};

// console.log(getProperties(example)); //['name','email']

isPlainObject = (obj) => {
  if (
    obj != null &&
    typeof obj == "object" &&
    Object.getPrototypeOf(obj) == Object.prototype
  ) {
    return true;
  } else {
    return false;
  }
};

// console.log(isPlainObject(example)); //true
// console.log(isPlainObject(["a", "b", "c"])); //false

modifyObject = (obj) => {
  return {
    ...obj,
    isObject: isPlainObject(obj),
    getPropertiesNb: getProperties(obj).length,
  };
};

//console.log(modifyObject(example));
// {
//     name: 'Rayan',
//     email: 'rayan.email',
//     isObject: true,
//     getPropertiesNb: 2
// }

makePairs = (obj) => {
  // console.log(pairedobjects = Object.entries(object));
  let arr = [];
  for (data in obj) {
    arr.push([data, obj[data]]);
  }
  return arr;
};

//console.log(makePairs(example)); //[ [ 'name', 'Rayan' ], [ 'email', 'rayan.email' ] ]

without = (obj, ...args) => {
  let arr = args;
  arr.map((data) => {
    if (data in obj) {
      delete obj[data];
    }
  });
  return obj;
};

//console.log(without(example, "email")); //{ name: 'Rayan' }

isEmpty = (obj) => {
  if (getProperties(obj).length == 0) {
    return true;
  } else {
    for (data in obj) {
      if (obj[data] !== undefined) {
        return false;
      }
    }
    return true;
  }
};

// console.log(isEmpty({ 1: undefined })); //true
// console.log(isEmpty({ 1: "value" })); //false
// console.log(isEmpty({})); //true
// console.log(isEmpty({ 1: undefined, 2: undefined })); //true
// console.log(isEmpty({ 1: "value", 2: undefined })); // false

isEqual = (obj1, obj2) => {
  let arr1 = makePairs(obj1);
  let arr2 = makePairs(obj2);
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < 2; j++) {
        if (arr1[i][j] !== arr2[i][j]) {
          return false;
        }
      }
    }
    return true;
  }
};

// console.log(isEqual({ a: "1", b: "2" }, { a: "1", b: "2" })); //true
// console.log(isEqual({ c: "1", b: "2" }, { a: "3", b: "2" })); //false

intersection = (obj1, obj2) => {
  let common = {};
  getProperties(obj1).filter((item) => {
    if (item in obj2 && obj1[item] === obj2[item]) {
      common[item] = obj1[item];
    }
  });
  return common;
};

//console.log(intersection({ a: "1", b: "2" }, { a: "1", c: "2" })); //{a: "1"}
