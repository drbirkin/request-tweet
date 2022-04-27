import {API_URL, BEARER_TOKEN} from './config.js';
import {getJSON} from './helper.js';



// import { TwitterApi } from 'twitter-api-v2';

// const twitterClient = new TwitterApi(BEARER_TOKEN);
// const roClient = twitterClient.readOnly;



export const state = {
    allheros: [],
    searchResults: []
}

export const getAllHeros = async function () {
    try {
        // const data = await getJSON(`${API_URL}/all?max_results=20`);
        // console.log(data);
        const url = '/.netlify/functions/tweets';
        const data =  await fetch (url);
        const tweets = await data.json();
        console.log(tweets);

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
};