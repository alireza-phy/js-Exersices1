 // !*! ============ alireza abbasi ================!*!


 // ?? ========== exercise 1 : max of two number ========== ??

function max (num1 , num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log('max number between 6356 and 3567 is: ', max (6356 , 3567) )



 // ?? ========== exercise 2 : check type is string ========== ??

 function ChkStrnig(test) {
     return typeof (test) === 'string'
 }

 console.log(ChkStrnig(65))
 console.log(ChkStrnig('ali'))
 console.log(ChkStrnig(true))
 console.log(ChkStrnig({}))
 console.log(ChkStrnig([]))


 // ?? ========== exercise 3 : BizzBuzz problem ========== ??

 function fizbuzz (num) {

     if (num % 15 === 0) return  "fizzbuzz";
     else if (num % 5 === 0) return  "buzz";
     else if (num % 3 === 0) return  "fizz";
     else return num;
 }
 console.log (fizbuzz (30))
console.log (fizbuzz (31))
console.log (fizbuzz (32))
console.log (fizbuzz (33))
console.log (fizbuzz (34))
console.log (fizbuzz (35))

 // ?? ========== exercise 4 : first square of 'two' just more than a number ========== ??

function squareChk(n) {
    let i = 0;
    while ( n >= 2 ** i)
        i++;
    return 2**i;
}

console.log(squareChk(95))
console.log(squareChk(1010))
console.log(squareChk(3512))
console.log(squareChk(31))
console.log(squareChk(64))


 // ?? ========== exercise 5 : perfect number or not ========== ??

    function exmpl(n) {
        let sum = 0;

        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                sum += i;
            }
        }
        if (sum === n) {
            return 'yes'
        } else {
            return 'no'
        }
    }

console.log (exmpl(6))
console.log (exmpl(27))
console.log (exmpl(28))

 // ?? ========== exercise 6 : find the Prime numbers in an interval ========== ??

function interval (a,b){
    for (let i = a+1 ; i< b ; i++)
        Prime (i)
}
function Prime (n){
    let i = 2
    for(i; i< n ; i++)
        if ( n%i === 0) break;
    if (i===n)
        console.log(n);
}
interval(10,20)
interval(7,29)

 // ?? ========== exercise 7 : 'jaan sakht' passwords in an interval ========== ??

function interval(a, b) {
    for (let i = a + 1; i < b; i++)
        Prime(i)
}

function Prime(n) {
    let i = 2
    for (i; i < n; i++)
        if (n % i === 0) break;
    if (i === n) {
        return true;
    } else {
        return false;
    }
}

function diehardPass(x) {
    let strng = x.toString();
    let l = strng.length;

    for (let i = 0; i < l; i++) {
        if (!Prime(Number(strng.substring(0, l - i)))) {
            return false;
        }
    }
    return true;
}

function interval(num) {
    for (let i = 10 ** (num - 1); i < 10 ** num; i++) {
        if (diehardPass(i)) {
            console.log(i)
        }
    }
}

interval(3)
interval(2)
