// var ans = ""; // current answer
// var pressed = ""; // keeps track of everything that has been pressed
// var screen = $("#screen");
// var needsNumber = true; // keeps track of whether or not an operation was selected previously
// var span = $("span");


$(document).ready(function(){
  // (function() {
  //   'use strict';

    var $screen = $('#screen');
//if clear button is pressed, reset screen to be blank
    $('#clear').click(function()  {
      $screen.text('');
    });
//if equals is pressed without any expression to eval, display error message
    $('#equals').click(function() {
      let exp = $screen.text();

      if (exp === 'Error') {
        return;
      }

      let nextExp;

      try {
        nextExp = eval(exp.replace('÷', '/').replace('x', '*'));
      }
      //use a catch statement to determine if the expression is valid, if not, display error
      catch (err) {
        nextExp = 'Error';
      }

      //evealuate dividing by zero
      if (!Number.isFinite(nextExp)) {
        nextExp = 'Error';
      }

//display on screen
      $screen.text(nextExp);
    });

    $('.buttons').on('click', 'span:not(#clear):not(#equals)', function(event)  {
      let exp = $screen.text();

      if (exp === 'Error') {
        return;
      }

      let nextExp = exp + $(event.target).text();
//display on screen after next event
      $screen.text(nextExp);
    });

    function safeEval(exp) {
      let regExp = /^(\-?\d+\.?\d*)(\+|\-|x|÷)(\-?\d+\.?\d*)$/;

      let matches = exp.match(regExp);

      if (matches === null) {
        return 'Error';
      }

      let oper1 = parseFloat(matches[1]);
      let oper2 = parseFloat(matches[3]);
      let operator = matches[2];

      let total;
//evalualte the expression depending on which operator is used in the exp.
      if (operator === '+') {
        total = oper1 + oper2;
      }
      else if (operator === '-') {
        total = oper1 - oper2;
      }
      else if (operator === 'x') {
        total = oper1 * oper2;
      }
      else if (operator === '÷') {
        if (oper2 === 0) {
          return 'Error';
        }

        total = oper1 / oper2;
      }

      return total;
    };
  })
  // })();
// })();
//     span.on("click", function(){
//         var content = $(this).html();
//         // special cases
//         switch (content) {
//             case "=":
//                 computeAnswer();
//                 break;
//             case "C":
//                 pressed = "";
//                 break;
//
//             default:
//                 var val = $(this).attr("span");
//                 console.log(val);
//                 if (val == null) { // if its an operation
//                     if (!lastPressedOperation()) { // if allowed to press operation again
//                         pressed += content;
//                     }
//                 } else {
//                     if (pressed === "0") {
//                             pressed = val;
//                         } else {
//                             pressed += val;
//                         }
//
//                     }
//                 }
//                 console.log(pressed);
//                 // break;
//         })
//         refreshScreen();
//     });
// // });
//
// // post: displays the most current equation or answer
// function refreshScreen(){
//     $('#screen').html(pressed);
//     console.log(pressed);
// }
//
// // post: calculates the answer;
// // displays "syntax error" if there is one and alerts the user
// function computeAnswer() {
//     var val = 0;
//     if (lastPressedOperation()) {
//         pressed = "Error!";
//         refreshScreen();
//
//     } else {
//         pressed = pressed.replace("x", "*");
//         pressed = eval(pressed) + "";
//         ans = pressed;
//         refreshScreen();
//     }
// }
//
// // post: returns true if the last pressed button was an operation; false otherwise
// function lastPressedOperation() {
//     var lastPressed = pressed.charAt(pressed.length - 1);
//     return ["x", "+", "-", "/", "%"].indexOf(lastPressed) > 0;
// }
//


//   $(document).ready(function () {
//       var key = null;
//
//       $("#clear").click(function () {
//           $('screen').text("");
//       });
//
//       $("span").click(function () {
//           var text = $('screen').val();
//           if (text != "0") {
//               var val1 = text;
//               var ButtonVal = $(this);
//               var val2 = ButtonVal.text();
//               var res = val1 + val2;
//               $('screen').val(res);
//           } else {
//               $('screen').val()
//           }
//       });
//
//       $(function () {
//           var interRes = null;
//           var operator;
//           $('operator').click(function () {
//               var value1 = $('screen').val();
//               if (interRes != null) {
//                   var result = ApplyOperation(interRes, value1, operator);
//                   interRes = result;
//               } else {
//                   interRes = value1;
//                 }
//           operator = $(this).text();
//           $('screen').val("");
//       });
//
//       $('#equals').click(function () {
//           var op = operator;
//           var res;
//           var value2 = $('#equals').val();
//           if (value2 != "") {
//               res = ApplyOperation(interRes, value2, op);
//           } else {
//               res = interRes;
//           }
//           $('#equals').val(res);
//           interRes = null;
//       });
//   });
//
//   function ApplyOperation(value1, value2, operator) {
//       var result;
      switch (operator) {
            case "+":
                result = add(value1, value2);
                break;
            case "-":
                result = subt(value1, value2);
                break;
            case "*":
                result = mult(value1, value2);
                break;
            case "/":
                result = div(value1, value2);
                break;
        }
//         return result;
//     }
//
//     function add(first, second) {
//         var a = parseFloat(first);
//         var b = parseFloat(second);
//         var total = a + b;
//         return total;
//     }
//     function subt(first, second) {
//         var a = parseFloat(first);
//         var b = parseFloat(second);
//         var sub = a - b;
//         return sub;
//     }
//
//     function mult(first, second) {
//         var a = parseFloat(first);
//         var b = parseFloat(second);
//         var product = a * b;
//         return product;
//     }
//
//     function div(first, second) {
//         var a = parseFloat(first);
//         var b = parseFloat(second);
//         var divi = a / b;
//         return divi;
//     }
// });

//   let screen = $('#screen')
//   let firstOp = ''
//   let secondOp = ''
//   let thirdOp = ''
//   let total = ''
//   let operator = ''
// // //set up a click button event
//   $('span').click(function(event){
// let input = ($(event.target).text())
//     console.log(input);
//
//
// if (!$(event.target).hasClass('operator')) {
//     firstOp += input;
//     screen.text(firstOp)
//   }
//    if($(event.target).hasClass('operator') && $(event.target).attr('#clear')) {
//     screen.text('')
//   }
// })
// })
