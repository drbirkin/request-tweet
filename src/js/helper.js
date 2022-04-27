import {TIME_OUT, BEARER_TOKEN} from './config.js';

const fetch = require('node-fetch');

export const getJSON = async function (url) {
    try {

        const res = await Promise.race ([fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        }), timeout(TIME_OUT)]);
        // console.log(res);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
        // return data;
    } catch(err) {
        throw err;
    }
};

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
};

export const delay = function (handler, s) {
    setTimeout (
        handler, s
    );
}

export const randomNr = function randDelay(min, max) {
	return Math.floor(Math.random() * (max-min+1)+min);
}