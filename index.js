/* console.log("Hello, World!");
console.log("This is a JavaScript trial.");*/

//window.alert("Welcome to the website!");
//window.alert("Enjoy your stay!");

//this is a comment
/*
 this is a multi-line comment
 that spans multiple lines
*/
/*document.getElementById('mytitle').innerHTML="<b>Welcome to my website!</b>";
document.getElementById('myparagraph').textContent="This is a sample paragraph.";

let x;
x=100;
console.log(x);

//variables

let y=200;
console.log(y);

let age=25;
console.log(age)

 //use backticks when writing paragraphs inside console.log

console.log(`you are ${age} years of age`);

console.log(typeof age) //im now declaring the datatype of age which is a number

//strings

let firstname="bisrat"
let favouritefood="chicken"
let random="123bisrateskeatnaf"

console.log(typeof firstname)
console.log(firstname)
console.log(`your name is ${firstname}`)
console.log(`you like ${favouritefood} fucknigga`)
console.log(`random ${random}`)
console.log(typeof random)

//booleans

let online=true
let isstudent=true

console.log(`bro is online : ${online}`)
console.log(`is this student enrolled : ${isstudent}`)
*/
/*
let fullname= 'bisrat'
let age= 23
let student='false'
let detail="consistent"

document.getElementById('h1').innerHTML=fullname;
document.getElementById('p1').innerHTML=age
document.getElementById('p2').innerHTML=`enrolled : ${student}`
document.getElementById('p3').innerHTML='<b> hello there <b/>'

//whenever you are trying to call a variable in js use the backticks ``
document.getElementById('p4').innerHTML=`your are very ${detail}`

//arthimetic operators =(operands(values ,variables), operators(+,-,*,/,%))

let students=31;
/*
students=students+1
students=students-1
students=students*2
students=students/2
students=students**2 //exponent operatior

*/

//augemented assignemnt operators
/*
students += 4
students-=1
students*=3
students**=2
students%=5
students++
let extrastudents=students%3

console.log(extrastudents)

console.log(students)

*/
/*operators precedence
1.parenthesis
2.exponents
3.multiplication and division and modulus
4.addition and subtraction
*/
/*
let result= 2+3*4-5/2
console.log(result)
*/
//how to accept a user input in js 
//window prompt
//html textbox

/*let username

username=window.prompt('whats your username')
console.log(username)
*/
/*
let username

document.getElementById('mysubmit').onclick=function(){
username= document.getElementById('inputid').value
console.log(username)
document.getElementById('idheader').textContent=`welcome ${username}`

}

//type conversion(string to number, number to string, string to boolean, boolean to string, number to boolean, boolean to number)
let mystring="123"
mystring=Number(mystring)
mystring+=1

console.log( mystring)



*/


/*
let descriptions
document.getElementById('descriptionbutton').onclick=function(){
    descriptions=document.getElementById('input2').value
    console.log(descriptions)
    document.getElementById('descriptionh3').textContent=`your description is ${descriptions} `
}


//const:a variable that cant be changed
/*
let pi=3.14
let radius
let circumference;

radius=window.prompt('enter your radius')
radius=Number(radius)
circumference=2*pi*radius
console.log(circumference)
*/
/*
let circleradius
const PI=3.14
let circumference


document.getElementById('circlebutton').onclick=function(){
    circleradius=document.getElementById('radiusinput').value
    circleradius=Number(circleradius)
    circumference=2*PI*circleradius
   
    document.getElementById('circleh3id').textContent=`your circumference of the circle is ${circumference}cm`

}


//counter program
let count=0
document.getElementById('increaseid').onclick=function(){
    count++;
    console.log(count)
    document.getElementById('counterheader').textContent=count
}
document.getElementById('resetid').onclick=function(){
    count=0
    document.getElementById('counterheader').textContent=count
}
document.getElementById('decreaseid').onclick=function(){
    count--
    document.getElementById('counterheader').textContent=count
}

//math:
//console.log(Math.PI) ceil rounds up while floor rounds down
//trunc removes any decimal values
//pow is used to raise a number to a power
//sqrt is used to find the square root of a number
//log is used to find the logarithm of a number
//sin,tan,cos are used to find the trigonometric values of a number
//sign will make any number 1 except 0 
//max and min are used to find the maximum and minimum values of a set of numbers
*/
/*
let dice1
let dice2
let dice3
const min=1
const max=6

document.getElementById('rolldices').onclick=function(){
    dice1=Math.floor((Math.random()*6)+1)
    dice2=Math.floor((Math.random()*6)+1)
    dice3=Math.floor((Math.random()*6)+1)

document.getElementById('roll1').textContent=dice1
document.getElementById('roll2').textContent=dice2
document.getElementById('roll3').textContent=dice3
    

}
*/

/*if statements*/
/*

let age;
document.getElementById('agebuttonid').onclick=function(){
    age=document.getElementById('ageid').value
    if(age>=100){
        document.getElementById('agetext').textContent='you cant see bitchnigga'
    }
    else if(age>=18){
        document.getElementById('agetext').textContent="you are old enough to drive"
    }
    else if(age == 0){
          document.getElementById('agetext').textContent='you aint eligible to drive.you were just born'
        
    }
    else if(age < 0){
        document.getElementById('agetext').textContent='age cant be negative'
    }

    else{
          document.getElementById('agetext').textContent='you arenot eligible to drive'
    }
    
}
*/
//checked:it gives u a boolean value of true or false depending on whether the checkbox is checked or not
/*
document.getElementById('submitpaymentid').onclick=function(){
    if(checkboxid.checked){
        document.getElementById('subscribeid').textContent=`you are subscribed`
        console.log('you are subscribed')
    }
    else{
        document.getElementById('subscribeid').textContent=`you are NOT subscribed`

    }
    if(visaid.checked){
        document.getElementById('paymentid').textContent='you are paying with visa'
    }
    else if(mastercardid.checked){
        document.getElementById('paymentid').textContent='you are paying with mastercard'
    }
    else if(usdtid.checked){
        document.getElementById('paymentid').textContent='you are paying with usdt network'

    }
    else{
        document.getElementById('paymentid').textContent='you have not selected any payment method'
    
    }

}
 */

//terminal operator(shortcut to if else statements)
let age=12
let messages= age>=18?'you are an adult':'you are a minor'
console.log(messages)

let time=16
let message= time>=17? 'way past yr bedtime':'the night is young'
console.log(message)

let isStudent=true
let school= isStudent?'you are indeed a student':'you aint a student'
console.log(school)

let purchase=150
let discount=purchase>=120? 10:0
console.log(`your total is ${purchase-purchase*(discount/100)}`)


//switch:can be an efficient replcement to many else if statements
let day =5

switch(day){
    case 1:
        console.log('this is monday')
        break;
    case 2:
        console.log('this is tuesday')
        break
    case 3:
        console.log('this is wednesday')
        break
    case 4:
        console.log('this is thursday')
        break
    case 5:
        console.log('this is friday')
        break
    default:
        console.log(`${day} ?? are u joking `)
        break
}
let score=55
let lettergrade;

switch(true){
   case score>=90:
    lettergrade='a'
    break
    case score>=80:
    lettergrade='b'
    break
    case score>=70:
    lettergrade='c'
    break
    case score>=60:
    lettergrade='d'
    break
    case score>=50:
    lettergrade='f'
    break

}
console.log(lettergrade)
//string methods:allows you to manipulate and work with strings
let username='bisrat'
console.log(username.charAt(0))//shows what character is in the index 0
console.log(username.indexOf('b'))//shows the characters index
console.log(username.lastIndexOf('a'))//
console.log(username.length)
console.log(username.startsWith('b'))//checks if the string starts with a certain character,boolean value
console.log(username.endsWith('t'))//checks if the string ends with a certain character,boolean value
console.log(username.toUpperCase())//converts the string to uppercase

let usernames='bisrat eskeatnaf'
result=usernames.includes(' ')//endswith startwith checking 
if(result){
    console.log('string does include space')
}
else{
    console.log('string doesnt include space')
}
//replaceall - replaces any character in the string
let bisratname='bisrat-eskeatnaf'
bisratname=bisratname.replaceAll('-','')
console.log(bisratname)
/*
//padstart - allows you to manipulate strings 
let namey='bisrat eskeatnaf'
namey=namey.padStart(20,'0')//padend - add characters to the end of a string
console.log(namey)
//stringslicing-cutting a string into smaller parts
let mystring='bisrat eskeatnaf'
mystring=mystring.slice(0,6)//slice(startindex,endindex)
console.log(mystring)
*/
const stringslicing='bisrat eskeatnaf'
let sliceone=stringslicing.slice(0,stringslicing.indexOf(' '))
let slicetwo=stringslicing.slice(stringslicing.indexOf(' ')+1)

console.log(sliceone)
console.log(slicetwo)

const slicingemail='bisrateskeatnaf7@gmail.com'
let firstemail=slicingemail.slice(0,slicingemail.indexOf('@'))
let lastemail=slicingemail.slice(slicingemail.indexOf('@'))
//if you are pointing at space so u add space one
console.log(firstemail)
console.log(lastemail)

//method chaining:calling one method after another
     //in one continous line of code 
//say i wanted the first letter of a string to be capitalized and the rest to be lowercase
/*
let usersname=window.prompt('enter your username : ')
usersname=usersname.trim().charAt(0).toUpperCase() + usersname.trim().slice(1).toLowerCase()
console.log(usersname)
*/

//logical operators =and &&,or ||,not!
let isOnline=true
if(isOnline && age>=18){
    console.log('you are online and you are an adult')
}
else if(isOnline || age>=18){
    console.log('you are online or you are an adult')
}
else{
    console.log('you are not online and you are not an adult')
}
let sunny=false
if(!sunny){
    console.log('it is cloudy')
}
else{
    console.log('it is sunny')

}
//= assignemnt operator
//== equality operator
//=== strict equality operator(compares both value and datatype)
//!= not equal operator
//!== strict not equal operator

//while loop : runs the loop until the condition is met
/*
let inputname=''
while(inputname===''){
   inputname=window.prompt('enter your username')
}
console.log(`your name is ${inputname}`)
*/

//for loop
for(let i=0;i<5;i++){
console.log(`this is iteration number ${i}`)
}
for(let i=1;i<=6;i++){
    if(i==3){
        continue;//break :gets u out of the loop
    }

    console.log(i)
}

//number guesing game

//if the min number is greater than one make sure to add the last +minnumber in there if not u can leave it
/*
let minnumber=1
let maxnumber=100
let answer=Math.floor(Math.random()*(maxnumber-minnumber+1)+minnumber)
attempts=0
let running=true
while(running){
    guess=window.prompt(`guess a number between ${minnumber} - ${maxnumber}`)
    guess=Number(guess)
    attempts++
    if(guess<answer){
        window.alert('your answer is too low')
    }
    else if(guess>answer){
        window.alert('your answer is too high')
    }
    else{
        window.alert(`congratulations!your answer is correct.you attempted ${attempts}times`)
        running=false
    }
*/
//function : reusable code
function happybirthday(username,age){//these are parameters
    console.log('happy bd')
    console.log('happy bd')
    console.log(`happy bd ${username}`)
    console.log(`you are ${age} years old `)
//parameters should match up with the arguments
}
happybirthday('bisrat',23)//the ones in the bracket are called arguments
happybirthday('guy',12)

function add(x,y){
    result=x+y
    return result
}
let answer=add(2,3)
console.log(answer)

function sub(x,y){
    subresult=x-y
    return subresult
    //return x-y
}
let subs=sub(5,2)
console.log(subs)

function multiply(x,y){
    return x*y
}
let resultmultiply=multiply(2,3)
console.log(resultmultiply)

function iseven(number){
    if(number%2===0){
        return true
    }
    else{
        return false
    }
    //return number % 2 === 0 ?true:false
}

console.log(iseven(5))

function isvalidemail(email){
    if(email.includes('@')){
        return true
    }
    else{
        return false
    }

    //email.includes('@') ? true:false

    
}
console.log(isvalidemail('bisrat@gmail.com'))
console.log(isvalidemail('bisrateskeatnaf7'))//false

//variable scope:the area in which a variable is accessible
//local and global variables
//local :variables that are declared inside a function
//global:variables that are declared outside a function
//local example
/* function1(){
   let x=2
   console.log(x)
   }
   function2(){
   let x=2
   console.log(x)}

   function(1)
   */
//global variables
/* let x=2
function1(){
console.log(x)
function2()
console.log(x)
}
*/
/*

const inputtemp=document.getElementById('tempid')
const farenheit=document.getElementById('farenheit')
const celsius=document.getElementById('celsius')
const submittemps=document.getElementById('submittemps')
const tempparagraph=document.getElementById('tempparagraph')
let temprature

submittemps.onclick=function(){
    if(farenheit.checked){
       temprature=Math.floor((inputtemp.value-32)*5/9)
       tempparagraph.textContent=temprature
    }
    else if(celsius.checked){
      temprature=Math.floor((inputtemp.value*9/5)+32)
      tempparagraph.textContent=temprature
    }
    else{
         tempparagraph.textContent='you have clicked nothing!'
    }
}
    */

//array: a variable like structure that can hold more than 1 value

let fruits=['apple','mango','banana','orange']
fruits.push('orange')//adds an element to the end of the array
fruits.pop()//removes the last element of the array
fruits.shift()//removes the first element of the array
fruits.unshift('grape')//adds an element to the beginning of the array
console.log(fruits)

let numoffruits=fruits.length//gives the number of elements in the array
console.log(numoffruits)
/*
for(i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
    */
//enhanced for loop
for(let fruit of fruits){
    console.log(fruit)
}
//spread operator:allows you to expand an array into individual elements
let numbers=[1,2,3,4,5]
console.log(...numbers)//1 2 3 4 5

//rest operator:allows you to collect multiple elements into an array
function sum(...numbers){
    let total=0
    

}
