const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const request = require('request');

console.log('Running...');

let url = 'https://portal.freightmonster.com/api/v2/loads';

request.get(
    {
        url: url,
        json: true,
        headers: { 'User-Agent': 'request' }
    },
    (err, res, data) => {
        if (err) {
            console.log('Error:', err);
        } else if (res.statusCode !== 200) {
            console.log('Status:', res.statusCode);
        } else {
            // console.log({ data });
            console.log(typeof data);
            let loadNumbers = data.map((load) => {
                return load.load;
            });
            console.log({ loadNumbers });
            console.log('count', data.length);
        }
    }
);

// fetchUrl(
//     'https://portal.freightmonster.com/api/v2/loads',
//     (error, meta, body) => {
//         console.log({ error });
//         console.log({ meta });
//         console.log('body', body.toString());
//         console.log('count', body.json());
//     }
// );
console.log('Shutting down');
