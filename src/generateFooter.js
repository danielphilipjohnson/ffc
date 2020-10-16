function footer() {
  if(document.getElementById("year")){
    var year = new Date().getFullYear();
    var txt = document.getElementById("year");
    txt.innerHTML = year + ". ";
  }
}

footer();