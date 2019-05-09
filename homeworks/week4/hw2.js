const request = require('request');

const args = process.argv;
if (args[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books', (error, response, body) => {
    const json = JSON.parse(body);
    for (let i = 0; i < 20; i += 1) {
      const number = i + 1;
      console.log(`${number} ${json[i].name}`);
    }
  });
} else if (args[2] === 'read') {
  const url = `https://lidemy-book-store.herokuapp.com/books/${args[3]}`;
  request(url, (error, response, body) => {
    const json = JSON.parse(body);
    if (json.name === undefined) {
      console.log('there is no such id');
    } else {
      console.log(json.name);
    }
  });
}

console.log('it is running');
