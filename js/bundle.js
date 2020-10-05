function Bio() {}

Bio.prototype.add = function (txt) {
  if (txt == "") {
    var txt =
      `In 2017, I started my journey with web development, enrolling first with Code Academy, then later progressed to 
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
    $(".bio").append("<p>" + txt + "</p>");
    throw new Error("Bio can't be empty please include a bio");
  } else {
    $(".bio").append("<p>" + txt + "</p>");
  }
};

Bio.prototype.addImage = function (imageSrc, altTxt) {

    var aboutContainer = $(".about-info");
    var profileImg = $('    <img src="' + imageSrc + '" alt="'+ altTxt + '" class="bio-image">')

    aboutContainer.append(profileImg);
}
// make helper function
Bio.prototype.addWork = function (jobs) {
  var aboutContainer = $(".about-info");
  var jobContainer;
  for (var i = 0; i < jobs.length; i++) {
   
    jobContainer = $('<div class="job job-' + i + '"></div>');
    jobContainer.append("<h3>" + jobs[i].title + "</h3>");
    jobContainer.append("<h6>" + jobs[i].position + "</h6>");
    jobContainer.append("<p>" + jobs[i].about + "</p>");
    aboutContainer.append(jobContainer);
  }

  
};

function Contact() {};

Contact.prototype.addEmail = function (email) {
    $('#email').append('<span class="text-secondary">Email: </span>' + email);
}

Contact.prototype.addPhone = function (phone) {
    $('#phone').append('<span class="text-secondary">Phone: </span> ' + phone);
}
Contact.prototype.addFrom = function (from) {
    $('#from').append('<span class="text-secondary">From: </span> ' + from);
}

// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (! showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));

        // Set Menu State
        showMenu = false;
    }
}

function ProfileIcons() {}

ProfileIcons.prototype.addSocialLinks = function (socialMediaLinks) {

    function defaultLinks() {

        var twitter = $('<a href="https://twitter.com/danielPhilipJo1"><i class="fab fa-twitter fa-2x"></i></a>');
        var facebook = $('<a href="https://www.facebook.com/DanielPhilipJohnson"><i class="fab fa-facebook fa-2x"></i></a>')
        var linkedin = $('<a href="https://www.linkedin.com/in/daniel-philip-johnson/"><i class="fab fa-linkedin fa-2x"></i></a>')
        var github = $('<a href="https://github.com/danielphilipjohnson/"><i class="fab fa-github fa-2x"></i></a>')

        $('#social-icons').append(twitter)
        $('#social-icons').append(facebook)
        $('#social-icons').append(linkedin)
        $('#social-icons').append(github)

    }

    if (socialMediaLinks.length < 1) {

        defaultLinks();

        throw new Error("Social Links can't be empty please add your social links ");

    } else if (socialMediaLinks.length == 1 && arr[0] == "") {
        console.log("social link running")

        defaultLinks();

        throw new Error("Empty Array passed: Please populate with your social Links");

    } else {
        socialMediaLinks.forEach(element => {

            switch (element.socialMediaName) {

                case "twitter":
                    var twitter = $('<a href=' + element.link + '><i class="fab fa-twitter fa-2x"></i></a>');
                    $('#social-icons').append(twitter);
                    break;
                case "facebook":
                    var facebook = $('<a href=' + element.link + '><i class="fab fa-facebook fa-2x"></i></a>')
                    $('#social-icons').append(facebook);
                    break;

                case "linkedin":
                    var linkedin = $('<a href=' + element.link + '><i class="fab fa-linkedin fa-2x"></i></a>')
                    $('#social-icons').append(linkedin);
                    break;

                case "github":
                    var github = $('<a href=' + element.link + '><i class="fab fa-github fa-2x"></i></a>')
                    $('#social-icons').append(github);
                    break;

                default:
                    throw Error("Dont support the social media " + element.socialMediaName + "yet. Connect me on github to add it.")
            }
        });
    }
}

function Statement(){
}



Statement.prototype.addStatement =  function (statement) {
    if (statement === "") {
        statement = "Web Developer, Programmer, Designer & Entrepreneur";
        var h2 = $('<h2 class="lg-heading">' + statement + '</h2>')
        $('#icons').prepend(h2);
        throw new Error("Statement can't be empty: Please enter a statement");

    }
    else{
        var h2 = $('<h2 class="sm-heading">' + statement + '</h2>')
        $('#icons').prepend(h2);

    }

}
function Work() {}Work.prototype.add = function (imageSrc, alt, projectLink, githubLink) {
    var item = $('<div class="item">');

    var projectLinkElem = $('<a href="' + projectLink + '"></a>');
    var projectImgElem = $('<img src="' + imageSrc + '" alt="' + alt+ '">');

    $(projectLinkElem).append(projectImgElem);
    $(item).append(projectLinkElem);

    var codePenLinkElem = $(' <a href="' + projectLink + '"class="btn-light"><i class="fab fa-codepen"></i> Codepen</a>');

    $(item).append(codePenLinkElem);
    var githubLinkElem = $('<a href="' + githubLink + '" class="btn-dark"><i class="fab fa-github"></i> Github</a>');

    $(item).append(githubLinkElem);

    $(".projects").append(item);
};

Work.prototype.iterate = function (projects) {
    projects.forEach(function (project) {
        work.add(project.imageSrc, project.title, project.projectLink, project.githubLink);
    });

};

function ProfileName() {}

ProfileName.prototype.parseName = function (name) {
  if (name === "") {
    var span = $('<span class="text-secondary">Doe</span>');
    var h1 = $('<h1 class="sm-heading"> John </h1>');

    $("#home").prepend(h1);
    $(h1).append(span);
    throw new TypeError(
      "Profile Name must not be an empty string. Please include your name into function addProfileName(name)"
    );
  } else {
    arr = name.split(" ");
    return arr;
  }
};

ProfileName.prototype.addToDOM = function (fullname) {
  var h1 = $('<h1 class="lg-heading">' + fullname[0] + " </h1>");

  $("#home").prepend(h1);

  var span;

  for (var i = 1; i < fullname.length; i++) {
    if (i % 2 != 0) {
      span = $(
        '<span id="secondary" class="text-secondary"> ' +
          fullname[i] +
          "</span>"
      );
      $(h1).append(span);
    } else {
      $("<span> " + fullname[i] + "</span>").insertAfter(span);
    }
  }
};

ProfileName.prototype.DisplayNameToDOM = function (name) {
  var parsedName = this.parseName(name);
  this.addToDOM(parsedName);
};





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

bio.add(txt);

bio.addImage("./img/profile-md.jpg", "Daniel johnson");

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