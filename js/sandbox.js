// const blogPost = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
// const url = 'https://dog.ceo/api/breeds/image/random';
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(blogPost),
// };
// fetch(url, options)
//     .then(/* post was created successfully */)
//     .catch(/* handle errors */);


fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => $("#dogs".html(res)))
    .catch(err => console.log(err))

fetch(" https://jsonplaceholder.typicode.com/" {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify() {

    }
})
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))