// used strings to allow for an easy handling of decimals. An alternative would be to convert numbers to string and count digits after the dot when inserting decimals.

$(document).ready(function(){
  var currentValue = "";
  var previousValue = 0;
  var currentOperator = "";
  var previousOperator = "";
  var lastResult = "";
  var numbers = [];

  var updateResultField = function() {
    $("#resultField").replaceWith("<div id='resultField'><p>" + currentValue + "</p></div>");
  };

  var displayZero = function () {
    $("#resultField").replaceWith("<div id='resultField'><p>0</p></div>");
  };

  $("#button0").click(function(){
    currentValue += 0;
    updateResultField();
  });

  $("#button1").click(function(){
    currentValue += 1;
    updateResultField();
  });

  $("#button2").click(function(){
    currentValue += 2;
    updateResultField();
  });

  $("#button3").click(function(){
    currentValue += 3;
    updateResultField();
  });

  $("#button4").click(function(){
    currentValue += 4;
    updateResultField();
  });

  $("#button5").click(function(){
    currentValue += 5;
    updateResultField();
  });

  $("#button6").click(function(){
    currentValue += 6;
    updateResultField();
  });

  $("#button7").click(function(){
    currentValue += 7;
    updateResultField();
  });

  $("#button8").click(function(){
    currentValue += 8;
    updateResultField();
  });

  $("#button9").click(function(){
    currentValue += 9;
    updateResultField();
  });

  $("#buttonDot").click(function(){
    if (currentValue.indexOf(".") == -1) {
      currentValue += ".";
      updateResultField();
    };
  });

  $("#buttonAc").click(function(){
    currentValue = "";
    previousValue = "";
    previousOperator = "";
    lastResult = "";
    //updateResultField();
    displayZero();
  });

  $("#buttonCe").click(function(){
    if (currentValue.length >= 2) {
      currentValue = currentValue.slice(0, (currentValue.length - 1));
      updateResultField();
    }
    else {
      currentValue = currentValue.slice(0, (currentValue.length - 1));
      displayZero();
    };
  });

  $("#buttonPercentage").click(function(){
    currentValue = Number(currentValue) / 100;
    currentValue = currentValue.toString();
    updateResultField();
  });

  $("#buttonAns").click(function(){
    currentValue = lastResult;
    updateResultField();
  });

  var fixOperation = function() {
    currentValue = Number(currentValue);
    if (currentOperator == "+" && previousOperator == "") {
      numbers.push(currentValue);
      previousOperator = "+"
    }
    else if (currentOperator == "-" && previousOperator == "") {
      numbers.push(currentValue);
      previousOperator = "-"
    }
    else if (currentOperator == "*" && previousOperator == "") {
      previousValue = currentValue;
      previousOperator = "*"
    }
    else if (currentOperator == "/" && previousOperator == "") {
      previousValue = currentValue;
      previousOperator = "/"
    }
    else if (currentOperator == "+" && previousOperator == "+") {
      numbers.push(currentValue);
      previousOperator = "+"
    }
    else if (currentOperator == "+" && previousOperator == "-") {
      numbers.push(-currentValue);
      previousOperator = "+"
    }
    else if (currentOperator == "+" && previousOperator == "*") {
      numbers.push(previousValue * currentValue);
      previousOperator = "+"
    }
    else if (currentOperator == "+" && previousOperator == "/") {
      numbers.push(previousValue / currentValue);
      previousOperator = "+"
    }
    else if (currentOperator == "-" && previousOperator == "+") {
      numbers.push(currentValue);
      previousOperator = "-"
    }
    else if (currentOperator == "-" && previousOperator == "-") {
      numbers.push(-currentValue);
      previousOperator = "-"
    }
    else if (currentOperator == "-" && previousOperator == "*") {
      numbers.push(previousValue * currentValue);
      previousOperator = "-"
    }
    else if (currentOperator == "-" && previousOperator == "/") {
      numbers.push(previousValue / currentValue);
      previousOperator = "-"
    }
    else if (currentOperator == "*" && previousOperator == "+") {
      previousValue = currentValue;
      previousOperator = "*"
    }
    else if (currentOperator == "*" && previousOperator == "-") {
      previousValue = -currentValue;
      previousOperator = "*"
    }
    else if (currentOperator == "*" && previousOperator == "*") {
      previousValue = previousValue * currentValue;
      previousOperator = "*"
    }
    else if (currentOperator == "*" && previousOperator == "/") {
      previousValue = previousValue / currentValue;
      previousOperator = "*"
    }
    else if (currentOperator == "/" && previousOperator == "+") {
      previousValue = currentValue;
      previousOperator = "/"
    }
    else if (currentOperator == "/" && previousOperator == "-") {
      previousValue = -currentValue;
      previousOperator = "/"
    }
    else if (currentOperator == "/" && previousOperator == "*") {
      previousValue = previousValue * currentValue;
      previousOperator = "/"
    }
    else if (currentOperator == "/" && previousOperator == "/") {
      previousValue = previousValue / currentValue;
      previousOperator = "/"
    };
    currentValue = "";
    //updateResultField();
    displayZero();
  };

  $("#buttonPlus").click(function(){
    currentOperator = "+"
    fixOperation();
  });

  $("#buttonMinus").click(function(){
    currentOperator = "-"
    fixOperation();
  });

  $("#buttonTimes").click(function(){
    currentOperator = "*"
    fixOperation();
  });

  $("#buttonObelus").click(function(){
    currentOperator = "/"
    fixOperation();
  });

  $("#buttonEqual").click(function(){
    currentOperator = "+";
    fixOperation();
    currentValue = numbers.reduce(function(a, b) {
      return a + b;
    });
    numbers = [];
    currentOperator = "";
    previousOperator = "";
    lastResult = currentValue;
    updateResultField();
    currentValue = "";
  });

});
