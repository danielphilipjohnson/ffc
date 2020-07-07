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
