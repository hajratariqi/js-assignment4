// var str = "The quick brown fox jumps over the lazy dog"
// var find = 'the'

// for(var i = 0; i < str.length; i++){
// console.log(str.slice(i, i + find.length))
// }



// // question 2
// var username = 'hajra ashraf'
// var result = ""

// for(var i = 1; i < username.length; i++){
//     if(username[i] === " "){
//        result += " " + username[i + 1].toUpperCase()
//        continue
//     }else{
//        result += username[i]
//     }
// }
// console.log(result)


// // ----------------------- question 3 -------------------------
// var today = new Date()
// var months = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']

// document.write(today, '<br> <br>');
// document.write('current month is ' ,months[today.getDay()], '<br>')

// // ---------------------question 4 -----------------------
// var today = new Date()
// var months = ['sun','mon', 'tue', 'wed', 'thur', 'fri', 'sat']
// if(months[today.getDay()] === 'sat' ||months[today.getDay()] === 'sat' ){
//     document.write('today is fun day')
// }

// ---------------------question 5 -----------------
var todayDate = new Date()
if(todayDate.getDate() < 16){
    document.write("First fifteendays of the month ", '<br> <br>')
}else{
    document.write('Last days of the month', '<br> <br>')
}

// -------------------question 6 ---------------------
var currentDate = new Date()
var millsSince = currentDate.getTime()
document.write(`${currentDate.toLocaleTimeString()} <br> <br>`)
document.write(`Elapsed milliseconds since January 1, 1970: ${millsSince} <br>`)
document.write(`Elapsed minutes since January 1, 1970: ${millsSince * 60} <br> <br> <br>`)

// --------------------- question 7 --------------------------
var time = new Date()
if (time.getHours() < 19) {
   document.write("Morning",  "<br> <br>");
  } else {
   document.write("Night", "<br>");
  }


//   --------------------question 8 -------------------
var laterDate = new Date('2023, 12, 30')
document.write(laterDate ,"<br> <br>");

//   --------------------question 9 -------------------
var ramzanPastDays = new Date('2024 Mar 5')
var currentDay = new Date()
var differenceInTime = currentDay.getTime() - ramzanPastDays.getTime()
console.log(Math.floor(differenceInTime / (1000 * 60 * 60 * 24)));
document.write(`${differenceInTime} Days have passed since ${ramzanPastDays.toDateString()} <br> <br> <br>`)

// -------------------question 10--------------------
var endDate = new Date('2023-12-30').getTime()
var myDate = new Date().getTime()
var calcu = Math.floor((myDate - endDate) / 1000 / 60 / 60 / 24)
console.log(calcu );


// -------------------question 11--------------------
var currentDate = new Date()
document.write(`Current Date: ${currentDate.toLocaleString()}  <br>`)

currentDate.setHours(currentDate.getHours()-1)
document.write(`1 Hour Ago: ${currentDate.toLocaleString()}  <br><br><br>`);

// -------------------question 12--------------------
var now = new Date()
document.write(`Current Date: ${now.toLocaleString()}  <br>`)

now.setFullYear(now.getFullYear() - 100)

document.write(`100 Year Ago: ${now.toLocaleString()}  <br><br><br>`);


// -------------------question 13--------------------
var age = 16
var latestDate = new Date()
console.log(latestDate.getFullYear() - age)
console.log(latestDate);
document.write(`Your birth year is: ${latestDate}  <br>`)

