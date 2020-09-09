//Global variables
var questions = [
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

//--DOCUMENT.READY FUNCTION-----------------------------------
$(document).ready(function (){
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

  //when a value is selected on #testForm that value is then pushed to an array
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

  //display result when results button is clicked
  $("#resultsBtn").click(function () {
    $(".bg-modal").hide();
    $("#resultsBtn").hide();
    $("#questionContainer").hide();
    $("#resultsContainer").show();

    //chart will appear first
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

    //*******  CALCULATIONS RELATED TO RESULT   ************/
    
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

});
