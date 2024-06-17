import * as cheerio from 'cheerio';
// const fetchImages = async () => {
//     let count = 0;
//     for (let i = 67237; i > 67137 && count < 10; i--) {
//         console.log(`Fetching image with ID: ${i}`);
//         let response = await fetch("https://cleanmemes.com/");
        
//         response = await response.text();
//         const $ = cheerio.load(response);
//         let img = $(`figure.wp-block-image > img[data-attachment-id='${i}']`);
//         if (img.attr('src')) {
//             console.log(img.attr('src'));
//             console.log(`Found image: ${img.attr('src')}`);
//             count++;
//         }
//     }
// };

// fetchImages();

for(let i = 4827121; i>4827111;i--){
    let response = await fetch(`https://www.theduckwebcomics.com/Phineus_Magician_for_Hire/${i}/`);
    response= await response.text();

    const $ = cheerio.load(response);
    let img = $('#comic>img');
    console.log(img.attr('src'));
}