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
var txt = `In 2017, I started my journey with web development, enrolling first with Code Academy, then later progressed to 
udacity for Front-End and Full-stack Developer. I continued to further my knowledge by enrolling in Free Code Camp, 
which included building an extensiabout Algorithms and APIs and microservices. While taking this course, I grew 
to enjoy using React JS over other JS frameworks as I built a markdown viewer and a drum machine. After 
completing the code camp; I started to build a portfolio on Github demonstrating my skills and 
adaptability. The GitHub repository contains various CSS frameworks (Bootstrap 3.3, Bootstrap 4, 
  Materialize-CSS, semantic Ui), Preprocessors(Sass, Less), Package Managers(NPM, Yarn), 
  Module Loaders(parcel.js, webpack) and task runners(Gulp, Grunt). Now I am ready to 
  pursue a career as a junior developer, to hone my skills in a professional setting. 
  I am looking for a team that can accelerate my growth and fuel my aspirations to become a 
  professional developer. Feel free to contact me privately, to discuss my availability. I 
  am also looking for opportunities to collaborate with others on Responsive web applications. 
`;
bio.add(txt);

bio.addImage("./img/profile-sm.png", "Daniel johnson");


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

bio.addWork(jobs);



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
        imageSrc: "./img/responsive-img/portfolio.png",
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
        imageSrc: "./img/front-end-lib/simon.png",
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

work.iterate(projects);


contact = new Contact();
contact.addEmail("daniel-philip-johnson@gmail.com");

contact.addPhone("(555) 555-5555");
contact.addFrom("Liverpool");


function footer() {
    var year = new Date().getFullYear();
    var txt = $("#main-footer").text();
    $("#main-footer").text(txt + year);
}

footer();