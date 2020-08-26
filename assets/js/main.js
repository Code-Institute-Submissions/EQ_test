//open Modal

$(document).ready(function(){
    $("#myBtn").click(function () {
        $(".bg-modal").removeClass("hide");
        $("#nextBtn").css("display", "none");
        $("#resultsBtn").css("display", "none");
    });
});

$(".close").click(function() {
        $(".bg-modal").addClass("hide");
});

//start Test

$("#startBtn").click(function() {
        $("#rulesContainer").addClass("hide");
        $("#questionContainer").removeClass("hide");
        $("#startBtn").addClass("hide");
});
    