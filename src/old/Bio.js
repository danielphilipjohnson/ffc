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
