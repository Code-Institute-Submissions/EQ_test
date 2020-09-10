$(document).ready(function () {
  const questions = [
    {
      competence: "Competência pessoal",
      questionNumber: "1",
      questionP1: "Autoconsciência emocional:",
      questionP2:
        "Estou ciente das minhas próprias emoções e sei o impacto delas nas minhas ações e decisões.",
    },
    {
      competence: "Competência pessoal",
      questionNumber: "2",
      questionP1: "Autoavaliação precisa:",
      questionP2:
        "Eu conheço meus próprios limites e possibilidades, sem me supervalorizar ou subestimar.",
    },
    {
      competence: "Competência pessoal",
      questionNumber: "3",
      questionP1: "Autoconfiança:",
      questionP2:
        "Tenho uma noção sólida do meu próprio valor, capacidades e potencial.",
    },
    {
      competence: "Competência pessoal",
      questionNumber: "4",
      questionP1: "Autocontrole emocional:",
      questionP2:
        "Mantenho as emoções e os impulsos destrutivos sob control, mesmo em momentos de stress.",
    },
    {
      competence: "Competência pessoal",
      questionNumber: "5",
      questionP1: "Superação:",
      questionP2:
        "Tenho motivação para melhorar o meu desempenho e a fim de satisfazer padrões interiores de excelência.",
    },
    {
      competence: "Competência pessoal",
      questionNumber: "6",
      questionP1: "Iniciativa:",
      questionP2:
        "Estarei sempre pronto para agir e aproveitar as oportunidades.",
    },
    {
      competence: "Competência pessoal",
      questionNumber: "7",
      questionP1: "Transparência:",
      questionP2: "Eu sou honesto e justo, digno de confiança.",
    },
    {
      competence: "Competência pessoal",
      questionNumber: "8",
      questionP1: "Adaptabilidade:",
      questionP2:
        "Tenho flexibilidade para me adaptar a pessoas com estilos diferentes. Posso me adaptar a situações difíceis e a diferentes formas de pensar.",
    },
    {
      competence: "Competência pessoal",
      questionNumber: "9",
      questionP1: "Otimismo:",
      questionP2: "Vejo o lado bom dos eventos em qualquer situação.",
    },
    {
      competence: "Competência social",
      questionNumber: "1",
      questionP1: "Empatia:",
      questionP2:
        "Eu entendo as emoções das outras pessoas e os seus pontos de vista. Tenho um interesse ativo nas preocupações dos outros.",
    },
    {
      competence: "Competência social",
      questionNumber: "2",
      questionP1: "Consciência organizacional:",
      questionP2:
        "Posso identificar e entender tendências e redes influentes. Entendo as políticas de nível organizacional.",
    },
    {
      competence: "Competência social",
      questionNumber: "3",
      questionP1: "Serviço:",
      questionP2:
        "Identificar e satisfazer necessidades de colegas e clientes. Eu os apoio e ajudo a melhorar o seu desempenho e atingir os seus objetivos.",
    },
    {
      competence: "Competência social",
      questionNumber: "4",
      questionP1: "Liderança inspiradora:",
      questionP2:
        "Eu guio e motivo, com uma visão instigante, levando as pessoas a alcançarem objetivos mútuos.",
    },
    {
      competence: "Competência social",
      questionNumber: "5",
      questionP1: "Influência:",
      questionP2: "Tenho a capacidade de persuadir e influenciar as pessoas.",
    },
    {
      competence: "Competência social",
      questionNumber: "6",
      questionP1: "Desenvolvimento de outros:",
      questionP2:
        "Eu cultivo as habilidades dos outros por meio de feedback e orientação.",
    },
    {
      competence: "Competência social",
      questionNumber: "7",
      questionP1: "Promovendo mudança:",
      questionP2:
        "Eu começo a fazer a mudança acontecer, levando as pessoas em novas direções.",
    },
    {
      competence: "Competência social",
      questionNumber: "8",
      questionP1: "Gestão de conflitos:",
      questionP2:
        "Resolvo as diferenças entre as pessoas, levando-as à integração e aceitação mútua.",
    },
    {
      competence: "Competência social",
      questionNumber: "9",
      questionP1: "Trabalho em equipe:",
      questionP2: "Alcanço alto desempenho, colaboração e trabalho em equipe.",
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
    var txt = $("#more").is(":visible") ? "Leia mais" : "Leia menos";
    $("#moreBtn").text(txt);
    $(this).next("#more").slideToggle(200);
  });

  //--close button function to return to home page------------
  $(".close").click(function () {
    if (confirm("Tem certeza que deseja sair desta página?") == true) {
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
      alert("Ops! Precisa selecionar um valor primeiro.");
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
            { name: "Concordo Totalmente", y: stronglyAgreeOccPercentage },
            { name: "Concordo", y: agreeOccPercentage },
            { name: "Neutro", y: neutralOccPercentage },
            { name: "Discordo", y: disagreeOccPercentage },
            { name: "Discordo Totalmente", y: stronglyDisagreeOccPercentage },
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

 