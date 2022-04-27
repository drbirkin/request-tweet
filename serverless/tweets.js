// import { Client } from "twitter-api-sdk";


export const API_URL = 'https://api.twitter.com/2/tweets/search';
export const TIME_OUT = 10;
export const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAALHtbgEAAAAA%2FHWiArDUlBpbsfCxcd9iY137Uiw%3DeOMdXImORMJ4909AXn5JemavOTRiMHjwG6SudmPY2uja92zz9k';
export const KEY = 'NNtMMrb5HNvBg7KHh9a8BdF2f';
export const ACCESS_TOKEN = '1083592868810448896-eB68zOJiVjy7irJooMKqEFK6KD87YV';

const fetch = require('node-fetch');
// const client = new Client(BEARER_TOKEN);

exports.handler = async (event, context) => {
    try {

        const tweetStream = await fetch(API_URL, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        });

        const jsonSuccess = await tweetStream.json();
        // return {
        //     statusCode: 200,
        //     body: JSON.stringify(jsonSuccess)
        // };

        return jsonSuccess;


        // const data = await getJSON(`${API_URL}/all?max_results=20`);
        // console.log(data);

        // const jsTweets = await roClient.v2.searchAll('JavaScript', { 'media.fields': 'url' });
        // for (const tweet of jsTweets) {
        //     console.log(tweet);
        // }
        // await twitterClient.v1.tweet('Hello, this is a test.');
        // data.map(e => state.allheros.push(e.images.lg))
        // return state.allheros;
    }
    catch (err) {
        throw err;
    }
}