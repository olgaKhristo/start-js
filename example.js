console.log('Hello World');
const brokenString = "I'm a b2roken string"
`we're safly uswing "backticks"` (string literal)

const num = 1;
if (num >= 11) {
  console.log('high');
}else if (num >= 3) {
  console.log('low');
}else if (num >= 11 && num >= 3) {
  console.log('medium');
}else if(num === 7){
  console.log('exact');
}

// turnrry operator
// condition ? true : false
function example() {
    return condition1 ? value1
      : condition2 ? value2
      : condition3 ? value3
      : value4;
  }

// switch

//while loop
let countdown = 10
while (countdown > 0) {
    countdown= countdown - 1;
  console.log(countdown);
}
console.log('Blast off');

// do while (condition is checked after the loop))  

// for loop
for (let i = 10; i > 10; i--) {  
    console.log(i);
  } 

  for(let i =1; i <= 30; i++){
    if(i <= 10){
      console.log("a");
  }if(i >= 10 && i <= 20){
      console.log("x");
  }if(i >= 20){
      console.log("XX");
    }

    //function 
function getLarger(a,b){
    if(a>b){
        return a;
}else{
    return b;   
};
}
        
    getLarger(10,20);

    //function => arrow function
    const getLarger = (a,b) => {
        return a>b ? a:b
    };

    //function => arrow function => implicit return
    const getLarger = (a,b) => a>b ? a:b;


const farewell = (name) => {
    return "Goodbye forever, " + name;
};
console.log(farewell("Nancy"));
console.log(farewell("Bertrand"));


const counSomethingt = (start, stop, final) => {
    if (start < stop) {
      for (let i = start; i >= stop; i--) {
        console.log(i);
      }
    } else {
      console.log(final);
    }
  };  
  
  counSomethingt(10, 5, 30);
  
  let arr = [1, 2, 3, 4, 5];
    console.log(arr[0]);
    console.log(arr.length);
    console.log(arr.indexOf(3));

    //push(add to end, return new length)
    console.log(arr.push(6));
    console.log(arr);

    //pop(remove from end, return removed element)
    console.log(arr.pop());
    console.log(arr);
    //shift(remove from start, return removed element)
    console.log(arr.shift());   
    console.log(arr);
    //unshift(add to start, return new length)
    console.log(arr.unshift(0));
    console.log(arr);
    //find even numbers
    console.log(arr.find((num) => num % 2 === 0));

    //change array
    //slice(start, end) return a portion of the array
    let newArr = arr.slice(1, 3);
    console.log(newArr);
    //splice(start, deleteCount, item1, item2, ...) remove or replace elements
    console.log(arr.splice(1, 2, 10, 20, 30));
    console.log(arr);
    //concat(arr1, arr2, ...) merge arrays
    console.log(arr.concat(newArr));
    //join will join elements as a string
    console.log(arr.join(" ")); 
    // reverse will reverse the array
    console.log(arr.reverse());
    //sort will sort the array
    console.log(arr.sort());
    // includes will return true or false
    console.log(arr.includes(2));
    
    //iteration of array
    let arr2 = [1, 2, 3, 4, 5, -4];
    arr2.forEach((num) => console.log(num));
    //filter will return a new array
    console.log(arr2.filter((num) => num % 2 === 0));
    
    //map will return a new array
    console.log(arr.map((num) => num * 2));
let doubled = arr2.map(el => el*2);
console.log(doubled);

//some and every will return true or false
console.log(arr2.some((num) => num < 0));
console.log(arr2.every((num) => num < 0));
//reduce will return a single value
console.log(arr2.reduce((acc, num) => acc + num, 0));
console.log(arr2.reduce((acc, num) => acc * num, 1));

//objects, key value pairs
let obj = {
    name: "Nancy",
    age: 30,
    favoriteColor: "blue",
}
console.log(obj.name);
console.log(obj["favorite color"]);
obj.age = 31;
console.log(obj.age);
obj.gender = "M"
console.log(obj.gender);
//delete to delite a key value pair
// key in obj to check if a key exists
if("name" in obj){
    console.log("name exists");
}
// spred operator
let obj2 = {...obj, name: "Bertrand", age: 32};
console.log(obj2);
//object.keys will return an array of keys
console.log(Object.keys(obj));

//Task
// write a function countTarget that
// Accepts two arguments: an array of values (arr) and a target value (target)
// Counts the number of times target appears in arr
// Returns an object with two keys:
// success, storing a boolean value based on whether the target was found at all within arr
// count, storing the number of times target appears in arr
// Provide the following helpful examples:

// countTarget([1, 1, 1], 1) -> { success: true, count: 3 }
// countTarget([1, 1, 1], 3) -> { success: false, count: 0 }
// countTarget([1, 1, "1"], 1) -> { success: true, count: 2 }


let countTarget =( arr, target) => {
    //Counts the number of times target appears in arr
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            count++;
        }
    }
    //Returns an object with two keys:
    return {success: true, count: count};
    //success: true if target appears in arr, false otherwise
    //count: the number of times target appears in arr
}
countTarget([1, 1, 1], 1) -> { success: true, count: 3 }
countTarget([1, 1, 1], 3) -> { success: false, count: 0 }
countTarget([1, 1, "1"], 1) -> { success: true, count: 2 }




