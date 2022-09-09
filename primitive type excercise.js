typeof 99.9
'number'
typeof "false"
'string'
typeof false
'boolean'
typeof '0'
'string'
typeof 0
'number'
typeof true
'boolean'
typeof 'true'
'string'

/*
A term or phrase typed into a search box?
    -string
If a user is logged in?
    -boolean
A discount amount to apply to a user's shopping cart?
    -number
Whether or not a coupon code is valid?
    -boolean
An email address typed into a registration form?
    -string
The price of a product?
    -number
 */
----------------------------------------------------------
    /*
   Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
    */
/*    A product offer can be applied only if a person buys more than 2 items, and
the offer has not expired. Premium members do not need to buy a specific
amount of products

 */
const offerNotExpired = true;

const moreThan2 = true;

const isPremiumMember = false;

const offerCanBeApplied = offerNotExpired && (moreThan2 || isPremiumMember);

console.log (offerCanBeApplied);