
// let oddNum
// while(1) {
//     oddNum = prompt('Please enter an odd number between 1 and 50')
//     if(oddNum > 50 || oddNum < 0  || oddNum % 2 == 0){
//         alert("Number not valid")
//     }
//     if(oddNum % 2 > 0 && oddNum < 50) break
// }
//
// /*
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//  */
// for(let i = 0; i < 50;i++){
//     if(i == oddNum) {
//         console.log(`Yikes! Skipping number: ${i}`)
//         continue
//     }else if(i % 2 > 0) {
//         console.log(`Here is an odd number: ${i}`)
//     }
// }

////          ignore everything above this line 👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

 //prompt for choosing a number 1-50
 //use loop and br and break to keep prompting user for ineak to keep prompting user for invalid input
 //use loop and continue to output all odd numbers betweeen 1-50
let chooseNum = prompt("pick an odd number between 1 and 50");
let enteredNum = (chooseNum % 2);



 for (let i = 1;i < 3; i++){

     if(enteredNum !== 0){
        alert("you got odd number: " + chooseNum)
         break;
     }
     else {
         alert(chooseNum + " is not valid");
     }
 }


//let chooseNum2 = prompt("pick an odd number between 1 and 50");//   ignore this specific line 👈👈👈👈👈👈👈👈👈

 for(let i = 1; i < 50; i++) {

     if (i % 2 === 0) {
         console.log("ewwwww an even number, skip this 👉 " + i);

         continue;
     }
     else if (i % 2 !== 0) {
         console.log("this " + i + " is an odd number");
     }
 }











