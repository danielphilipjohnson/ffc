const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
 
(async () => {

    const sourceImages = await imagemin(['source-images/*.{jpg,jpeg,png}'], {
        destination: 'img/',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    console.log("Processing sourceImages");


    const courseLogos = await imagemin(['source-images/course-logos/*.{jpg,png}'], {
        destination: 'img/course-logos',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });

    console.log("Processing courseLogos");

    const dataVis = await imagemin(['source-images/data-vis/*.{jpg,png}'], {
        destination: 'img/data-vis',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    console.log("Processing dataVis");

    const frontEnd = await imagemin(['source-images/front-end-lib/*.{jpg,png}'], {
        destination: 'img/front-end-lib',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    console.log("Processing frontEnd");


    const logos = await imagemin(['source-images/logos/*.{jpg,png}'], {
        destination: 'img/logos',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    console.log("Processing logos");


    const microservice = await imagemin(['source-images/microservice/*.{jpg,png}'], {
        destination: 'img/logos',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    console.log("Processing microservice");


    const projects = await imagemin(['source-images/projects/*.{jpg,png}'], {
        destination: 'img/projects',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });

    console.log("Processing projects");


    const responsive = await imagemin(['source-images/responsive-img/*.{jpg,png}'], {
        destination: 'img/responsive-img',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.7]
            })
        ]
    });
    console.log("Processing responsive");


})();