// 1.Given an array of numbers, use .forEach() to loop and print all the numbers individually in the array.
const numbers = [1, 2, 3, 4];
function myfunc(i){
    console.log(i)
}
numbers.forEach(myfunc)


// 2.   Create an array with called coolCars and give it the following value: ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']
// Now to manipulate the arrays. ;)
let coolCars = ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']
// 3. Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays
coolCars.splice(3,1,"Lamborghini")
// 4. Use a for loop to loop through the array, and console.log every value inside of the array.
for (car of coolCars){
    console.log(car)
}
// 5. Reverse the array and console.log the reversed array.
let reversedArray = coolCars.reverse()
console.log(coolCars.reverse());
//OR
console.log(reversedArray);

// 6. Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]
let kwaicar=coolCars.pop()
console.log(coolCars);
// 7. Now write the code to use the variable you made in no.6 and add it to the FRONT of the array. Your coolCars array should now look like:
// [ 'Mercedes', 'BMW', 'Bugati', 'Ferrari', 'Lamborghini']
coolCars.splice(0,0,kwaicar)
console.log(coolCars);


// NEW

// 2:02
// 8. Write a simple conditional statement that will check if someone is younger than 18 or older than 18. The variable will be called age = 18 then a=17 to check.
let age = 18
let a = 18
if (a==18 && a>=18){
    console.log("18")
}else if(a>=18){
    console.log("Older than 18")
}
else{
    console.log("Younger than 18")
}
// 9. Make use of a switch statement and create a possible soultion for no.8
switch (true) {
    case a==18:
        console.log("18")
        break;
    case a>=18:
        console.log("Older than 18")
        break;
    default:
        console.log("Younger than 18")
        break;
}
let count = 0
// 10. USE while or a do while loop to print out the array of Question2(coolCars).(Don't crash your pc lol)
while (count < coolCars.length) {
    console.log(coolCars[count]);
    
count++
}