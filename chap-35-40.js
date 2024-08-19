// -----------------------------question 1-------------------------
var today = new Date()
document.write(today.toLocaleString(), '<br> <br>')

// -----------------------------question 2-------------------------
var fname = 'hajra'
var lname = 'ashraf'

function greet(fname , lname){
    document.write('Hello ',fname, lname, '<br> <br>');
    
}
greet(fname, lname)

// -----------------------------question 3-------------------------
var num1 = 2
var num2 = 2

function calcu(num1 , num2){
    document.write(`sum of ${num1} and ${num2} is ${num1 + num2} <br> <br>`)
    
}
calcu(num1 , num2)


// -----------------------------question 3-------------------------
// var num1 = +prompt("Enter num one",3)
// var opr = prompt("Enter operater", '+')
// var num2 = +prompt("Enter last num", 3)

// function add(num1, num2){
//    return num1 + num2
// }
// add(num1, num2)


// function subs(num1, num2){
//     return num1 - num2
// }
// subs(num1, num2)


// function mult(num1, num2){
//     return num1 * num2
// }
// mult(num1, num2)

// function sum(num1, num2, opr){
//     if(opr == '+'){
//        return add(num1, num2)
//     }

//    else if(opr == '-'){
//         return subs(num1, num2)
//      }

//      else if(opr == '*'){
//         return mult(num1, num2)
//      }
// }
// var result = sum(num1, num2, opr)
// console.log(result);


// -----------------------------question 4-------------------------
var date = new Date()
var ramzanDay = new Date('feb 28 2025')
var diff = ramzanDay - date
document.write('Ramzan come in ',Math.floor(diff / 1000/60/60/24), '<br> <br>');


// -----------------------------question 4-------------------------
var x = 2
function square(x){
    return x * x
}
var result = square(x)
document.write(`Square of 2 * 2 is ${result} <br>`);


function displeCounting(start, end){
    var counting = document.getElementById('counting')

    for(var i = start; i <= end; i++){
        counting.innerHTML += i + '<br>'
    }
    
}
displeCounting(1, 10)


// -----------------------------question 5-------------------------
function checkPalindrome(){
    var word = document.getElementById('word').value
    var result = document.getElementById('result')
    result.innerHTML = ""
    word = word.toLowerCase();
    
    for(var i = word.length - 1; i >= 0; i--){
        result.innerHTML += word[i]
        
    }  
    
    if(word === result.innerHTML){
       alert('its palindrome word')
    }else{
        alert('not palindromw')
    }
}



// -----------------------------question 6-------------------------
var name = 'Hajra Ashraf'
var month = new Date().getMonth()
var unitNum = 410
var perUnit = 16
var latePayment = 350

document.write(`<br> Customer Name: ${name} <br> Month: ${month} <br>`)
document.write(`Nuumber of unit ${unitNum} <br> Charges per unit: ${perUnit} <br>`)

document.write(`Net amount Payable ( within due date): ${unitNum * perUnit} <br>`)
document.write(`late payment surcharge: ${latePayment} <br>`)

document.write(`Gross Amount Payable (After Due Date): ${unitNum * perUnit + latePayment} <br> <br>`)


// -----------------------------question 6-------------------------
var str = 'the quick brown fox'
var result = ''
function capitalizeFirstLetter(str){
    var arry = str.split(' ')
    for(var i = 0; i < arry.length; i++){
        result += arry[i].slice(0,1).toUpperCase() + arry[i].slice(1).toLowerCase() + ' '
    }
    document.getElementById('sentence').innerHTML = result
}
capitalizeFirstLetter(str)

// -----------------------------question 7-------------------------
var word = 'Web Development Tutorial'

function findLargestStr(word){
    var newArry = word.split(' ')
    for(var i = 0; i < newArry.length; i++){
    if(newArry[i] < newArry[i + 1]){
        document.write('largest word is ', newArry[i], '<br>' );
        
    }
    }
}
findLargestStr(word)

// -----------------------------question 7-------------------------
function findLatter(name, letter){
    var count = 0;
    for(var i = 0; i < name.length; i++){
        if(name[i] == letter){
            count++
        }
    }
    document.write(`${letter} is ${count} times <br> `)
}
findLatter('hajra', 'a')