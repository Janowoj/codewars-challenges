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