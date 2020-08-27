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
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Personal competence",
    questionNumber: "3",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Personal competence",
    questionNumber: "4",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Personal competence",
    questionNumber: "5",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Personal competence",
    questionNumber: "6",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Personal competence",
    questionNumber: "7",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Personal competence",
    questionNumber: "8",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Personal competence",
    questionNumber: "9",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Social competence",
    questionNumber: "1",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Social competence",
    questionNumber: "2",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Social competence",
    questionNumber: "3",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Social competence",
    questionNumber: "4",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Social competence",
    questionNumber: "5",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Social competence",
    questionNumber: "6",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Social competence",
    questionNumber: "7",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Social competence",
    questionNumber: "8",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Social competence",
    questionNumber: "9",
    question:
      "Emotional self-awareness: identifying your own emotions and recognize their impact on actions and decisions.",
  },
];

var currentCompetencyType = 0;
var currentQuestionNumber = 0;
var currentQuestion = 0;
var testOver = false;
var i = 0;
var answer = $("#testAnswer").change(function () {
                $(this).val();
  console.log(answer);
});

//open Modal
$(document).ready(function () {
  // open modal on rules of the test
  $("#myBtn").click(function () {
    console.log("button was clicked, it works!");
    $(".bg-modal").show();
    $("#nextBtn").hide();
    $("#resultsBtn").hide();
    $("#questionContainer").hide();
  });

  //on clicking Start button

  $("#startBtn").click(function () {
    console.log("button was clicked, it works!");
    $("#rulesContainer").hide();
    $("#questionContainer").show();
    $("#startBtn").hide();
    $("#nextBtn").show();

    // on clicking Start, display the first question
    var i = 0;
    var currentCompetencyType = questions[i].competence;
    console.log("the var" + currentCompetencyType);
    $(this).find("#testMessage").hide();

    document.getElementById("myCompetencyType").innerHTML = currentCompetencyType;
    i++;

 
  });
});


//continue Test

//


