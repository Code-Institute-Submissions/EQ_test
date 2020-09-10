$(document).ready(function () {
  const questions = [
    {
      competence: "Personal competence",
      questionNumber: "1",
      questionP1: "Emotional self-awareness: ",
      questionP2:
        "I am aware of my own emotions and know their impact on my actions and decisions.",
    },
    {
      competence: "Personal competence",
      questionNumber: "2",
      questionP1: "Accurate self-assessment: ",
      questionP2:
        "I know my own limits and possibilities, without overestimating or underestimating myself.",
    },
    {
      competence: "Personal competence",
      questionNumber: "3",
      questionP1: "Self-confidence: ",
      questionP2:
        "I have a solid sense of my own value, capabilities and potential.",
    },
    {
      competence: "Personal competence",
      questionNumber: "4",
      questionP1: "Emotional self-control: ",
      questionP2:
        "I maintain emotions and destructive impulses under control, even in times of stress.",
    },
    {
      competence: "Personal competence",
      questionNumber: "5",
      questionP1: "Overcoming: ",
      questionP2:
        "I have motivation to improve performance and to meet my high standards.",
    },
    {
      competence: "Personal competence",
      questionNumber: "6",
      questionP1: "Initiative: ",
      questionP2: "I will always be ready to act and take opportunities.",
    },
    {
      competence: "Personal competence",
      questionNumber: "7",
      questionP1: "Transparency: ",
      questionP2: "I am honest and righteous, worthy of trust.",
    },
    {
      competence: "Personal competence",
      questionNumber: "8",
      questionP1: "Adaptability: ",
      questionP2:
        "I have flexibility in adapting to people with a different style. I can adapt to difficult situations and different ways of thinking.",
    },
    {
      competence: "Personal competence",
      questionNumber: "9",
      questionP1: "Optimism: ",
      questionP2: "I see the bright side of events in any situation.",
    },
    {
      competence: "Social competence",
      questionNumber: "1",
      questionP1: "Empathy: ",
      questionP2:
        "I Understand other people's emotions and their points of view. I take an active interest in people's concerns.",
    },
    {
      competence: "Social competence",
      questionNumber: "2",
      questionP1: "Organizational awareness: ",
      questionP2:
        "I can identify and understand trends and influencial networks. I understand the politics of organizational level.",
    },
    {
      competence: "Social competence",
      questionNumber: "3",
      questionP1: "Service: ",
      questionP2:
        "Identify and satisfy the needs of colleagues and customers. I support and help them improve their performance and achieve their goals.",
    },
    {
      competence: "Social competence",
      questionNumber: "4",
      questionP1: "Inspirational leadership: ",
      questionP2:
        "I guide and motivate, with a thought-provoking vision, leading people to achieve mutual goals.",
    },
    {
      competence: "Social competence",
      questionNumber: "5",
      questionP1: "Influence: ",
      questionP2: "I have the ability to persuade and influence people.",
    },
    {
      competence: "Social competence",
      questionNumber: "6",
      questionP1: "Development of others: ",
      questionP2: "I nurture others habilities through feedback and guidance.",
    },
    {
      competence: "Social competence",
      questionNumber: "7",
      questionP1: "Promoting change: ",
      questionP2:
        "I start make change happen, leading people in new directions.",
    },
    {
      competence: "Social competence",
      questionNumber: "8",
      questionP1: "Conflict management: ",
      questionP2:
        "I resolve differences between people, leading them to mutual integration and acceptance.",
    },
    {
      competence: "Social competence",
      questionNumber: "9",
      questionP1: "Teamwork: ",
      questionP2: "I achieve high performance, collaboration and team work.",
    },
  ];

  var i = 0;
  var currentCompetencyType = questions[i].competence;
  var currentQuestionNumber = questions[i].questionNumber;
  var currentQuestionP1 = questions[i].questionP1;
  var currentQuestionP2 = questions[i].questionP2;
  var resultArray = [];
  resultArray;

  //--Test Button Clicked from home page to open modal---------

  $("#myBtn").click(function () {
    console.log("home button was clicked, it works!");

    $(".bg-modal").show();
    $("#rulesContainer").show();
    $("#startBtn").show();
    $("#nextBtn").hide();
    $("#resultsBtn").hide();
    $("#questionContainer").hide();
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

    document.getElementById(
      "myCompetencyType"
    ).innerHTML = currentCompetencyType;
    document.getElementById("myQuestion").innerHTML =
      currentQuestionNumber + ".  " + currentQuestionP1;
    document.getElementById(
      "descriptionMyQuestion"
    ).innerHTML = currentQuestionP2;
  });

  //---------On clicking Next button function----------------
  //---------------------------------------------------------
  /*On clicking Next, display the next question
                with next button or results button (on last question)*/
  $("#nextBtn").click(function () {
    console.log("next button clicked, it works!");
    var stringSelected = $("input:radio[name=likert]:checked").val(); // collects selected value
    var valSelected = parseInt(stringSelected); // change value from string to number
    console.log("next button " + valSelected);
    console.log("when next btn clicked i = " + i);

    if (isNaN(valSelected)) {
      alert("Ops! You need to select a value first.");
    } else {
      i++;
      console.log("when else condition if fired i = " + i);
      var currentCompetencyType = questions[i].competence;
      var currentQuestionNumber = questions[i].questionNumber;
      var currentQuestionP1 = questions[i].questionP1;
      var currentQuestionP2 = questions[i].questionP2;

      document.getElementById(
        "myCompetencyType"
      ).innerHTML = currentCompetencyType;
      document.getElementById("myQuestion").innerHTML =
        currentQuestionNumber + ".  " + currentQuestionP1;
      document.getElementById(
        "descriptionMyQuestion"
      ).innerHTML = currentQuestionP2;

      if (i < 17) {
        console.log("the if i<18 condition was fired; i = ", i);

        resultArray.push(valSelected); //selected values from each question are pushed onto resultArray
        console.log(resultArray);
        $("#testForm").show();
      }
      if (i == 17) {
        console.log("This is the very last question...");

        resultArray.push(valSelected); //selected values from each question are pushed onto an array
        console.log(resultArray);
        $("#nextBtn").hide();
        $("#resultsBtn").show();
      }
    }
    $('input[name="likert"]').prop("checked", false);
  });

  //display result;
  $("#resultsBtn").click(function () {
    var stringSelected = $("input:radio[name=likert]:checked").val(); // collects selected value
    var valSelected = parseInt(stringSelected); // change value from string to number
    console.log("results button added " + valSelected);
    console.log("when results btn clicked i = " + i);
    resultArray.push(valSelected); //selected values from each question are pushed onto an array
    console.log(resultArray);

    $(".bg-modal").hide();
    $("#resultsBtn").hide();
    $("#questionContainer").hide();

    $("#resultsContainer").show();


    //to obtain the number of occurrences a number appear in one array
    function getOccurrence(array, value) {
      return array.filter((v) => v === value).length;
    }

    var stronglyAgreeOcc = getOccurrence(resultArray, 5);
    var agreeOcc = getOccurrence(resultArray, 4);
    var neutralOcc = getOccurrence(resultArray, 3);
    var disagreeOcc = getOccurrence(resultArray, 2);
    var stronglyDisagreeOcc = getOccurrence(resultArray, 1);
    console.log("Strongly Agree occurs " + stronglyAgreeOcc + "times");
    console.log(" Agree occurs " + agreeOcc + "times");
    console.log("Neutral occurs " + neutralOcc + "times");
    console.log("Disagree occurs " + disagreeOcc + "times");
    console.log("Strongly Disagree occurs " + stronglyDisagreeOcc + "times");

     //to calculate percentage of occurrences
    function percentage(num, total) {
      return (num / total) * 100;
    }

    var stronglyAgreeOccPercentage = percentage(stronglyAgreeOcc, 18);
    var agreeOccPercentage = percentage(agreeOcc, 18);
    var neutralOccPercentage = percentage(neutralOcc, 18);
    var disagreeOccPercentage = percentage(disagreeOcc, 18);
    var stronglyDisagreeOccPercentage = percentage(stronglyDisagreeOcc, 18);

    // Radialize the colors
    Highcharts.setOptions({
      colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7,
          },
          stops: [
            [0, color],
            [1, Highcharts.color(color).brighten(-0.3).get("rgb")], // darken
          ],
        };
      }),
    });

    // Build the chart
    var resultsChart = Highcharts.chart("container", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Frequency of Answers",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            connectorColor: "silver",
          },
        },
      },
      series: [
        {
          name: "Share",
          data: [
            { name: "Strongly Agree", y: stronglyAgreeOccPercentage },
            { name: "Agree", y: agreeOccPercentage },
            { name: "Neutral", y: neutralOccPercentage },
            { name: "Disagree", y: disagreeOccPercentage },
            { name: "Strongly Disagree", y: stronglyDisagreeOccPercentage },
          ],
        },
      ],
    });
    resultsChart;

    

    
    /*----MORE CALCULATIONS-------*/
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

    
    /*-------To print the result according to score (score number is hidden as we used a likert scale--------------------------*/
    console.log("Average is " + average);
    
    if (intNumber <= 2) {
      console.log("intNumber <= 2 condition was fired");
      $("#result1-2").show();
    }
    if (intNumber == 3) {
      console.log("intNumber == 3 condition was fired");
      $("#result3").show();
    }
    if (intNumber >= 4) {
      console.log("iintNumber >= 4 condition was fired");
      $("#result4-5").show();
    }
  });

  console.log(currentCompetencyType);
  console.log(currentQuestionNumber);
  console.log(currentQuestionP1);
  console.log(currentQuestionP2);
});
