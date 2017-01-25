$(document).ready(function() {



$("#form").click(function(event) {
    event.preventDefault();
    var input = document.getElementById('input');
    $.ajax({
    url: "http://hackathon.liannsun.com/supermarkets?location=350%205th%20Ave,%20New%20York&secret_key=spacecats"
    })
    //.append($(".result")
    .done(function(response) {
    console.log(response);
    $(".result").append()

     $("#input").val(input);
     console.log(input);

    console.log();

    for (var i = 0; i < response.results.length; i++) {
        
        console.log(response.results[0]);
          //$(results).html();
        
    }
             });

    });
});