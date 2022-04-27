import * as model from './model.js';

const backgroundImagesControl = async function () {
    // const allHeros = await model.getAllHeros();
    await model.getAllHeros();
    // let index = 0;
    // allHeros.forEach((img) => {
    //     if(index > 6) index = 0;
    //     const markup = BackgroundView._generateMarkup(img, index, index%2 === 0 ? true : false);
    //     BackgroundView._render(markup, index);
    //     BackgroundView._addBgPicSet(img, index);
    //     index++;
    // })
    // console.log(allHeros);
}

const init = async function () {
    await backgroundImagesControl();
}

init ();