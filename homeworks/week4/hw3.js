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
} else if (args[2] === 'delete') {
  const url = `https://lidemy-book-store.herokuapp.com/books/${args[3]}`;
  request.delete(url, (error, response) => {
    if (error) {
      console.log(error);
    } else if (response) {
      console.log('delete sucessfully');
    }
  });
} else if (args[2] === 'create') {
  const newBook = {
    name: args[3],
  };
  request.post({
    headers: { 'content-type': 'application/json' },
    url: 'https://lidemy-book-store.herokuapp.com/books',
    body: JSON.stringify(newBook),
  }, (error, response) => {
    if (error) {
      console.log(error);
    } else if (response) {
      console.log('create sucessfully');
    }
  });
} else if (args[2] === 'update') {
  const newName = {
    name: args[4],
  };
  request.patch({
    headers: { 'content-type': 'application/json' },
    url: `https://lidemy-book-store.herokuapp.com/books/${args[3]}`,
    body: JSON.stringify(newName),
  }, (error, response) => {
    if (error) {
      console.log(error);
    } else if (response) {
      console.log('update sucessfully');
    }
  });
}

console.log('it is running');
