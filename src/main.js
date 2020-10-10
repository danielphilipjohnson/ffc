profileName = new ProfileName();

profileName.DisplayNameToDOM("Daniel Philip Johnson");

statement = new Statement();

statement.addStatement("Web Developer, Programmer, Designer & Linux Enthuastic");

var socialMediaLinks = [
    {
        socialMediaName: "twitter",
        link: "https://twitter.com/danielPhilipJo1"
    }, {
        socialMediaName: "facebook",
        link: "https://www.facebook.com/DanielPhilipJohnson"
    }, {
        socialMediaName: "linkedin",
        link: "https://www.linkedin.com/in/daniel-philip-johnson/"
    }, {
        socialMediaName: "github",
        link: "https://github.com/danielphilipjohnson/"
    },
];

profileIcons = new ProfileIcons();
profileIcons.addSocialLinks(socialMediaLinks);


var bio = new Bio();
var txt = `I completed Free Code Camp in February 15, 2019. Making websites started as a hobby in the past. However, after experiencing issues with my job during quaratine with covid
I started to take coursera courses and decided to pursue a career in web development. So recently I have been updating my old projects to make them more modern and to refresh my skills with Udemy courses.`;

// bio.add(txt);

// bio.addImage("./img/profile-md.jpg", "Daniel johnson");

var jobs = [
    {
        title: "123456 Webshop",
        position: "Full Stack Developer",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo"
    }, {
        title: "Designers ABC",
        position: "Front End Developer",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo."
    }, {
        title: "Webworks",
        position: "Graphic Designer",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo"
    },
];

// bio.addWork(jobs);



var work = new Work();

var projects = [
    {
        title: "ddd page",
        imageSrc: "./img/responsive-img/tributepage.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/LYGxOva",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/1.Tribute-Page",
        bit_bucket: false
    },
    {
        title: "survery form",
        imageSrc: "./img/responsive-img/surveryform.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/VwePrOo",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/2.Survey-Form",
        bit_bucket: ""
    },
    {
        title: "landing page",
        imageSrc: "./img/responsive-img/productlanding.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/MWKJONQ",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/3.Product-Landing-Page",
        bit_bucket: ""
    },
    {
        title: "technical documentation",
        imageSrc: "./img/responsive-img/technicaldocument.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/vYLgpBY",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/4.Technical-Documentation-Page",
        bit_bucket: ""
    }, {
        title: "personal portfolio",
        imageSrc: "./img/responsive-img/portfolio.jpg",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/yLegpeK",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage",
        bit_bucket: ""
    }, {
        title: "random quote machine",
        imageSrc: "./img/front-end-lib/quotemachine.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/bGEgaoo",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/1.%20Build%20a%20Random-Quote-Machine",
        bit_bucket: ""
    }, {
        title: "markdown viewer",
        imageSrc: "./img/front-end-lib/markdown.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/vYLgpjX",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/2.%20Build%20a%20Markdown%20Previewer",
        bit_bucket: ""
    }, {
        title: "drum machine",
        imageSrc: "./img/front-end-lib/drummachine.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/mdVRLam",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/3.%20Build%20a%20Drum%20Machine",
        bit_bucket: ""
    }, {
        title: "js calculator",
        imageSrc: "./img/front-end-lib/calculator.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/abdpKOv",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/4.%20Build%20a%20JavaScript%20Calculator",
        bit_bucket: ""
    }, {
        title: "pomodoro clock",
        imageSrc: "./img/front-end-lib/pomodoro.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/OJMWEXZ",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/5.%20Build%20a%20Pomodoro%20Clock",
        bit_bucket: ""
    }, {
        title: "local weather",
        imageSrc: "./img/front-end-lib/weatherapp.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/OJMWEQB",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Local-Weather",
        bit_bucket: ""
    }, {
        title: "recipe box",
        imageSrc: "./img/front-end-lib/recipebox.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/VwePBBR",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Recipe-Box",
        bit_bucket: ""
    }, {
        title: "simon",
        imageSrc: "./img/front-end-lib/simon.jpg",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/QWypLgY",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Simon",
        bit_bucket: ""
    }, {
        title: "tic tac toe",
        imageSrc: "./img/front-end-lib/tictac.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/gOPmYvK",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Tic%20Tac%20Toe",
        bit_bucket: ""
    }, {
        title: "twitch app",
        imageSrc: "./img/front-end-lib/twitchviewer.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/ZEQezmb",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Twitch.tv-JSON-API",
        bit_bucket: ""
    }, {
        title: "wiki viewer",
        imageSrc: "./img/front-end-lib/wikiviewer.png",
        alt: "",
        projectLink: "https://codepen.io/danielphilipjohnson/full/LYGWYBg",
        githubLink: "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/Legacy%20Projects/Wiki-Viewer",
        bit_bucket: ""
    },
];

// work.iterate(projects);


// contact = new Contact();
// contact.addEmail("daniel-philip-johnson@gmail.com");

// contact.addPhone("(555) 555-5555");
// contact.addFrom("Liverpool");


function footer() {
    var year = new Date().getFullYear();
    var txt = $("#year").text();
    $("#year").text(txt + year);
}

footer();