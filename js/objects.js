
(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

     //let person = new Object();


   let person = {
        firstName: "Ethan",
        lastName: "Gonzalez",
    };

    console.log(person.firstName);
    console.log(person.lastName);



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.greet = function () {
        return `Hello from ${person.firstName} + ${person.lastName}`;
    }


    console.log(person.greet());



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    //display name, og price, discount, and after discount
    // use for each loop to iterate through the array
    //console.log messages for each person


     console.log( shoppers );




        for(let i = 0; i < shoppers.length; i++) {
            let ogPrice = shoppers[i].amount;
            let afterMath = ogPrice * 0.12;
            if (shoppers[i].amount > 200) {
                console.log(`${shoppers[i].name} has a total of ${shoppers[i].amount}, now with the 12% discount it's ${afterMath}`);
            } else {           //
                console.log("no discount for you");
            }
        }





        /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

      let books = [
                   {
                      book: "dune",
                      author: {
                          firstName: "Frank ",
                          lastName: "Herbert",
                      },
                    },
            //__________________________________
                        {
                            book: "hunger games",
                            author:{
                                firstName: "Suzanne",
                                lastName: "Collins",
                            },
                        },
            //__________________________________
                        {
                            book: "harry poter",
                            author: {
                                firstName:"J. K. ",
                                lastName:"Rowling",
                        },
                            },
            //__________________________________
                        {
                            book: "lord of the rings",
                            author: {
                                firstName:"J. R. R. ",
                                    lastName: "Tolkien",
                            },
                        },
            //__________________________________
                        {
                            book: "game of thrones",
                            author: {
                                firstName: "George R.R.",
                                lastName: "Martin",
                            }
                        },
            //__________________________________
                        {
                            book: "The Catcher in the Rye",
                            author: {
                                firstName: "J.D",
                                lastName: "Salinger",
                            },
                        },

                        ];






    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for (let i = 0; i < 5; i++) {


            console.log("book number is # " + books.indexOf(i) );
            console.log("book title is : " + books[i].book );
            console.log("book author is # " + books[i].author.firstName + books[i].author.lastName);

    }




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();