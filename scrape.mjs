import * as cheerio from 'cheerio';
const fetchImages = async () => {
    let count = 0;
    for (let i = 64146; i > 64106 && count < 10; i--) {
        let response = await fetch("https://cleanmemes.com/");
        response = await response.text();
        const $ = cheerio.load(response);
        let img = $(`figure.wp-block-image > img[data-attachment-id='${i}']`);
        if (img.attr('src')) {
            console.log(img.attr('src'));
            count++;
        }
    }
};

fetchImages();