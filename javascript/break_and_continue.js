 chooseNum = prompt("pick an odd number between 1 and 50");
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



 //prompt for choosing a number 1-50
 //use loop and br and break to keep prompting user for ineak to keep prompting user for invalid input
 //use loop and continue to output all odd numbers betweeen 1-50

 let chooseNum;
 for (let i = 1;; i++){
     chooseNum = prompt("pick an odd number between 1 and 50");
     if(chooseNum % 2 !== 0){

     }
     break;
 }






 let loopNuM = (chooseNum % 2);

 for(let i = 1; i < 50; i++) {

    if (loopNuM !== 0 ){
        console.log("you got an odd number" + loopNuM);
        break;
    }
    else {
        console.log("looks like you got an ever number" + loopNuM);
    }
 }



 for(let i = 1; i < 50; i++) {

     if (i === chooseNum) {
         console.log("skip this 👉 " + i);
         continue;
     } else if (i % 2 !== 0) {
         console.log("this " + i + "is an odd number");
     }
 }











