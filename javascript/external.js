console.log ("Hello from external JavaScript");

//----favorite color test
alert("Welcome to my Website!");
const favColor = prompt ("what's your favorite color?");

alert("dope, your favorite color is:" + favColor);
/*q1
You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay? */

const lilMermaid = 3
const brotherBare = 5
const hercules = 1
const pricePerMovie = 3

const lilM = prompt("how many days for little mermade?");
const brotherB = prompt("how many days for brother bear?");
const herc = prompt("how many days for hercules?");

const total = (lilMermaid + brotherBare + hercules) * pricePerMovie;
alert("your total is $" + total);
/* q2
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */
const googlePay = 400;
const amazonPay = 380;
const metaPay = 380;
const hourGooglePay = prompt("how many hours at google you got?");
const hourAmazonPay = prompt("how many hours at amazon you got?");
const hourMetaPay = prompt("how many hours at meta you got?");
const payTotal = (googlePay*hourGooglePay) +
    (hourAmazonPay*amazonPay) + (hourMetaPay*metaPay);

alert( payTotal);
/*q3
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
 */
const classFull = confirm ("is class full?");
const schedualConflictList = confirm ("does your schedual conflict with class time?")
const canEnroll = !classFull && !schedualConflictList;
alert("can you enroll in class?" + canEnroll);
/*q4
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
 */
const drinksBought = Number.parseInt(prompt("how many drinks have you bought?"));
const offerExpired = confirm("has the offer expired?");
const preiumMember = confirm("are you a preium member?");

const drinksBoughtOrPreiumMem = (drinksBought > 2 || preiumMember);
const canBeAppllied = drinksBoughtOrPreiumMem && !offerExpired;
alert("can the offer be applied?" + canBeAppllied);















