function ProfileName() {}

ProfileName.prototype.parseName = function (name) {
  if (name === "") {
    var span = $('<span class="text-secondary">Doe</span>');
    var h1 = $('<h1 class="lg-heading"> John </h1>');

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




