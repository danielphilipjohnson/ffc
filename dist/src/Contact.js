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
