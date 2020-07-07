function Statement(){
}



Statement.prototype.addStatement =  function (statement) {
    if (statement === "") {
        statement = "Web Developer, Programmer, Designer & Entrepreneur";
        var h2 = $('<h2 class="sm-heading">' + statement + '</h2>')
        $('#icons').prepend(h2);
        throw new Error("Statement can't be empty: Please enter a statement");



    }
    else{
        var h2 = $('<h2 class="sm-heading">' + statement + '</h2>')
        $('#icons').prepend(h2);

    }

}