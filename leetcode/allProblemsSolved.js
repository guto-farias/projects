// exe 01 - easy

/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.*/

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log('Resposta exe 01 -', [i, j]);
                return [i, j];
            }
        }
    }
}

let nums = [1, 2, 3, 4]
let target = 7
twoSum(nums, target)




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// exe 02 - medium

/* You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. */


//main function about the problem
var addTwoNumbers = function(l1, l2) {
   let dummyHead = new ListNode(0);
   let p = l1, q = l2, current = dummyHead;
   let carry = 0;

   while (p !== null || q !== null) {
       let x = (p !== null) ? p.val : 0;
       let y = (q !== null) ? q.val : 0;
       let sum = carry + x + y;
       carry = Math.floor(sum / 10);
       current.next = new ListNode(sum % 10);
       current = current.next;
       if (p !== null) p = p.next;
       if (q !== null) q = q.next;
   }

   if (carry > 0) {
       current.next = new ListNode(carry);
   }

   return dummyHead.next;
};


// linked list class
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// linked lists (example)
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// main function
let result = addTwoNumbers(l1, l2);

// print linked list
function printList(list) {
    let current = list;
    console.log('Resposta exe 02 - ');
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

printList(result);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// exe 03 - easy

/*Given an integer x, return true if x is a palindrome, and false otherwise.*/

let n_ex03 = 12321;

//const palindrome = new Boolean(false)
var isPalindrome = function(x) {
    let string_ex03 = x.toString()
    let array_ex03 = string_ex03.split('').map(Number) // map(Number), converte de um a um os elementos string do vetor pra int
    
    if(array_ex03[0] == array_ex03[array_ex03.length-1]){
        for(let i = 1; i < array_ex03.length - 1; i++){
            if(array_ex03[i] != array_ex03[array_ex03.length - (i+1)]){
                console.log('Resposta exe 3 - false')
                return(false)
            }
        }
        console.log('Resposta exe 3 - true')
        return(true)
    }
    console.log('Resposta exe 3 - false')
    return(false)
};

isPalindrome(n_ex03)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// exe 04 - easy

/*Given a roman numeral, convert it to an integer.*/

function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        if (next && current < next) {
            // Se o atual é menor que o próximo, subtraia o valor atual.
            total -= current;
        } else {
            // Caso contrário, some o valor atual.
            total += current;
        }
    }

    return total;
}

// Exemplo de uso:
console.log(romanToInt("III"));   // 3
console.log(romanToInt("IV"));    // 4
console.log(romanToInt("IX"));    // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV"));// 1994