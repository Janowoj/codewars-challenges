const regex = new RegExp(/[a-z]/);
console.log(regex.test('a')); // true

const reg1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let str = '(123) 456-7890';
let str2 = '123-456-7890';
let str3 = '123.456.7890';
let str4 = '1112223333';
console.log(reg1.test(str)); // true
console.log(reg1.test(str2)); // true
console.log(reg1.test(str3)); // true
console.log(reg1.test(str4)); // true

const reg2 = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,4})$/
let email = 'example@email.com';
let email2 = 'learn_Regex@email.com';
let email3 = 'learn_Regex-2times&more@email.com';
console.log(reg2.test(email)); // true
console.log(reg2.test(email2)); // true
console.log(reg2.test(email3)); // false

// =====================================================================================================================

function createPhoneNumber(numbers) {
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // (111) 111-1111

// another solution:

function createPhoneNumber2(numbers) {
    let result = "(xxx) xxx-xxxx";

    for (let i = 0; i < numbers.length; i++) {
        result = result.replace('x', numbers[i]);
    }
    return result;
}
console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890

// =====================================================================================================================

function descendingOrder(n) {
    //...
    return Number(n.toString().split("").sort((a, b) => b - a).join(''));
}

console.log(typeof descendingOrder(48693));
console.log(descendingOrder(-48693));

// =====================================================================================================================

function highAndLow(numbers) {
    // ...
    return `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`;
}

console.log(highAndLow('1 3 9 13'));

// another solution:

function highAndLow2(numbers) {
    return `${numbers.split(' ').sort((a, b) => (b - a))[0]} ${numbers.split(' ').sort((a, b) => (a - b))[0]}`;
}

console.log(highAndLow2('11 3 9 13 -5'));

// =====================================================================================================================

function DNAStrand(dna) {
    //your code here
    let dnaPairs = [['A', 'T'], ['T', 'A'], ['G', 'C'], ['C', 'G']]
    let dnaArr = dna.split('');
    for (let i = 0; i < dnaArr.length; i++) {
        for (let j = 0; j < dnaPairs.length; j++) {
            if (dnaArr[i] === dnaPairs[j][0]) {
                dnaArr[i] = dnaPairs[j][1];
                break;
            }
        }
    }
    return dnaArr.join('');
}


console.log(DNAStrand('ATTGC'));

// =====================================================================================================================

function findShorts(s) {
    let arr = s.split(" ").map(item => item.length);
    return Math.min(...arr);
}

console.log(findShorts("Let's travel abroad shall we"))

// =====================================================================================================================

function isSquare(n) {
    let regex = /[^0-9]/;
    if (regex.test(Math.sqrt(n)) === false) {
        return true;
    } else { return false };
}
console.log(isSquare(25));
console.log(isSquare(24));
console.log(isSquare(-25));

// another solution:

function isSquare2(n) {
    return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare2(25));
console.log(isSquare2(24));
console.log(isSquare2(-25));

// ====================================================================

function addBinary(a, b) {
    return (a + b).toString(2);
}

console.log(addBinary(1, 2));

// ====================================================================

function findNextSquare(sq) {
    let regex = /[^0-9]/;
    if (regex.test(Math.sqrt(sq)) === false) {
        return Math.pow((Math.sqrt(sq) + 1), 2);
    } else return -1;
}
console.log(findNextSquare(37));

// ====================================================================

function squareDigits(num) {
    return Number(num.toString().split('').map(item => Math.pow(item, 2)).join(''));
}

console.log(squareDigits(234));

// ====================================================================


function reverseString(str) {
    let revStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

console.log(reverseString("JavaScript can be quite absorbing..."));

// ====================================================================

function reverseWords(str) {
    let arr = str.split(/(\s+)/);
    let result = ''

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            result += arr[i][j];
        }
    }

    return result;
}

console.log(reverseWords("JavaScript can be quite absorbing..."));

// another solution:

function reverseWords2(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords2("JavaScript can be quite absorbing..."));

//   another solution:

function reverseWords3(str) {
    return str.split(' ').map(str => str.split('').reverse().join('')).join(' ');
}

console.log(reverseWords3("JavaScript can be quite absorbing..."));

// ====

function makeNegative(num) {
    // Code?
    if (Number.isInteger(num) && num > 0) {
        return -num;
    } else {
        return num;
    }
}

console.log(makeNegative(5));
console.log(makeNegative(-5));

// another solution:

function makeNegative2(num) {
    return num < 0 ? num : -num;
}

console.log(makeNegative2(5));
console.log(makeNegative2(-5));

// another solution:

function makeNegative(num) {
    return -Math.abs(num);
}

// ====================================================================

function pigIt(str) {
    //Code here
    return str.split(' ').map(item => {
        if (item.match(/[a-z]/i)) {
            return item.slice(1) + item[0] + 'ay'
        } else { return item }
    }).join(' ');
}


console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !

// ===========================================================

function digitalRoot(n) {
    let arr = n.toString().split('');

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    let result = arr.reduce((a, b) => a + b);

    if (result.toString().length > 1) {
        return digitalRoot(result);
    } else {
        return result;
    }
}

console.log(digitalRoot(234));
console.log(digitalRoot(239));
console.log(digitalRoot(23967));

// another solution:

function digitalRoot2(n) {
    return (n - 1) % 9 + 1;
}

console.log(digitalRoot2(234));
console.log(digitalRoot2(239));
console.log(digitalRoot2(23967));


// ===========================================================

// slow solution

function isPrime(num) {
    // TODO
    if (Math.abs(num) % 2 === 0 && Math.abs(num) !== 2 || Math.abs(num) === 1) {
        return false;
    }
    if (Math.abs(num) % 3 === 0 && Math.abs(num) !== 3 || Math.abs(num) === 1) {
        return false;
    }
    if (Math.abs(num) % 5 === 0 && Math.abs(num) !== 5 || Math.abs(num) === 1) {
        return false;
    } else {
        return true;
    }
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(15));
console.log(isPrime(23));
console.log(isPrime(-1));
console.log(isPrime(-5));
console.log(isPrime(-9));
console.log('================');

// another slow solution

function isPrime2(num) {
    // TODO
    const posNum = Math.abs(num);

    if (posNum === 0 || posNum === 1) {
        return false;
    }

    for (let i = 2; i < posNum; i++) {
        if (posNum % i === 0) {
            return false;
        }
    } return true;
}

console.log(isPrime2(0));
console.log(isPrime2(1));
console.log(isPrime2(2));
console.log(isPrime2(5));
console.log(isPrime2(15));
console.log(isPrime2(23));
console.log(isPrime2(-1));
console.log(isPrime2(-5));
console.log(isPrime2(-9));
console.log('================');

//  another solution

function isPrime3(num) {
    // TODO
    // const posNum = Math.abs(num);

    if (num === 0 || num === 1 || num < 0) {
        return false;
    }

    let n = Math.sqrt(num);

    for (let i = 2; i <= n; i++) {
        if (num % i === 0) {
            return false;
        }
    } return true;
}

console.log(isPrime2(0));
console.log(isPrime2(1));
console.log(isPrime2(2));
console.log(isPrime2(4));
console.log(isPrime2(5));
console.log(isPrime2(15));
console.log(isPrime2(23));
console.log(isPrime2(-1));
console.log(isPrime2(-5));
console.log(isPrime2(-9));
console.log('==================');


// ===========================================================

function uniqueElements(iterable) {
    //your code here - remember iterable can be a string or an array
    let unique = [];

    if (typeof (iterable) === 'string') {
        iterable.split('').forEach(item => {
            if (unique.includes(item) === false) {
                unique.push(item)
            }
        });
    } else {
        iterable.forEach(item => {
            if (unique.includes(item) === false) {
                unique.push(item)
            }
        });
    }
    return unique;
}

console.log('uniqueElements');
console.log(uniqueElements('AAABBCCCCCBBB'));
console.log(uniqueElements('AAAbCCCcBB'));
console.log(uniqueElements([1, 2, 2, 5, 1]));
console.log('=================');


// another solution:

function uniqueElements(iterable) {
    //your code here - remember iterable can be a string or an array
    return [...iterable].filter((item, index) => iterable.indexOf(item) === index);
}

console.log('uniqueElements');
console.log(uniqueElements('AAABBCCCCCBBB'));
console.log(uniqueElements('AAAbCCCcBB'));
console.log(uniqueElements([1, 2, 2, 5, 1]));
console.log('------------------');


// ===========================================================

// not good solution

function uniqueInOrder(iterable) {
    let arr = [];
    //your code here - remember iterable can be a string or an array
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            arr.push(iterable[i]);
        }
    } return arr;
}

console.log('uniqueInOrder');
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('AAAbCCCcBB'));
console.log(uniqueInOrder([1, 2, 2, 5, 1, 2]));
console.log(uniqueInOrder('ABCDAB'));
console.log('-----------');


// good solution:

function uniqueInOrder2(iterable) {
    //your code here - remember iterable can be a string or an array
    return [...iterable].filter((item, index) => iterable[index] !== iterable[index + 1]);
}

console.log('uniqueInOrder2');
console.log(uniqueInOrder2('AAABBCCCCCBBB'));
console.log(uniqueInOrder2('AAAbCCCcBB'));
console.log(uniqueInOrder2([1, 2, 2, 5, 1, 2]));
console.log(uniqueInOrder2('ABCDAB'));
console.log('=============');

// another solution:

function uniqueInOrder3(iterable) {
    //your code here - remember iterable can be a string or an array
    if (typeof (iterable) === 'string') {
        iterable = iterable.split('');
    }
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] === iterable[i + 1]) {
            iterable.splice(i, 1);
            i--;
        }
    } return iterable;
}

console.log('uniqueInOrder3');
console.log(uniqueInOrder3('AAABBCCCCCBBB'));
console.log(uniqueInOrder3('AAAbCCCcBB'));
console.log(uniqueInOrder3([1, 2, 2, 5, 1, 2]));
console.log(uniqueInOrder3('ABCDAB'));
console.log('-----------');

// ===========================================================

function solution(str, ending) {
    // TODO: complete
    if (str.includes(ending, str.length - ending.length) === true) {
        return true;
    } else return false;
}

console.log(solution('abcde', 'cde')); // returns true
console.log(solution('abcde', 'abc')); // returns false
console.log(solution('abc', 'c')); // returns false
console.log('=============');

// another solution:

function solution2(str, ending) {
    return str.endsWith(ending);
}

// another solution:

function solution3(str, ending) {
    return new RegExp(ending + "$", "i").test(str);
}

//   another solution:

function solution4(str, ending) {
    return str.slice(-ending.length) == ending;
}

console.log(solution4('abcde', 'cde')); // returns true
console.log(solution4('abcde', 'abc')); // returns false
console.log(solution4('abc', 'c')); // returns false

// ===========================================================

function areYouPlayingBanjo(name) {
    // Implement me
    if (name[0] === 'R' || name[0] === 'r') {
        return `${name} plays banjo`;
    } else return `${name} not play banjo`;
}

console.log(areYouPlayingBanjo('Roma'));
console.log(areYouPlayingBanjo('roma'));
console.log(areYouPlayingBanjo('Dima'));

// another solution (interesting):

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

// ===========================================================

// does't work

// function accum(s) {
//     // your code
//     return s.split('').map(item => {
//         for (let i = 0; i < s.length; i++) {
//             item = s[i] * (i + 1);
//         }
//     })
// }

// console.log(accum("abcd"));  // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"

// ===============================================================


function getMiddle(s) {
    //Code goes here!
    if (s.length % 2 === 0) {
        return s.substring(s.length / 2 - 1, s.length / 2 + 1);
    } else {
        return s.substring((s.length - 1) / 2, (s.length - 1) / 2 + 1);
    }
}

console.log(getMiddle('test'));
console.log(getMiddle('tester'));
console.log(getMiddle('testing'));
console.log(getMiddle('lokomotywa'));
console.log(getMiddle('bob'));

// another solutio (nice):

function getMiddle2(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

console.log(getMiddle2('test'));
console.log(getMiddle2('tester'));
console.log(getMiddle2('testing'));
console.log(getMiddle2('lokomotywa'));
console.log(getMiddle2('bob'));

// ==============================================================

function squareSum(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += Math.pow(number, 2);
    });
    return sum;
}

// another solution

function squareSum2(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i], 2);
    } return sum;
}

// another solution:

function squareSum3(numbers) {
    return numbers.reduce((sum, num) => {
        return (num * num) + sum
    }, 0)
}

// bad solution!!!

// function squareSum3(numbers) {
//     return numbers.reduce((num, sum) => {
//         return (num * num) + sum
//     }, 0)
// }

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum2([1, 2]));
console.log(squareSum2([0, 3, 4, 5]));
console.log(squareSum3([1, 2]));
console.log(squareSum3([0, 3, 4, 5]));

// ===============================================================

// Refactored greeting!

// ===============================================================

// Jaden Casing Strings

// ===============================================================

String.prototype.toJadenCase = function () {
    //...
    return this.split(' ').map(item => item[0].toUpperCase() + item.substring(1)).join(' ');
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());

//   another solution with replace() method:

String.prototype.toJadenCase = function () {
    return this
        .split(" ")
        .map(i => i.replace(i[0], i[0].toUpperCase()))
        .join(" ");
};

// ===============================================================



function Person(myName) {
    this.name = myName;
    this.greet = function (yourName) {
        return `Hello ${yourName}, my name is ${this.name}`;
    }
}

let joe = new Person('Joe');

console.log(joe.greet('Kate'));

// another solution:

function Person2(myName) {
    this.name = myName;
}

Person2.prototype.greet = function (yourName) {
    return `Hello ${yourName}, my name is ${this.name}`;
}

// another solution:

class Person3 {
    constructor(myName) {
        this.name = myName;
    }
    greet(yourName) {
        return `Hello ${yourName}, my name is ${this.name}`;
    }
}

// ===============================================================

function duplicateEncode(word) {
    // ...
    return word
        .toLowerCase()
        .split('')
        .map(char => {
            if (word.indexOf(char) === word.lastIndexOf(char)) {
                return '(';
            } else return ')';
        })
        .join('');
}

// function duplicateEncode(word) {
//     // ...
//     return word
//         .toLowerCase()
//         .split('')
//         .map(char => {
//             word.indexOf(char)
//         });
// }


// function duplicateEncode(word) {
//     // ...
//     return word
//         .toLowerCase()
//         .split('')
//         .map(char => word.indexOf(char) === word.lastIndexOf(char) ? '(' : ')')
//         .join('');
// }


// function duplicateEncode(word) {
//     // ...
//     return word
//         .toLowerCase()
//         .split("")
//         .sort()
//         .join("")
//         .match(/(.)\1+/g);
// }



console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("ecede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
console.log(duplicateEncode("Supralapsarian")); //')()))()))))()('
// not '(()))())())()('
console.log(duplicateEncode("Supralapssarian")); //')()))()'

const str1 = "afewreociwddwjej";
const repeatedChar = (str1) => {
    const result = [];
    const strArr = str1.toLowerCase().split("").sort().join("").match(/(.)\1+/g);

    if (strArr != null) {
        strArr.forEach((elem) => {
            result.push(elem[0]);
        });
    }
    return result;
}
console.log(...repeatedChar(str1));

// ===============================================================

//Remove First and Last Character

function removeChar(str) {
    //You got this!
    return str.substring(1, str.length - 1)
};

//    another solution:

function removeChar2(str) {
    //You got this!
    return str.slice(1, -1)
};

// ===============================================================

// You only need one - Beginner

const check = (a, x) => a.includes(x);

// another solution:

const check2 = (a, x) => a.indexOf(x) !== -1;

// another solution:

const check3 = (a, x) => a.some(item => item === x);

// ===============================================================

// Convert a Number to a String!

numberToString = (num) => num.toString();

// another solution:

function numberToString(num) {
    return '' + num;
}

// ===============================================================

function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000;
}

console.log(past(0, 1, 1));

// ===============================================================

const binaryArrayToNumber = arr => {
    // your code
    return parseInt(arr.join(''), 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 1]));

// another solution:

function binaryArrayToNumber2(arr) {
    return arr.reduce((a, b) => a << 1 | b);
}

//   another solution:

const binaryArrayToNumber3 = arr => {
    return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}

// ===============================================================

const countSheep = function (num) {
    //your code here
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(`${i} sheep...`);
    } return arr.join('');
}

console.log(countSheep(1));
console.log(countSheep(3));

// another solution:

const countSheep2 = function (num) {
    //your code here
    let str = '';
    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`;
    } return str;
}

// ===============================================================

// my solution:

function alphabetPosition(text) {
    let arr = text.split("");
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < alph.length; j++) {
            if (arr[i].toLowerCase() === alph[j].toLowerCase()) {
                res.push(j + 1);
            }
        }
    } return res.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// another solution:

function alphabetPosition2(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    return text.toLowerCase()
        .split('')
        .filter(t => letters.indexOf(t) > -1)
        .map(t => letters.indexOf(t) + 1 || '')
        .join(' ');
}

console.log(alphabetPosition2("The sunset sets at twelve o' clock."));

// another solution:

function alphabetPosition3(text) {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    return text.toLowerCase().replace(/[^a-z]/g, '').split('').map(x => alphabet.indexOf(x) + 1).join(' ');
}

console.log(alphabetPosition3("The sunset sets at twelve o' clock."));

// another solution:

function alphabetPosition4(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
        .filter(letter => {
            let index = alphabet.indexOf(letter);
            return index > -1;
        })
        .map(letter => alphabet.indexOf(letter) + 1)
        .join(' ')
}

console.log(alphabetPosition4("The sunset sets at twelve o' clock."));

// ===============================================================

function isIsogram(str) {
    //...
    let arr = str.toLowerCase()
        .split('')
        .sort();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            return false;
            break;
        }
    } return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));

// another solution with new Set() method and size property:

function isIsogram2(str) {
    return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram2("Dermatoglyphics"));
console.log(isIsogram2("isogram"));

// another solution with regex:

function isIsogram3(str) {
    return !/(\w).*\1/i.test(str)
}

console.log(isIsogram3("Dermatoglyphics"));
console.log(isIsogram3("isogram"));
console.log(isIsogram3("aba"));

// ===============================================================

function digitize(n) {
    //code here
    return n.toString().split('').reverse().map(item => parseInt(item));
}

console.log(digitize(12345));

// another solution:

function digitize2(n) {
    return String(n).split('').map(Number).reverse()
}

console.log(digitize2(12345));

// ===============================================================

function towerBuilder(nFloors) {
    // build here
    let tower = [];
    for (let i = 1; i <= nFloors; i++) {
        tower.push(
            " ".repeat(nFloors - i) + "*".repeat(i * 2 - 1) + " ".repeat(nFloors - i)
        )
    } return tower;
}

console.log(towerBuilder(3));
console.log(towerBuilder(6));

// another solution:

function towerBuilder2(n) {
    return [...Array(n)].map((_, i) => " ".repeat(n - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(n - 1 - i))
}

console.log(towerBuilder2(3));
console.log(towerBuilder2(6));

// ===============================================================

function disemvowel(str) {
    return str.match(/[aeiou]/gi) ? str.replace(/[aeiou]/gi, '') : str;
}

console.log(disemvowel("This website is for losers LOL!"));

// another solution:

function disemvowel2(str) {
    return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel2("This website is for losers LOL!"));

//   another solution:

function disemvowel3(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return str
        .split('')
        .filter(elem => {
            return vowels.indexOf(elem.toLowerCase()) === -1
        })
        .join('');
}

console.log(disemvowel3("This website is for losers LOL!"));

// ===============================================================

// Sum Numbers
function sum(numbers) {
    "use strict";
    if (numbers.some(number => {
        return typeof number === 'number'
    })) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        } return sum;
    } else {
        return 0;
    }
}

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));
console.log(sum([-2.398]));

// another solution:

function sum2(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}


console.log(sum2([1, 5.2, 4, 0, -1]));
console.log(sum2([]));
console.log(sum2([-2.398]));

// ===============================================================

function countSheeps(sheep) {
    // TODO
    return sheep
        .filter(elem => {
            return elem === true
        })
        .length;
}

console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));

// another solution:

function countSheeps2(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}

console.log(countSheeps2([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));

// ===============================================================

// function tribonacci(signature, n) {
//     //your code here
//     for (let i = 1; i <= (n - signature.length); i++) {
//         signature.push(signature[length - 1] + signature[length - 2] + signature[length - 3]);
//     } return signature;
// }

function tribonacci(signature, n) {
    //your code here
    if (n !== 0 && n !== 1 && n !== 2) {
        for (let i = 1; i <= (n - 3); i++) {
            signature.push(signature.slice(-3).reduce((a, b) => a + b));
        } return signature;
    } else if (n === 1 || n === 2) {
        return signature.slice(0, n);
    } else return [];
}

console.log(tribonacci([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105] 
console.log(tribonacci([0, 0, 1], 10)); // [0,0,1,1,2,4,7,13,24,44]     
console.log(tribonacci([0, 1, 1], 10)); // [0,1,1,2,4,7,13,24,44,81]    
console.log(tribonacci([1, 0, 0], 10)); // [1,0,0,1,1,2,4,7,13,24]      
console.log(tribonacci([0, 0, 0], 10)); // [0,0,0,0,0,0,0,0,0,0]        
console.log(tribonacci([1, 2, 3], 10)); // [1,2,3,6,11,20,37,68,125,230]
console.log(tribonacci([3, 2, 1], 10)); // [3,2,1,6,9,16,31,56,103,190] 
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([1, 3, 2], 6));
console.log(tribonacci([1, 3, 2], 0));

// another solution:

function tribonacci2(signature, n) {
    for (var i = 0; i < n - 3; i++) { // iterate n times
        signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
}

console.log(tribonacci2([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105] 
console.log(tribonacci2([0, 0, 1], 10)); // [0,0,1,1,2,4,7,13,24,44]     
console.log(tribonacci2([0, 1, 1], 10)); // [0,1,1,2,4,7,13,24,44,81]    
console.log(tribonacci2([1, 0, 0], 10)); // [1,0,0,1,1,2,4,7,13,24]      
console.log(tribonacci2([0, 0, 0], 10)); // [0,0,0,0,0,0,0,0,0,0]        
console.log(tribonacci2([1, 2, 3], 10)); // [1,2,3,6,11,20,37,68,125,230]
console.log(tribonacci2([3, 2, 1], 10)); // [3,2,1,6,9,16,31,56,103,190] 
console.log(tribonacci2([1, 1, 1], 1));
console.log(tribonacci2([1, 3, 2], 6));
console.log(tribonacci2([1, 3, 2], 0));
console.log(tribonacci2([1, 3, 2], 2));

// ===============================================================

function betterThanAverage(classPoints, yourPoints) {
    if (classPoints.reduce((a, b) => a + b, 0) / classPoints.length < yourPoints) {
        return true;
    } else return false;
}

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

// another solution (simpler):

function betterThanAverage2(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}

// ===============================================================

// function sortArray(array) {
//     // Return a sorted array.
//     return array.map(num => {
//         if (num % 2 !== 0) {
//             array.sort((a, b) => a - b)
//         } else return num;
//     })
// }
function sortArray(array) {
    // Return a sorted array.
    let odds = array.filter(num => num % 2 !== 0).sort((a, b) => (a - b));
    return array.map(num => {
        if (num % 2 !== 0) {
            return odds.shift();
        } else return num;
    });
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// another solution:

function sortArray2(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => (x % 2 ? odd.shift() : x));
}

// ===============================================================

function countBy(x, n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push(x * i)
    }

    return arr;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));

// another solution:

const countBy2 = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);

console.log(countBy2(1, 10));
console.log(countBy2(2, 5));

// another solution:

const countBy3 = (x, n) =>
    [...Array(n)].map((_, idx) => ++idx * x);

console.log(countBy3(1, 10));
console.log(countBy3(2, 5));
console.log('===============');


// trwałość mnożnika (multiplication persistence):

function per(n) {

    if (n.toString().length === 1) {
        return [];
    }

    let numArr = n.toString().split('').map((num) => {
        return parseInt(num)
    });

    let arr = [];

    while (numArr.length > 1) {
        let result = numArr.reduce((a, b) => a * b);
        arr.push(result);
        numArr = result.toString().split('').map((num) => {
            return parseInt(num)
        });
    } return arr;

}

console.log('function per');
console.log(per(1));
console.log(per(10));
console.log(per(365));
console.log(per(28));
console.log(per(277777788888899));
console.log('-------------------');

// another solution (simpler):

function per2(n) {
    let res = []
    while (n.toString().length > 1) {
        n = n.toString().split('').reduce(
            (p, c) => p * c
        )
        res.push(n)
    }
    return res
}


console.log('function per2');
console.log(per2(1));
console.log(per2(10));
console.log(per2(365));
console.log(per2(28));
console.log(per2(277777788888899));
console.log('===============');


// ===============================================================

function order(words) {
    // ...
    // let nums = words
    //     .match(/[\d]/g)
    //     .sort((a, b) => a - b);
    let newWords = words.split(' ');
    let arr = [];


    for (let i = 1; i <= newWords.length; i++) {
        arr.push(newWords.find((word) => word.includes(i)));
    } return arr.join(' ');
}


console.log('-----function order(words)------');
console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// another solution:

function order2(words) {
    // ...
    return words
        .split(' ')
        .sort((a, b) => a.match(/\d/) - b.match(/\d/))
        .join(' ');
}

console.log('--------function order2(words)--------');
console.log(order2("is2 Thi1s T4est 3a"));
console.log(order2("4of Fo1r pe6ople g3ood th5e the2"));

// ================================================

// Boiled eggs function;)

function cookingTime(eggs) {
    // TODO
    return Math.ceil(eggs / 8) * 5;
};


console.log(cookingTime(1));
console.log(cookingTime(10));
console.log(cookingTime(100));

// ====================================================

function smash(words) {
    return words.join(' ').trim();
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']));
console.log(smash(["this", "is", "a", "really", "long", "sentence "]));

// ========================================================

const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Draw!";
    } else if (p1 === 'paper' && p2 === "rock") {
        return "Player 1 won!"
    } else if (p1 === 'rock' && p2 === "scissors") {
        return "Player 1 won!"
    } else if (p1 === 'scissors' && p2 === "paper") {
        return "Player 1 won!"
    } else return "Player 2 won!";
}

console.log('------This is Rock Paper Scissors function--------');
console.log(rps("scissors", "paper"));
console.log(rps("paper", "scissors"));
console.log(rps("paper", "rock"));
console.log(rps("rock", "rock"));

// another solution:

const rps2 = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
};

console.log('------This is Rock Paper Scissors function--------');
console.log(rps2("scissors", "paper"));
console.log(rps2("paper", "scissors"));
console.log(rps2("paper", "rock"));
console.log(rps2("rock", "rock"));

// another solution:

const rps3 = (p1, p2) => {
    if (p1 === p2) {
        return 'Draw!'
    };
    return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`;
}

console.log('------This is Rock Paper Scissors function--------');
console.log(rps3("scissors", "paper"));
console.log(rps3("paper", "scissors"));
console.log(rps3("paper", "rock"));

// another solution:

const rps4 = (p1, p2) => {
    switch (p1 + p2) {
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            return "Draw!";
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            return "Player 1 won!";
        default:
            return "Player 2 won!";
    }
};

console.log('------This is Rock Paper Scissors function--------');
console.log(rps4("scissors", "paper"));
console.log(rps4("paper", "scissors"));
console.log(rps4("paper", "rock"));
console.log(rps4("rock", "rock"));

// ========================================================

function domainName(url) {

    let urlPattern = /(https?:\/\/www\.|https?:\/\/)?([-?a-zA-Z0-9]{1,})(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;
    let match = url.match(urlPattern);

    if (match[2] === 'www') {
        return match[3].substring(1);
    } else return match[2]
}

console.log('-------------domainName(url)--------------');
console.log(domainName("http://google.com"));
console.log(domainName("https://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName('https://r2crk-d4banw-9ixdndlhfuow8v.fr'));
console.log(domainName('http://www.y6wot-1j3bh5jalza7-t.fr/img/'));
console.log(domainName('http://6057-eta6dvy0-6op1.pro/img/'));

// another solution:

function domainName2(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};

console.log('-------------domainName2(url)--------------');
console.log(domainName2("http://google.com"));
console.log(domainName2("https://github.com/carbonfive/raygun"));
console.log(domainName2("http://www.zombie-bites.com"));
console.log(domainName2('https://r2crk-d4banw-9ixdndlhfuow8v.fr'));
console.log(domainName2('http://www.y6wot-1j3bh5jalza7-t.fr/img/'));
console.log(domainName2('http://6057-eta6dvy0-6op1.pro/img/'));

//  another solution:

function domainName3(url) {
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

console.log('-------------domainName3(url)--------------');
console.log(domainName3("http://google.com"));
console.log(domainName3("https://github.com/carbonfive/raygun"));
console.log(domainName3("http://www.zombie-bites.com"));
console.log(domainName3('https://r2crk-d4banw-9ixdndlhfuow8v.fr'));
console.log(domainName3('http://www.y6wot-1j3bh5jalza7-t.fr/img/'));
console.log(domainName3('http://6057-eta6dvy0-6op1.pro/img/'));

// ========================================================

function sumNums(x) {
    return x.filter(
        element => typeof element === 'number'
    ).reduce((a, b) => (a + b));

}

console.log(sumNums([9, 3, '7', '3']));
console.log(sumNums(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

// ========================================================

function sumMix(x) {
    return x.map(num => {
        if (typeof num === 'string') {
            return parseInt(num);
        } else return num;
    })
        .reduce((a, b) => a + b);
}

console.log('-------------sumMix(num)--------------');
console.log(sumMix([9, 3, '7', '3']));
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

// another solution

function sumMix2(x) {
    return x.map(a => +a).reduce((a, b) => a + b);
}

console.log(sumMix2([9, 3, '7', '3']));
console.log(sumMix2(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

// another solution

function sumMix3(x) {
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}

console.log(sumMix3([9, 3, '7', '3']));
console.log(sumMix3(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

// ========================================================

function zombieShootout(zombies, range, ammo) {
    if (ammo < zombies && (range / 0.5) > ammo) {
        return `You shot ${ammo} zombies before being eaten: ran out of ammo.`
    }
    else if ((range / 0.5) < zombies && (range / 0.5) <= ammo) {
        return `You shot ${range / 0.5} zombies before being eaten: overwhelmed.`
    } else return `You shot all ${zombies} zombies.`
}

console.log(zombieShootout(3, 10, 10));
console.log(zombieShootout(100, 8, 200));
console.log(zombieShootout(50, 10, 8));
console.log(zombieShootout(77, 10, 32));
console.log(zombieShootout(30, 10, 21));

// another solution:

const zombie_shootout = (zombies, range, ammo, zCount = 0) => {
    if (!zombies) return `You shot all ${zCount} zombies.`
    if (!range) return `You shot ${zCount} zombies before being eaten: overwhelmed.`
    if (!ammo) return `You shot ${zCount} zombies before being eaten: ran out of ammo.`
    return zombie_shootout(zombies - 1, range - 0.5, ammo - 1, zCount + 1);
};

console.log(zombie_shootout(3, 10, 10));
console.log(zombie_shootout(100, 8, 200));
console.log(zombie_shootout(50, 10, 8));
console.log(zombie_shootout(77, 10, 32));
console.log(zombie_shootout(30, 10, 21));

// ========================================================

function compSame(array1, array2) {
    if (array1 === null || array2 === null) {
        return false;
    } else if (array1.length === 0 && array2.length === 0) {
        return true;
    } else if (array1.length === 0 || array2.length === 0) {
        return false;
    } else if (array1.length !== array2.length) {
        return false;
    } else {
        let arr1 = array1.sort((a, b) => a - b).map(item => Math.pow(item, 2));
        let arr2 = array2.sort((a, b) => a - b).map(item => item);
        // return [...arr1, ...arr2];
        if (
            arr1.length === arr2.length &&
            arr1.every((element, index) => element === arr2[index])) {
            return true;
        } else return false;
    }
}

console.log('-------------compSame(array1, array2)--------------');
console.log(compSame([121, 11, 19, 161, 19], [361, 25921, 121, 14641, 361]));
console.log(compSame([7, 5, 9, 8, 2, 5, 10, 1, 0, 0, 1], [1, 1, 0, 64, 81, 25, 49, 1, 100, 4, 25]));
console.log(compSame([2, 1, 3], [18, 1, 2]));
console.log(compSame([], [18, 1, 2]));
console.log(compSame([], null));
console.log(compSame([1], {}));
console.log(compSame([], []));

// another solution:

// function comp2(array1, array2) {
//     if (array1 == null || array2 == null) return false;
//     array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//     return array1.map(v => v * v).every((v, i) => v == array2[i]);
// }

// console.log(comp2([121, 11, 19, 161, 19], [361, 25921, 121, 14641, 361]));
// console.log(comp2([7, 5, 9, 8, 2, 5, 10, 1, 0, 0, 1], [1, 1, 0, 64, 81, 25, 49, 1, 100, 4, 25]));
// console.log(comp2([2, 1, 3], [18, 1, 2]));
// console.log(comp2([], [18, 1, 2]));
// console.log(comp2([], null));
// console.log(comp2([1], {}));
// console.log(comp2([], []));

// another solution:

// function comp3(a, b) {
//     return !!a && !!b && a.map(x => x * x).sort().join() == b.sort().join();
// }

// console.log(comp3([121, 11, 19, 161, 19], [361, 25921, 121, 14641, 361]));
// console.log(comp3([7, 5, 9, 8, 2, 5, 10, 1, 0, 0, 1], [1, 1, 0, 64, 81, 25, 49, 1, 100, 4, 25]));
// console.log(comp3([2, 1, 3], [18, 1, 2]));
// console.log(comp3([], [18, 1, 2]));
// console.log(comp3([], null));
// console.log(comp3([1], {}));
// console.log(comp3([], []));

// ========================================================

var summation = function (num) {
    // Code here
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i
    } return result;
}

console.log('-------------summation(num)--------------')
console.log(summation(1));
console.log(summation(8));

//  another solution:

var summation2 = function (num) {
    return num * (num + 1) / 2;
}

console.log(summation2(1));
console.log(summation2(8));

// ========================================================

function wave(str) {

    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
        }
    } return arr;
}

console.log('----------function wave()----------------');
console.log(wave("hello"));
console.log(wave("hello world"));

// this solution doesn't work with 'two words' string (when there is a double letter in the string):

function waveFalsy(str) {

    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            arr.push(str.replace(str[i], str[i].toUpperCase()));
        }
    } return arr;
}


// another solution:

function wave2(str) {
    let result = [];

    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });

    return result;
}

console.log('----------function wave2()----------------');
console.log(wave2("hello"));
console.log(wave2("hello world"));
console.log(wave2("there are four words"));

// ===================================================================

function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
}

console.log(doubleInteger(0));
console.log(doubleInteger(1));
console.log(doubleInteger(9));

//   another solution

function doubleInteger2(i) {
    // i will be an integer. Double it and return it.
    return i + i;
}

//   another solution

function doubleInteger(i) {
    return i << 1;
}

// ==========================================
function createMorseMax1000(steps) {
    'use strict';
    let i, tmp, s1 = '0', s2 = '1';

    if (steps === 0) return s1;
    if (steps === 1) return s2;
    if (steps < 10) {
        for (i = 0; i < steps; i++) {
            tmp = s1;
            s1 += s2;
            s2 += tmp;
        } return s1;
    } else if (steps === 10) {
        for (i = 0; i < steps; i++) {
            tmp = s1;
            s1 += s2;
            s2 += tmp;
        } return s1.slice(0, -24)
    } else return false;
}

console.log(createMorseMax1000(10));

// =================================================

(function (steps) {
    'use strict';
    var i, tmp, s1 = '0', s2 = '1';
    for (i = 0; i < steps; i++) {
        tmp = s1;
        s1 += s2;
        s2 += tmp;
    }
    console.log(s1);
})(10);

// =================================================

function isThueMorse(seq) {
    //coding and coding..
    'use strict';
    let i, tmp, s1 = '0', s2 = '1';
    for (i = 0; i < 10; i++) {
        tmp = s1;
        s1 += s2;
        s2 += tmp;
    } return s1.slice(0, -24).slice(0, seq.length).split('').map(num => parseInt(num)).toString() === seq.toString();
}


console.log(isThueMorse([0]));
console.log(isThueMorse([1]));
console.log(isThueMorse([0, 1, 0, 0]));
console.log(isThueMorse([0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0]));
