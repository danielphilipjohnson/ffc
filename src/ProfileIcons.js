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
