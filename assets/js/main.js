//Global variables
var questions = [
  {
    competence: "Personal competence",
    questionNumber: "1",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Personal competence",
    questionNumber: "2",
    question:
      "Accurate self-assessment: knowing your own limits and possibilities, without overestimating or underestimating yourself.",
  },
  {
    competence: "Personal competence",
    questionNumber: "3",
    question:
      "Self-confidence: having a solid sense of our own value, capabilities and potential.",
  },
  {
    competence: "Personal competence",
    questionNumber: "4",
    question:
      "Emotional self-control: maintaining emotions and destructive impulses under control, even in times of stress.",
  },
  {
    competence: "Personal competence",
    questionNumber: "5",
    question:
      "Overcoming: having an impetus to improve the performance to meet interior standards of excellence.",
  },
  {
    competence: "Personal competence",
    questionNumber: "6",
    question: "Initiative: always be ready to act and enjoy opportunities.",
  },
  {
    competence: "Personal competence",
    questionNumber: "7",
    question: "Transparency: be honest and honest, worthy of confidence.",
  },
  {
    competence: "Personal competence",
    questionNumber: "8",
    question:
      "Adaptability: having flexibility in adapting to people with a different style, to volatile situations or in way of thinking and behaving in antagonistic situations.",
  },
  {
    competence: "Personal competence",
    questionNumber: "9",
    question: "Optimism: seeing the bright side of events in any situation.",
  },
  {
    competence: "Social competence",
    questionNumber: "1",
    question:
      "Empathy: understanding other people's emotions, understanding their points of view and take an active interest in their concerns.",
  },
  {
    competence: "Social competence",
    questionNumber: "2",
    question:
      "Organizational awareness: identify and understand trends, decision networks and policy at the level organizational.",
  },
  {
    competence: "Social competence",
    questionNumber: "3",
    question:
      "Service: recognize and satisfy the needs of subordinates and customers, serving them and helping them improve your performance and achieve your goals.",
  },
  {
    competence: "Social competence",
    questionNumber: "4",
    question:
      "Inspirational leadership: guide and motivate, with a thought-stimulating vision, leading people to achieve mutual goals.",
  },
  {
    competence: "Social competence",
    questionNumber: "5",
    question: "Influence: having the ability to persuade and influence people.",
  },
  {
    competence: "Social competence",
    questionNumber: "6",
    question:
      "Development of others: cultivating others habilities through feedback and guidance.",
  },
  {
    competence: "Social competence",
    questionNumber: "7",
    question:
      "Promoting change: starting and managing change leading people in a new directions.",
  },
  {
    competence: "Social competence",
    questionNumber: "8",
    question:
      "Conflict management: resolve differences between people, leading them to mutual integration and acceptance.",
  },
  {
    competence: "Social competence",
    questionNumber: "9",
    question:
      "Teamwork: Achieving high performance collaboration and team work.",
  },
];
var i = 0;
var currentCompetencyType = questions[i].competence;
var currentQuestionNumber = questions[i].questionNumber;
var currentQuestion = questions[i].question;
var resultArray = [];
 resultArray;

//-------------------------------Open Modal - doc ready function
//--------------------------------------------------------------
$(document).ready(function () {



  //--Open modal on rules of the test
  $("#myBtn").click(function () {
    console.log("button was clicked, it works!");

    $(".bg-modal").show();
    $("#nextBtn").hide();
    $("#resultsBtn").hide();
    $("#questionContainer").hide();
    $("#submitAlert").hide();
  });

  //-------------------------On clicking Start button (function)
  //------------------------------------------------------------
  $("#startBtn").click(function () {
    console.log("button was clicked, it works!");
    
    //On clicking Start, display the first question and show and disable the next button
    $("#rulesContainer").hide();
    $("#questionContainer").show();
    $("#startBtn").hide();
    $("#nextBtn").show();
    
    disableNextBtn();
  
    document.getElementById(
      "myCompetencyType"
    ).innerHTML = currentCompetencyType;
    document.getElementById("myQuestion").innerHTML =
      currentQuestionNumber + ".  " + currentQuestion;
  });

  //---------On clicking Next button function----------------
  //---------------------------------------------------------
  $("#nextBtn").click(function () {
    console.log("button clicked, it works!");
    disableNextBtn();

    $("#testForm").show();
    $("#submitAlert").hide();
    $("#inputGroupSelect01").val("");

    //On clicking Next, display the next question
    if (i < questions.length) {
      i++;
      console.log(i);
    }

    //local variables
    var currentCompetencyType = questions[i].competence;
    var currentQuestionNumber = questions[i].questionNumber;
    var currentQuestion = questions[i].question;
    console.log(currentCompetencyType);
    console.log(currentQuestionNumber);
    console.log(currentQuestion);

    //change question every time next button is pressed
    document.getElementById(
    "myCompetencyType"
    ).innerHTML = currentCompetencyType;
    document.getElementById("myQuestion").innerHTML =
    currentQuestionNumber + ".  " + currentQuestion;
 });
 

 //when a value is selected
    $("select").change(function(){
        console.log("a value has been selected");
        
        var valSelected = $("#inputGroupSelect01").val();
        valSelected;
        
        resultArray.push(valSelected);
        //$( "#inputGroupSelect01" ).blur();
        console.log(valSelected);
        console.log(resultArray);

        $("#testForm").hide();
        $("#submitAlert").show();
        $("#nextBtn").removeAttr("disabled");
        
    });



  //---------------------next button disabled function
  function disableNextBtn(){
    $("#nextBtn").attr("disabled","disabled");
}
disableNextBtn();
  
});
