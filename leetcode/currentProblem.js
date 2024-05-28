// exe 04 - easy

/*Given a roman numeral, convert it to an integer.*/

let string_ex04 = "IV";

var romanToInt = function(s) {
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;
    let currentValue = 0;

    let array = s.split('');

    for (let i = 0; i < array.length; i++) {
        currentValue = values[array[i]];
        console.log(currentValue);
        
        if(currentValue < prevValue){
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    };   
    console.log(result);
    return result;
};

romanToInt(string_ex04);
