// Back-End Logic

var add = function(number1, number2)
  {return (number1 + number2);};

var subtract = function(number1, number2)
  {return (number1 - number2);};

var multiply = function(number1, number2)
  {return (number1 * number2);};

var divide = function(number1, number2)
  {return (number1 / number2);};

// Front-End Logic

$(document).ready(function() {
  $("#add form").submit(function(event) {
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $(".result#add-result").text(result);
    $("#output1").show();
    event.preventDefault();
  });
  $("#subtract form").submit(function(event) {
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $(".result#subtract-result").text(result);
    $("#output2").show();
    event.preventDefault();
  });
  $("#multiply form").submit(function(event) {
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $(".result#multiply-result").text(result);
    $("#output3").show();
    event.preventDefault();
  });
  $("#divide form").submit(function(event) {
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $(".result#divide-result").text(result);
    $("#output4").show();
    event.preventDefault();
  });
});
