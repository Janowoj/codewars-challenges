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
