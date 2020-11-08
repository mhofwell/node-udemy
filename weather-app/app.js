const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=51db1d692b4c5f27f2f7d0ace18616b3&query=37.8267,-122.4233';

function httpResponse(error, response) {
        const data = JSON.parse(response.body);
        console.log(data.current);
}

request({ url }, httpResponse);
