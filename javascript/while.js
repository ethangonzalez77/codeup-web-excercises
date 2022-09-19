//for (var i = 0; i < 65540; i++) {


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
let i = 2

while (i <= 65540){

    console.log("finally!" + i);
    //i = i * i;
   // i = i **2;
    i = i * 2;
}
// the cones question

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

