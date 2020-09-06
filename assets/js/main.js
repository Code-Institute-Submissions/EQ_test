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
      "Overcoming: having motivation to improve the performance to meet interior standards of excellence.",
  },
  {
    competence: "Personal competence",
    questionNumber: "6",
    question: "Initiative: always be ready to act and enjoy opportunities.",
  },
  {
    competence: "Personal competence",
    questionNumber: "7",
    question: "Transparency: be honest and righteous, worthy of trust.",
  },
  {
    competence: "Personal competence",
    questionNumber: "8",
    question:
      "Adaptability: having flexibility in adapting to people with a different style. To adapt to volatile situations or to way of thinking and behaving in adverse situations.",
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
      "Organizational awareness: identify and understand trends, influencial networks. Understand politics organizational level.",
  },
  {
    competence: "Social competence",
    questionNumber: "3",
    question:
      "Service: identify and satisfy the needs of subordinates and customers, supporting them and helping them improve their performance and achieve their goals.",
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
      "Development of others: nurturing others' habilities through feedback and guidance.",
  },
  {
    competence: "Social competence",
    questionNumber: "7",
    question:
      "Promoting change: starting and managing change, leading people in a new directions.",
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
      "Teamwork: Achieving high performance, collaboration and team work.",
  },
];

var i = 0;
var currentCompetencyType = questions[i].competence;
var currentQuestionNumber = questions[i].questionNumber;
var currentQuestion = questions[i].question;
var resultArray = [];

resultArray;

//--DOCUMENT.READY FUNCTION-----------------------------------
$(document).ready(function () {
  //--Test Button Clicked from home page to open modal---------

  $("#myBtn").click(function () {
    console.log("home button was clicked, it works!");

    $(".bg-modal").show();
    $("#nextBtn").hide();
    $("#resultsBtn").hide();
    $("#questionContainer").hide();
    $("#submitAlert").hide();
    $("#rulesContainer").show();
    $("#startBtn").show();
  });

  //--close button function to return to home page------------
  $(".close").click(function () {
    console.log("close button was clicked, it works!");

    //confirmation funtion
    $(".confirm").click(function () {
      console.log("are you sure function triggered");
      return confirm(
        "Are you sure you want to leave this page? <br> When you leave this page, your answers will be reset."
      );
    });

    $(".bg-modal").hide();

    function resetTest() {
      i = 0;
      resultArray = [];
    }
    resetTest();
  });

  //--On clicking Start button (function)----------------------
  $("#startBtn").click(function () {
    console.log("start button was clicked, it works!");

    console.log("i = ", i);

    //On clicking Start, display the first question and show and disable the next button

    $("#rulesContainer").hide();
    $("#questionContainer").show();
    $("#startBtn").hide();
    $("#nextBtn").show();
    $("#testForm").show();
    $("#inputGroupSelect01").val("");

    disableNextBtn();
    disableResultsBtn();

    document.getElementById(
      "myCompetencyType"
    ).innerHTML = currentCompetencyType;
    document.getElementById("myQuestion").innerHTML =
      currentQuestionNumber + ".  " + currentQuestion;
  });

  //when a value is selected on #testForm
  $("select").change(function () {
    console.log("a value has been selected");

    var stringSelected = $("#inputGroupSelect01").val();
    var valSelected = parseInt(stringSelected);
    stringSelected;
    valSelected;
    console.log(valSelected);

    resultArray.push(valSelected); //selected values from each question are pushed onto an array
    console.log(resultArray);

    i++; //added 1 to the value of i which is going to select next question
    console.log("i = ", i);

    $("#testForm").hide();
    $("#submitAlert").show();
    $("#nextBtn").removeAttr("disabled");
    $("#resultsBtn").removeAttr("disabled");
  });

  //---------On clicking Next button function----------------
  //---------------------------------------------------------
  $("#nextBtn").click(function () {
    console.log("next button clicked, it works!");

    var currentCompetencyType = questions[i].competence;
    var currentQuestionNumber = questions[i].questionNumber;
    var currentQuestion = questions[i].question;

    console.log(currentCompetencyType);
    console.log(currentQuestionNumber);
    console.log(currentQuestion);
    disableNextBtn();
    disableResultsBtn();

    /*On clicking Next, display the next question
    with next button or results button (on last question)*/
    if (i < 17) {
      console.log("the if condition was fired; i = ", i);
      //console.log(resultArrayLength);

      $("#testForm").show();
      $("#submitAlert").hide();
      $("#inputGroupSelect01").val("");

      document.getElementById(
        "myCompetencyType"
      ).innerHTML = currentCompetencyType;
      document.getElementById("myQuestion").innerHTML =
        currentQuestionNumber + ".  " + currentQuestion;
    }
    if (i == 17) {
      console.log("This is the very last question...");

      $("#nextBtn").hide();
      $("#resultsBtn").show();
      $("#testForm").show();
      $("#submitAlert").hide();
      $("#inputGroupSelect01").val("");

      document.getElementById(
        "myCompetencyType"
      ).innerHTML = currentCompetencyType;
      document.getElementById("myQuestion").innerHTML =
        currentQuestionNumber + ".  " + currentQuestion;
    }

    //change question every time next button is pressed
  });

  //display result;
  $("#resultsBtn").click(function () {
    $("#resultsBtn").hide();
    $("#questionContainer").hide();
    $("#resultsContainer").show();

    var resultsChart = Highcharts.chart("container", {
      chart: {
        type: "column",
      },
      title: {
        text: "Your Current EQ",
      },
      subtitle: {
        text: "",
      },
      xAxis: {
        type: "category",
        labels: {
          rotation: -45,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Answer values 1-10",
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        pointFormat: "",
      },
      series: [
        {
          name: "Questions",
          data: [
            ["Emotional self-awareness", resultArray[0]],
            ["Accurate self-assessment", resultArray[1]],
            ["Self-confidence", resultArray[2]],
            ["Emotional self-control", resultArray[3]],
            ["Overcoming", resultArray[4]],
            ["Initiative", resultArray[5]],
            ["Transparency", resultArray[6]],
            ["adaptability", resultArray[7]],
            ["Optimism", resultArray[8]],
            ["Empathy", resultArray[9]],
            ["Organizational awareness", resultArray[10]],
            ["Service", resultArray[11]],
            ["Inspirational leadership", resultArray[12]],
            ["Influence", resultArray[13]],
            ["Development of others", resultArray[14]],
            ["Promoting Change", resultArray[15]],
            ["Conflict management", resultArray[16]],
            ["Teamwork", resultArray[17]],
          ],
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y:.1f}", // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: "13px",
              fontFamily: "Monserrat, sans-serif",
            },
          },
        },
      ],
    });
    resultsChart;

    document.getElementById("myCompetencyType").innerHTML = resultsChart;

    //var resultArray = parseInt(resultArray);
    console.log("The resultArray is ", resultArray);

    //the sum if the numbers in resultArray
    var sumResults = 0;
    for (var i in resultArray) {
      sumResults += resultArray[i];
    }

    //there are 18 questions therefore there are 18 items
    //so the average is
    var average = sumResults / 18;
    average;
    //to change from a float number to a whole number
    var intNumber = Math.trunc(average);
    intNumber;

    //to print the result
    console.log("Average is " + average);
    document.getElementById("averageScore").innerHTML =
      "Your average score is " + intNumber + ".";
  });

  //-------------------next button disabled function
  function disableNextBtn() {
    $("#nextBtn").attr("disabled", "disabled");
  }

  //-------------------results button disabled function
  function disableResultsBtn() {
    $("#resultsBtn").attr("disabled", "disabled");
  }

  console.log(currentCompetencyType);
  console.log(currentQuestionNumber);
  console.log(currentQuestion);

  disableNextBtn();
  disableResultsBtn();

  //-------------------when pressing submit email to subscribe

  $("#submitAddressBtn").click(function () {
    alert("Sorry, this button is not working yet.");
  });

  function moreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
  myFunction();

  //function validateForm() {
  //   var x = document.forms["subscribeForm"]["email"].value;
  //   if (x == "") {
  //     alert("Name must be filled out");
  //     return false;
  //   }
  // }
});
