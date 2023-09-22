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