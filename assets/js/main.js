//open Modal

$(document).ready(function(){
    $("#myBtn").click(function () {
        $(".bg-modal").removeClass("hide");
        $("#nextBtn").addClass("hide");
        $("#resultsBtn").addClass("hide");
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
        $("#nextBtn").removeClass("hide");
});

//continue Test

$("#nextBtn").click(function() {
        console.log("ive been clicked")
});