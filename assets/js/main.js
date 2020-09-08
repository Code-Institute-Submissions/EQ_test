//Global variables
var questions = [
  {
    competence: "Personal competence",
    questionNumber: "1",
    questionP1: "Emotional self-awareness: ",
    questionP2:
      "Identifying your own emotions and recognize their impact on actions and decisions.",
  },
  {
    competence: "Personal competence",
    questionNumber: "2",
    questionP1: "Accurate self-assessment: ",
    questionP2:
      "Knowing your own limits and possibilities, without overestimating or underestimating yourself.",
  },
  {
    competence: "Personal competence",
    questionNumber: "3",
    questionP1:"Self-confidence: ",
    questionP2:
      "Having a solid sense of our own value, capabilities and potential.",
  },
  {
    competence: "Personal competence",
    questionNumber: "4",
    questionP1: "Emotional self-control: ",
    questionP2:
      "Maintaining emotions and destructive impulses under control, even in times of stress.",
  },
  {
    competence: "Personal competence",
    questionNumber: "5",
    questionP1:"Overcoming: ",
    questionP2:
      "Having motivation to improve the performance to meet interior standards of excellence.",
  },
  {
    competence: "Personal competence",
    questionNumber: "6",
    questionP1: "Initiative: ",
    questionP2: "Always be ready to act and enjoy opportunities.",
  },
  {
    competence: "Personal competence",
    questionNumber: "7",
    questionP1: "Transparency: ",
    questionP2: "Be honest and righteous, worthy of trust.",
  },
  {
    competence: "Personal competence",
    questionNumber: "8",
    questionP1: "Adaptability: ",
    questionP2:
      "Having flexibility in adapting to people with a different style. To adapt to volatile situations or to way of thinking and behaving in adverse situations.",
  },
  {
    competence: "Personal competence",
    questionNumber: "9",
    questionP1: "Optimism: ",
    questionP2: "Seeing the bright side of events in any situation.",
  },
  {
    competence: "Social competence",
    questionNumber: "1",
    questionP1: "Empathy: ",
    questionP2:
      "Understanding other people's emotions, understanding their points of view and take an active interest in their concerns.",
  },
  {
    competence: "Social competence",
    questionNumber: "2",
    questionP1: "Organizational awareness: ",
    questionP2:
      "Identify and understand trends, influencial networks. Understand politics organizational level.",
  },
  {
    competence: "Social competence",
    questionNumber: "3",
    questionP1: "Service: ",
    questionP2:
      "Identify and satisfy the needs of subordinates and customers, supporting them and helping them improve their performance and achieve their goals.",
  },
  {
    competence: "Social competence",
    questionNumber: "4",
    questionP1: "Inspirational leadership: ",
    questionP2:
      "Guide and motivate, with a thought-stimulating vision, leading people to achieve mutual goals.",
  },
  {
    competence: "Social competence",
    questionNumber: "5",
    questionP1: "Influence: ",
    questionP2: "Having the ability to persuade and influence people.",
  },
  {
    competence: "Social competence",
    questionNumber: "6",
    questionP1: "Development of others: ",
    questionP2:
      "Nurturing others' habilities through feedback and guidance.",
  },
  {
    competence: "Social competence",
    questionNumber: "7",
    questionP1: "Promoting change: ",
    questionP2:
      "Starting and managing change, leading people in a new directions.",
  },
  {
    competence: "Social competence",
    questionNumber: "8",
    questionP1: "Conflict management: ",
    questionP2:
      "Resolve differences between people, leading them to mutual integration and acceptance.",
  },
  {
    competence: "Social competence",
    questionNumber: "9",
    questionP1: "Teamwork: ",
    questionP2:
      "Achieving high performance, collaboration and team work.",
  },
];

var i = 0;
var currentCompetencyType = questions[i].competence;
var currentQuestionNumber = questions[i].questionNumber;
var currentQuestionP1 = questions[i].questionP1;
var currentQuestionP2 = questions[i].questionP2;
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

  //click "read more" button to expand the rules' text
  $("#more").hide();
  $("#moreBtn").click(function () {
    var txt = $("#more").is(":visible") ? "Read More" : "Read Less";
    $("#moreBtn").text(txt);
    $(this).next("#more").slideToggle(200);
  });

  //--close button function to return to home page------------
  $(".close").click(function () {
    if (confirm("Are you sure you want to leave this page?") == true) {
      return true;
    } else {
      return false;
    }
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

    document.getElementById(
      "myCompetencyType"
    ).innerHTML = currentCompetencyType;
    document.getElementById("myQuestion").innerHTML =
      currentQuestionNumber + ".  " + currentQuestionP1;
    document.getElementById(
      "descriptionMyQuestion"
    ).innerHTML = currentQuestionP2;
  });

  //when a value is selected on #testForm
  $("select").change(function () {
    console.log("a value has been selected");

    var stringSelected = $("#inputGroupSelect01").val();
    var valSelected = parseInt(stringSelected);
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
    var currentQuestionP1 = questions[i].questionP1;
    var currentQuestionP2 = questions[i].questionP2;
    var stringSelected = $("#inputGroupSelect01").val();
    var valSelected = parseInt(stringSelected);
    console.log(valSelected);
    console.log(currentCompetencyType);
    console.log(currentQuestionNumber);
    console.log(currentQuestionP1);
    console.log(currentQuestionP2);

    if (valSelected >= 1) {
      console.log("if condition selectOccurred >= 1 was triggered");

      /*On clicking Next, display the next question
                with next button or results button (on last question)*/
      if (i < 17) {
        console.log("the if i<17 condition was fired; i = ", i);

        $("#testForm").show();
        $("#submitAlert").hide();
        $("#inputGroupSelect01").val("");

        document.getElementById(
          "myCompetencyType"
        ).innerHTML = currentCompetencyType;
        document.getElementById("myQuestion").innerHTML =
          currentQuestionNumber + ".  " + currentQuestionP1;
        document.getElementById(
          "descriptionMyQuestion"
        ).innerHTML = currentQuestionP2;
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
          currentQuestionNumber + ".  " + currentQuestionP1;
        document.getElementById(
          "descriptionMyQuestion"
        ).innerHTML = currentQuestionP2;
      }
    } else {
      alert("Ops! You need to select a value first.");
      disableNextBtn();
      disableResultsBtn();
    }
    //change question every time next button is pressed
  });

  //display result;
  $("#resultsBtn").click(function () {
    $(".bg-modal").hide();
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

    //the sum of the numbers in resultArray
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

    /*--To print the result change average Score 
    from float number to whole number and display then
    display result text accordingly--*/
    console.log("Average is " + average);
    document.getElementById("averageScore").innerHTML =
      "Your average score is " + intNumber + ".";
     if (intNumber >= 1 && intNumber <= 4) {

        console.log("intNumber >= 1 && intNumber <= 4 condition was fired");
        $("#result1-4").show();
    }
    if (intNumber >= 5 && intNumber <= 7) {

        console.log("intNumber >= 5 && intNumber <= 7 condition was fired");
        $("#result5-7").show();
    }
    if (intNumber >= 8 && intNumber <= 10) {

        console.log("intNumber >= 8 && intNumber <= 10 condition was fired");
        $("#result8-10").show();
    }
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
  console.log(currentQuestionP1);
  console.log(currentQuestionP2);

  //-------------------when pressing submit email to subscribe

  $("#submitAddressBtn").click(function () {
    alert("Sorry, this button is not working yet.");
  });
});
