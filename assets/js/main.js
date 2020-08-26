$(document).ready(function(){
    $("#myBtn").click(function () {
        $(".bg-modal").css("display", "flex");
    });
    $(".close").click(function() {
        $(".bg-modal").css("display", "none");
    });
    $("#startBtn").click(function() {
        $(".bg-modal").css("display", "none")
        
    })
});

