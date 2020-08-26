

//open Modal


$(document).ready(function(){
    $("#myBtn").click(function () {
        $(".bg-modal").show();
        $("#nextBtn").hide();
        $("#resultsBtn").hide();
        $("#questionContainer").hide();

    });
});

$(".close").click(function() {
        $(".bg-modal").hide();
});

//start Test

$("#startBtn").click(function() {
        $("#rulesContainer").hide();
        $("#questionContainer").show();
        $("#startBtn").hide();
        $("#nextBtn").show();
        
});



//continue Test

$("#testAnswer").change (function() {
    var answer = $(this).val();
    console.log (answer)
});