//--DOCUMENT.READY FUNCTION-----------------------------------
$(document).ready(function () {
  $("#subscribeMessage").show();
  $("#subscribeForm").show();
  $("#tryAgain").hide();

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validate() {
    const $result = $("#confirmationMessage");
    const email = $("#emailAddress").val();
    $result.text("");

    if (validateEmail(email)) {
      $result.text("Obrigado por subscrever à nossa Newsletter!");
      $("#subscribeMessage").hide();
      $("#subscribeForm").hide();
    } else {
      $result.text("Ops... " + email + " não é valido.");
      $("#subscribeMessage").hide();
      $("#subscribeForm").hide();
      $("#tryAgain").show();
    }
    return false;
  }

  $("#submitAddressBtn").on("click", validate);

  $("#tryAgain").on("click", function () {
    console.log("tryAgain clicked and form reset");
    document.getElementById("subscribeForm").reset();
    
    $("#subscribeMessage").show();
    $("#subscribeForm").show();
    $("#tryAgain").hide();
    $("#confirmationMessage").text("");
  });
});
