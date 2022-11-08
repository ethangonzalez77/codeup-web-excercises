const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

/** 2-Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.*/

// let threeLanguages = users.filter(function (l) {
//     return l % 2 === 0;
// })
// console.log(threeLanguages);

const result = users.filter(word => word.languages.length >= 3);
console.log(result);



/** 3-Use .map to create an array of strings where each element is a user's email address*/

var onlyEmails = users.map(function(user) {
    return user.email;
});
console.log(onlyEmails);


/** 4-Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.*/

const totalYears = users.reduce((total, person) => {
    return total + person.yearsOfExperience;
}, 0);
console.log(`${totalYears / users.length}`);




/** 5-Use .reduce to get the longest email from the list of users.*/

// const longestEmail = user.reduce((long,short) => long.email > short.email.length ? long : short).email
// // {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}
// console.log(longestEmail)

const listOfNames = users.reduce(function (previousValue, currentValue) {
    if (previousValue.email.length > currentValue.length) {
         currentValue = previousValue.email
    }
    return number;
}, "")



console.log(listOfNames)



/** 6-Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
 */
const listOfNames = users.reduce((number, user) => {return number += `${user.name}`});

console.log(listOfNames)





