const request = require('request');

request.get({
  headers: { 'Client-ID': 'se9osa50irrxr8s19mtug6zr3wymtn' },
  url: 'https://api.twitch.tv/helix/games/top',
},
(error, response, body) => {
  if (error) {
    console.log(error);
  }
  const json = JSON.parse(body);
  for (let i = 0; i < json.data.length; i += 1) {
    console.log(`${json.data[i].id} ${json.data[i].name}`);
  }
});

console.log('it is running');
