window.onload = function() {
  //   alert("hello");
  var panel01 = document.getElementById("panel01");
  var panel02 = document.getElementById("panel02");
  var panel03 = document.getElementById("panel03");
  var panel04 = document.getElementById("panel04");
  var next01 = document.getElementById("next01");
  var next02 = document.getElementById("next02");
  var formSubmit = document.getElementById("formSubmit");
  var skip01 = document.getElementById("skip01");
  var skip02 = document.getElementById("skip02");
  var skip03 = document.getElementById("skip03");
  var skip = document.getElementsByClassName("skip");
  var feedbackForm = document.getElementById("feedbackForm");
  var sports = document.forms["feedbackForm"].elements["sports"];

  panel02.style.display = "none";
  panel03.style.display = "none";
  panel04.style.display = "none";
  next01.disabled = true;
  next02.disabled = true;
  formSubmit.disabled = true;

  var skipping = function() {
    panel01.style.display = "none";
    panel02.style.display = "none";
    panel03.style.display = "none";
    panel04.style.display = "flex";
  };

  var getSport = new Array();
  getSport["sport1"] = 1;
  getSport["sport2"] = 1;
  getSport["sport3"] = 1;
  getSport["sport4"] = 1;

  function checkSports() {
    var sTotal = 0;
    var selectedRealistic = document.forms["feedbackForm"]["sports"];

    for (var sel = 0; sel < selectedRealistic.length; sel++) {
      if (selectedRealistic[sel].checked)
        sTotal += getSport[selectedRealistic[sel].value];
    }

    if (sTotal >= 2) {
      next01.disabled = false;
    }

    console.log(getSport);

    document.getElementById("lblRealistic").innerHTML = sTotal + "/4 Checked";
  } //End of function checkSportsCareer()

  Array.from(skip).forEach(function(element) {
    element.addEventListener("click", skipping);
  });

  Array.from(sports).forEach(function(element) {
    element.addEventListener("click", checkSports);
  });

  next01.addEventListener("click", function(e) {
    panel01.style.display = "none";
    panel02.style.display = "flex";
    panel03.style.display = "none";
    panel04.style.display = "none";
    event.preventDefault();
  });
};
