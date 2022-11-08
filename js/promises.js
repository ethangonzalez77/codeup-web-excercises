
const baseUrl = 'https://api.github.com/users/';

const promiseToken = gitHubPromiseKey






const lastCommit = userName => {
  fetch(`${baseUrl}${userName}/events/public`, {headers: {"Authorization":"token " + promiseToken}})
      .then((response) => response.json())
      .then((response) => {
          console.log(response[0].created_at);
          console.log(response)
          return response[0].created_at
      });
}
lastCommit("ethangonzalez77");




function wait (num) {
    return new Promise(resolve => setTimeout(resolve, num))
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));














// these are just notes 👇👇👇👇👇👇👇👇👇👇

// doSomething(function (result) {
//     doSomethingElse(result, function (newResult) {
//         doThirdThing(newResult, function (finalResult) {
//             console.log(`Got the final result: ${finalResult}`);
//         }, failureCallback);
//     }, failureCallback);
// }, failureCallback);



//
// doSomethingCritical()
//     .then((result) =>
//         doSomethingOptional(result)
//             .then((optionalResult) => doSomethingExtraNice(optionalResult))
//             .catch((e) => {})
//     ) // Ignore if optional stuff fails; proceed.
//     .then(() => moreCriticalStuff())
//     .catch((e) => console.error(`Critical failure: ${e.message}`));
//
//










