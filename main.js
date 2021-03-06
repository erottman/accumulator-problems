/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
    var string = "This Works!";
    return string;
}
test();

var string = "doing this on my own";

function output(string) {
    return string;
}
output(string);


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/


var originalArray = [1, 2, 3, 4];

function sum(array) {
    var sumArray = 0;

    for (var i = 0; i < array.length; i++) {
        sumArray += array[i];
    }
    return sumArray;
}
sum(originalArray);




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

var singleArray = [1, 2, 3, 4, 5];

function double(array) {
    var doubleArray = [];

    for (var i = 0; i < array.length; i++) {
        doubleArray[i] = array[i] * 2;
    }
    return doubleArray;
}

double(singleArray);


var multiArray = [1, 2, 3, 4];

function tripleAndSum(array) {
    var tripleArray = [];
    var tripleSum = 0;
    var tripleString = "";

    for (var i = 0; i < array.length; i++) {
        tripleArray[i] = array[i] * 3
        tripleSum += array[i];
        tripleString += array[i];
    }

    console.log(tripleArray);
    console.log(tripleSum);
    console.log(tripleString);

}

tripleAndSum(multiArray);




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/


var arrayMultiply = [7, 8, 9, 10];

function multiply(array) {
    var arrayMultiplied = [];
    for (var i = 0; i < array.length; i++) {
        arrayMultiplied[i] = array[i] * 5;
    }


    return arrayMultiplied;
}
multiply(arrayMultiply);




var arrayMath = [7, 8, 9, 10];

function multiply(array) {
    var arrayMultiplied = [];
    var arrayDivided = [];
    var arraySubtracted = [];

    for (var i = 0; i < array.length; i++) {
        arrayMultiplied[i] = array[i] * 5;
        arrayDivided[i] = array[i] / 5;
        arraySubtracted[i] = array[i] - 5;
    }
    console.log(arrayMultiplied);
    console.log(arrayDivided);
    console.log(arraySubtracted);


}
multiply(arrayMath);




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

var singleLetters = "abc";

function double(string) {
    var doubleString = "";
    for (var i = 0; i < string.length; i++) {
        doubleString += string[i] + string[i];
        console.log(doubleString);
    }


    return doubleString;
}

double(singleLetters);






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/


var arrayOne = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8];

function interleave(array1, array2) {
    var arrayTotal = [];
    for (var i = 0; i < array1.length; i++) {
        arrayTotal.push(array1[i], array2[i]);


    }

    return arrayTotal;
}
interleave(arrayOne, arrayTwo)







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/


var greet = "Hello";
var num = 4;
var count = 0;


function createRange(string, times) {
    var greetTotal = [];
    while (count < times) {
        greetTotal.push(greet);
        count++;
    }


    return greetTotal;
}
createRange(greet, num);






var greet = "Hello";
var num = 4;
var count = 0;


function createRange(string, times) {
    var greetTotal = '';
    while (count < times) {
        greetTotal += greet;
        count++;
    }


    return greetTotal;
}
createRange(greet, num);




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an
// object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/


var arrayArray = ['quick', "brown", "fox"];

function flipArray(array) {
    var arrayObject = {};
    for (var i = 0; i < array.length; i++) {
        arrayObject[array[i]] = i;

    }



    return arrayObject;
}
flipArray(arrayArray)




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and
return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it
should return { 2014: "Horse", 2015: "Sheep" }

*/

var arrayTwoElements = [
    [2014, "horse"],
    [2015, "sheep"]
];

function arraysToObject(array) {
    var objectTwoElements = {};

    for (var i = 0; i < array.length; i++) {
        objectTwoElements[array[i][0]] = array[i][1];
        console.log(objectTwoElements)
    }
    return objectTwoElements;
}
arraysToObject(arrayTwoElements);






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string
 without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

var stringEO = "abcdef";

function everyOther(string) {
    var stringEONew = "";
    for (var i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            stringEONew += string[i];
        }

    }
    return stringEONew;
}
everyOther(stringEO);




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half
of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals
"ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

// Use substring()

var stringEq = "haha";
var stringNoEq = "heehaw";


function stringEqual(string) {

    if (string.length % 2 !== 0) {
        return false;
    }

    var firstHalf = string.substring(0, stringEq.length / 2);
    console.log(firstHalf);
    var secondHalf = string.substring(stringEq.length / 2);
    console.log(secondHalf);

    return firstHalf === secondHalf;
}

stringEqual(stringNoEq);


var stringEq = "haha";
var stringNoEq = "heehaw";


function stringEqual(string) {

    if (string.length % 2 !== 0) {
        return false;
    }
    var half = string.length / 2;


    return string.substring(0, half) === string.substring(half);
}

stringEqual(stringEq);





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/


var stringEO = "abcdef";

function everyOther() {
    var stringEONew = "";
    for (var i = 0; i < string.length; i++) {
        if (ilength % 2 === 0) {
            stringEONew += string[i];
        }
        return stringEO;
    }
}
everyOther(stringEO);




return stringEONew;
}

everyOther(stringEO);





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/


var stringAE = "aba";

function allEqual(string) {
    for (var i = 1; i < string.length; i++) {
        if (string[0] !== string[i]) {
            return false;
        }

    }
    return true;
}


allEqual(stringAE)






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum
of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/

var stringLetters = "246";

function sumLetters(string) {
    var stringNumbers = 0;
    for (var i = 0; i < string.length; i++) {
        stringNumbers += parseInt(string[i], 10);
    }
    return stringNumbers;
}
sumLetters(stringLetters);





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of
vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/
// indexOf() str.indexOf(searchValue[, fromIndex])
// search value -string representing value to seach for
// from index: the index to which search in the string,
// default 0 to search entire string. if a -1 returned it means
// false

var stringVowels = "Learning javascript is good for you";
var vowels = "aeiouAEIOU"
var vcount = 0;


function countVowels(string) {
    for (var i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) !== -1) {
            vcount += 1;
        }
    }
    return vcount;

};

countVowels(stringVowels);




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

var stringSplit = "you";

function split(string) {
    var stringArray = [];

    for (var i = 0; i < string.length; i++) {
        stringArray[i] = string[i];
    }
    return stringArray;
}

split(stringSplit);


var stringSplitMethod = stringSplit.split("");




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/


var codePointsString = "Hello";

function getCodePoints(string) {
    var newCodePoint = "";
    for (var i = 0; i < string.length; i++) {
        newCodePoint += string.codePointAt(i) + ",";
    }

    return newCodePoint;
}

getCodePoints(codePointsString);





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an
object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

var stringMapPosition = "Hello";

function letterMap(string) {
    var stringPositionObject = [];

    for (var i = 0; i < string.length; i++) {
        stringPositionObject[string[i]] = [i];
    }


    return stringPositionObject;
}
letterMap(stringMapPosition);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an
object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/


var stringMap = "Hello";

function letterMap(string) {
    var stringMapObject = {};
    for (var i = 0; i < string.length; i++) {
        if (typeof stringMapObject[string[i]] === 'undefined') {
            stringMapObject[string[i]] = 1;
        } else {
            stringMapObject[string[i]] = stringMapObject[string[i]] + 1;
        }

    }


    return stringMapObject;
}

letterMap(stringMap);


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns
true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0
and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

var num1 = 6;
var num2 = 0;
var num3 = 0;
var threeOdds = 0;


function threeOdds(num1, num2) {
    if (num1 > num2) {
        num3 = (num1 - num2);
        num3 < 4 {
            return false;
        } else {
            for (var i = num2 + 1; i < num1; i++{
                    if (i % 3 === 0) {
                        threeOdds += i;
                    }
                }
            }
        }
        return threeOdds.length === 3;
    };
    threeOdds(num1, num2)







    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

    Example:

    If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
    */


    var num1 = 6;
    var num2 = 0;
    var num3 = 0;
    var threeOddsReturn = "";


    function threeOdds(num1, num2) {
        if (num1 > num2) {
            num3 = num1 - num2;
        } else {
            num3 = num2 - num1;
        }
        console.log(num3);

        if (num3 < 4) {
            return false
        } else {
            for (var i = (num2 + 1); i < num1; i++) {
                if (i % 2 !== 0) {
                    threeOddsReturn += i;
                    console.log(threeOddsReturn);
                }
            }

        }
        return threeOddsReturn.length === 3;
    }

    threeOdds(num1, num2)


    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named createString that takes a number and a letter and creates a string of that many letters

    Example:

    If you pass "a", 3 it should return "aaa"
    If you pass "b", 3 it should return "bb"
    */

    var numberCreate = 3;
    var letterCreate = "a";
    var counter = 0;


    function createString(letter, number) {
        var newNumLetCreate = "";
        while (counter < number) {
            newNumLetCreate += letter;
            counter++;

        }
        return newNumLetCreate;

    }

    createString(letterCreate, numberCreate);




    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named factorial that takes a number and returns its factorial

    Factorial of 4 means 4 * 3 * 2 * 1

    Example:

    If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
    If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
    */


    var numFactorial = 4;


    function factorial(num) {
        var factored = numFactorial;
        for (var i = (num - 1); i >= 1; i--) {
            factored *= i;
            console.log(factored);
        }
        return factored;
    }
    factorial(numFactorial);



    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named arrayOfNumbers that takes a number and returns an array of
    all the numbers between 1 and that number, inclusive

    Example:

    If you pass 1 it should return [1]
    If you pass 3 it should return [1,2,3]
    */

    var numOriginal = 3;

    function arrayOfNumbers(num) {
        var numArrays = [1];
        for (var i = 1; i < num; i++) {
            numArrays[i] = i + 1;
        }

        return numArrays;
    }
    arrayOfNumbers(numOriginal);



    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named evenOdd that takes a number and returns an
    object with the numbers and whether they are even or odd

    Example:

    If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
    */

    function evenOdd(num1, num2) {
        var evenOddObject = {};

        if (num1 === 0 && num2 === 0) {
            return evenOddObject;
        } else if (num1 > num2) {
            for (var i = num2; i <= num1; i++) {
                if (i % 2 === 0) {
                    evenOddObject[i] = "even";
                } else {
                    evenOddObject[i] = "odd;"
                }
            }
        } else {
            for (var i = num1; i <= num2; i++) {
                if (i % 2 === 0) {
                    evenOddObject[i] = "even";
                } else {
                    evenOddObject[i] = "odd;"
                }
            }
        }
        return evenOddObject;
    };

    evenOdd(4, 1);



    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named growingKeys that takes a number and a string and returns an object
    where the keys are that string, repeated one more each time

    Example:

    If you pass 2,"d" it should return {"d": true, "dd": true}
    */


    function growingKeys(num, string) {
        var newObject = {};

        for (var i = 1; i < num; i++) {
            var key = "";

            for (var j = 0; j < i; j++) {
                key += string;
            }
            newObject[key] = true;
        }

        return newObject;
    }


    growingKeys(4, "d")




    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named every that takes an array and a value and returns true if
    every element of the array equals the value

    Example:

    If you pass [1,1], 1 it should return true
    If you pass [1,2], 1 it should return false
    */

    arrayEvery = [2, 2];

    function every(array, value) {
        EqualArray = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] !== value) {
                return false;
            } else {
                EqualArray[i] = array[i];


            }
        }
        console.log(EqualArray);
        console.log(arrayEvery);
        if (EqualArray === arrayEvery);
        return true;
    }



    every(arrayEvery, 2);


    function every2(array, value) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                count++;
            }
        }

        if (count === array.length) {
            retunr true;
        } else {
            return false;
        }

    }



    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named some that takes an array and a value and
    returns true if at least one element of the array equals the value

    Example:

    If you pass [1,2], 1 it should return true
    If you pass [3,2], 1 it should return false
    */

    var arraySome = [1, 2];

    function some(array, value) {
        var anyEqualArray = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            } else {
                anyEqualArray[i] = array[i];
            }
        }
        if (anyEqualArray !== array) {
            return false;
        }
        some(arraySome, 1);



        function some2(array, value) {
            var count = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i] === value) {
                    count++;
                }
            }
            if (count > 0) {
                return true;
            } else {
                return false;
            }
        }



        /*
        ----------------------------------------
        CHALLENGE
        ----------------------------------------

        Write a function named some that takes an array and returns a
        string with the elements joined by commas, with a trailing 'and'

        Example:

        If you pass ["Sue", "Will"] it should return "Sue and Will"
        If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
        */

        arraySome3 = ["sue", "will"];

        function some3(array) {
            var newString = array.toString();
        }
        console.log(newString);
    }
    some3(arraySome3);


    arraySome4 = ["bob", "latka"];

    function some4(array) {
        var newString = array.join(" and ");
        console.log(newString);
    }

    some4(arraySome4);





    arraySome5 = ['sally', "jesse", "rachel"];

    function some5(array) {
        var newString = "";

        for (var i = 0; i < array.length; i++) {
            if (i < array.length - 1) {
                newString += array[i] + ", ";
                console.log(newString);
            } else {
                newString += "and " + array[i];
                console.log(newString);
            }
        }
    }
    some5(arraySome5);



    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

    Example:

    If you pass ["Sue", "Will"] it should return "SW"
    If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
    */

    var arrayAcronym = ["sue", "will", "object"];

    function acronym(array) {
        stringAcronym = "";
        for (var i = 0; i < array.length; i++) {
            stringAcronym += array[i].slice(0, 1);
        }


        return stringAcronym;
    }
    acronym(arrayAcronym);



    function acronym2(array) {
        var string = "";

        for (var i = 0; i < array.length; i++) {
            string += array[i][0];
        }
        return string;
    }






    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named min that takes an array and returns minimum value of the array

    Example:

    If you pass [0,-3,2,5] it should return -3
    */
    // Math.min.apply(null, numbers);


    var arrayMin = [0, -3, 2, 5];

    function min(array) {
        return Math.min.apply(Math, arrayMin);
    }
    min(arrayMin)





    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named index that takes an array of objects, and a
    property name, and returns an object where the keys are the specified property

    Example:

    If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should
    return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

    */

    var arrayObjects = [{
        id: 1,
        name: "Joe"
    }, {
        id: 2,
        name: "Sue"
    }];


    function index(array, prop) {
        var object = {};

        for (var i = 0; i < array.length; i++) {
            if (prop === "id") {
                object[array[i].id] = array[i];
            } else {
                object[array[i].name] = array[i];
            }


        }
        return object;
    }

    index(arrayObjects, "id");






    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named invert that takes an object and returns an object
    where the keys and values have been inverted

    Example:

    If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
    */


    var objectInvert = {
        id: 1,
        name: "Joe"
    };

    function invert(object) {
        newObject = {};
        for (var key in object) {
            newObject[object[key]] = key;


        }
    }


    return newObject;
}
invert(objectInvert);


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name,
and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/


var objectSignature = {
    "contract": "foo"
};

function addSignature(object, name) {
    var newObject = {};
    for (var key in object) {
        var value = object[key];
        key = key + "-signed";

        newObject[key] = value + " - " + name;
    }
}
return newObject;
}

addSignature(objectSignature, "Fred");




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of s
trings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/

var objectPairs = {
    name: "Will",
    age: 24
};

function pairs(object) {
    newArray = [];
    for (var key in object) {
        newArray.push(key + "-" + object[key]);

    }

    return newArray;
}
pairs(objectPairs);



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/

var objectSumValues = {
    a: 1,
    b: 2
};

function sumValues(object) {
    var sum = 0;
    for (var value in object) {
        sum += object[value];


    }
    sumValues(objectSumValues);



    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named biggestProperty that takes an object and returns the
    name of the property with the highest value

    Example:

    If you pass {1999: 4036, 2000: 7654} it should return '2000'
    */

    var objectBiggest = {
        1999: 4036,
        2000: 7654
    };

    function biggestProperty(object) {
        var result = 0;
        var sum = 0;
        for (var value in object) {
            sum += object[value];
            if (sum > result) {
                result = sum;
                console.log(result);
            }
        }
        return result;
    }

    biggestProperty(objectBiggest);




    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named keyForValue that takes an object and a value and
    returns the name of the property that matches that value

    Example:

    If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
    */

    var objectkeyForValue = {
         1999: 4036,
         2000: 7654
     }

     function keyForValue(object, num) {
         var result;
         var sum = 0;
         for (var value in object) {
             sum += object[value];
                 if (sum === num) {
                     result = value;
                 }

             }
             return result;
         }


     keyForValue(objectkeyForValue, 4036);





    /*
    ----------------------------------------
    CHALLENGE
    ----------------------------------------

    Write a function named containsValue that takes an object and a
    value and returns true if the object contains the value

    Example:

    If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
    */


    var objectContainsValue = {
         1999: 4036,
         2000: 7654
     }

     function containsValue(object, num) {
         var result;
         var sum = 0;
         for (var value in object) {
             sum += object[value];
                 if (sum === num) {
                    return true;
                 }

             }
             return false;
         }


     containsValue(objectkeyForValue, 4036);






    //
