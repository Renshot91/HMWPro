//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
/*example
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
 */
  const sheepArray = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
  const presentSheepCount = countSheeps(sheepArray);
  function countSheeps(arrayOfSheep, count = 0) {
    arrayOfSheep.map(el => el ? count += el : count += 0)
    return count
  }
  console.log("Number of present sheep:", presentSheepCount);
  
  //2 Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
  const multiplyAndAdd = (value) => {
    if (typeof value === 'number') {
      return value * 50 + 6;
    } else {
      return 'Error';
    }
  };
  console.log(multiplyAndAdd(10));     
  console.log(multiplyAndAdd('abc'))

  // 3 Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
/*
Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"*/
function shortcut(input) {
    return input.replace(/[a,e,i,o,u]/g, '');
  }
  console.log(shortcut("hello"));    
  console.log(shortcut("codewars")); 
  console.log(shortcut("goodbye"));  
  console.log(shortcut("HELLO"));    

  /*
   4..Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
   */
const calculateBMI = (weight, height, callback) => {
    const bmi = weight / (height * height);
    
    if (bmi <= 18.5) {
      callback("Underweight");
    } else if (bmi <= 25.0) {
      callback("Normal");
    } else if (bmi <= 30.0) {
      callback("Overweight");
    } else {
      callback("Obese");
    }
  };

  /*6.Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
   */
  function boolToYesNo(value) {
    return value ? "Yes" : "No";
  }
  console.log(boolToYesNo(true));  
  console.log(boolToYesNo(false)); 
  

  /**
   *7. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
   */
const summation = num => num * (num + 1) / 2;
console.log(summation(2)); 
console.log(summation(8)); 

//8..I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.
function arrayPlusArray(arr1, arr2) {
    sum = 0
    arr1.forEach(num => {
      sum += num;
    });
    arr2.forEach(num =>  {
      sum += num;
    });
    return sum;
  }
  
  /**9...
   * Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
   */
function points(games) {  
    let count = 0; 
    games.map(el => +el[0] > +el[2] ? count += 3 : +el[0] == +el[2] ? count += 1 : count += 0);  
    
    return count;
  }
  
  /**10
   * Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
   */
function litersOfWater(time) {
    const liters = Math.floor(time * 0.5);
    return liters;
  }
  console.log(litersOfWater(3));     
  console.log(litersOfWater(6.7));   
  console.log(litersOfWater(11.8));  
  