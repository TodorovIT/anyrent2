function openPage() {
    var x = document.getElementById("search").value;

    if (x.toLowerCase() === "tables and chairs") {
        open("chair.html");
    }
    if (x.toLowerCase() === "table and chair") {
        open("chair.html");
    }
    if (x.toLowerCase() === "chairs and tables") {
        open("chair.html");
    }
    if (x.toLowerCase() === "chair and table") {
        open("chair.html");
    }
    if (x.toLowerCase() === "tables") {
        open("chair.html");
    }
    if (x.toLowerCase() === "table") {
        open("chair.html");
    }
    if (x.toLowerCase() === "chairs") {
        open("chair.html");
    }
    if (x.toLowerCase() === "chair") {
        open("chair.html");
    }

    if(x.toLowerCase() === "speakers"){
        open("Speakers.html")
    }
    if(x.toLowerCase() === "speaker"){
         open("Speakers.html")
    }

    if(x.toLowerCase() === "dj desks"){
        open("DJ desks.html")
    }

    if(x.toLowerCase() === "disco balls"){
        open("Disco balls.html")
    }
    if(x.toLowerCase() === "developer"){
        open("deve.html")
    }
    else{
        window.open("other.html")
    }

}