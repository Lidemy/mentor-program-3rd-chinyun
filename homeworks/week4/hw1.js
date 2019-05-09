const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books', (error, response, body) => {
  const json = JSON.parse(body);
  for (let i = 0; i < 10; i += 1) {
    const number = i + 1;
    console.log(`${number} ${json[i].name}`);
  }
});

console.log('it is running');
