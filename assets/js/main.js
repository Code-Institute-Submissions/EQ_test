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

var i = 0;
var currentCompetencyType = questions[i].competence;
var currentQuestionNumber = questions[i].questionNumber;
var currentQuestion = questions[i].question;

var answer = $("#testAnswer").change(function () {
  $(this).val();
  console.log(answer);
});

//-----------------------------------------------------------Open Modal - doc ready function
$(document).ready(function () {
  //--Open modal on rules of the test
  $("#myBtn").click(function () {
    console.log("button was clicked, it works!");
    $(".bg-modal").show();
    $("#nextBtn").hide();
    $("#resultsBtn").hide();
    $("#questionContainer").hide();
  });

  //---------------------------------------On clicking Start button (function)

  $("#startBtn").click(function () {
    console.log("button was clicked, it works!");
    $("#rulesContainer").hide();
    $("#questionContainer").show();
    $("#startBtn").hide();
    $("#nextBtn").show();

    //--On clicking Start, display the first question

    console.log(`the var${currentCompetencyType}`);
    console.log(`the var${currentQuestionNumber}`);
    console.log(`the var${currentQuestion}`);

    document.getElementById(
      "myCompetencyType"
    ).innerHTML = currentCompetencyType;
    document.getElementById("myQuestion").innerHTML =
      currentQuestionNumber + ".  " + currentQuestion;
  });

  //--On clicking Next button

  $("#nextBtn").click(function () {
    console.log("button clicked, it works!");

    //--On clicking Next, display the next question

    for (i = 1; i < questions.length; i++) {
      console.log(i);

      var currentCompetencyType = questions[i].competence;
      var currentQuestionNumber = questions[i].questionNumber;
      var currentQuestion = questions[i].question;
      console.log(`the var${currentCompetencyType}`);
      console.log(`the var${currentQuestionNumber}`);
      console.log(`the var${currentQuestion}`);

      document.getElementById(
        "myCompetencyType"
      ).innerHTML = currentCompetencyType;
      document.getElementById("myQuestion").innerHTML =
        currentQuestionNumber + ".  " + currentQuestion;
    }
  });
});
