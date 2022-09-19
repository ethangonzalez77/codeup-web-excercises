alert("sup");
function showMultiplicationTable(x) {

    var random1 = x;
    var num1 = 1;
    for (var i = 0; i < 10; i++) {
        console.log((random1 + " x " + num1 + " = " + (random1 * num1++)));
    }
}

// var randomGenerator = Math.floor(Math.random() * (100 - 20) + 1) + 20:
// for (var i = 0; i < 10; i++){
//
// }


        for (var i = 0; i < 10; i++) {


            var randomNum = Math.floor(Math.random() * (100 - 20) + 1) + 20;
            if (randomNum % 2 === 0) {
                console.log((randomNum + " is your random number is even!"));;
            }
            else {
                console.log((randomNum + " is your random number is odd!"));;
            }
        }

        for (var x = 0; x < 1000000000; x++) {
            if (x === 1 || x === 22 || x === 333 || x === 4444 || x === 55555 || x === 666666 || x === 7777777 || x === 88888888 || x === 999999999) {
                console.log(x);
            }
        }

             //function showMulti2() {
            for (var i = 100; i >= 5; i -= 5) {
                console.log(i);
            }
            ;

           // }

    // for (var i = 0, j = 100; i < 10; i++, j--) {
    //     console.log('for loop iteration #' + i + ', j = ' + j);
    // }







        // console.log('for loop iteration #' + i);
        // for (var i = 0, j = 9; i < 10; i++, j--) {
        //     console.log('for loop iteration #' + i + ', j = ' + j);
        // }

//     }
// }
//
// let password = prompt ("what's your password?")
// while(password === "wong"){
//     alert "yooo you got the password right!";
// }
// let boolean = true
// do {
//     alert("this is a do-while test!);
// } while(boolean)
// let fullName = "kenneth";
// for (let i = 0; i < fullName.length; i++){
//     alert("here's a letterfrom your namr :" + fullName[i]);
//