"use strict";
    // for (var i = 1; i < 100; i++) {
    //
    //     if (i % 2 !== 0) {
    //         // number isn't even
    //         // odd numbers aren't as cool
    //         // skip the rest of the loop and continue with the next iteration
    //         continue;
    //     }
    //
    //     console.log('Here is a lovely even number: ' + i);
    // }
//}
// let i = i * 2;
// while(i % 2 !== 0){
//         continue
//
// }
// ignor everything bove this line 👈👈👈👈👈👈👈👈👈👈👈👈👈👈
/*


While Loops
Create a file named while.js in the js directory.

    Create a while loop that uses console.log() to create the output shown below.

    Copied to clipboard
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
*/
let g = 2

while (g <= 65540){

    console.log("finally!" + g);
    //i = i * i;
   // i = i **2;
    g = g * 2;
}
//////                         🍦🍦🍦🍦🍦🍦🍦  the cones question  do-while loops   🍦🍦🍦🍦🍦🍦🍦🍦
/*
An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

 */

var allCones = Math.floor(Math.random() * 50) + 50;
let x = allCones;
//let y = Math.floor(Math.random() * 5) + 1;

do {
    let y = Math.floor(Math.random() * 5) + 1;
    if (x > 0 && x >= y) {
        x = x - y;
        console.log(`you sold ${y}, still got a ${x} more cones to sell`);
    }
    else if(y > x)
    {
        console.log("yooo you got " + y + " now you only got " + x );
    }

    //x >= 50 && x <= 100 && y <= 5

} while(x > 0);
console.log("we good for the day?");

