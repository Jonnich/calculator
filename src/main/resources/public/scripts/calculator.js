/**
 * Created by jonathan on 2/3/16.
 */

$(
    function() {

        var operandOne = '';
        var operandTwo = '';
        var operator;

        $("#calculatorForm").click(
            function(evt) {
                var $calcWindow = $("#calcWindow");
                var whatWasClicked = evt.target.id;
                var $whatWasClicked = $(evt.target);

                // validate that the input window does not contain multiple .
                // when an operator (other than =) is clicked, store value currently in window to operandOne
                // when = is pressed call doOperation to send REST request to java to perform operation
                // update calcWindow with returned JSON

                if (whatWasClicked != 'calcWindow') {
                    if ($whatWasClicked.hasClass("operand")) {
                        if (!operator) {
                            operandOne += whatWasClicked;
                            $calcWindow.val(operandOne);
                        } else {
                            operandTwo += whatWasClicked;
                            $calcWindow.val(operandTwo);
                        }
                    } else if ($whatWasClicked.hasClass("operator")) {
                        operator = whatWasClicked;
                    } else if (whatWasClicked === ".") {
                        if (!operator) {
                            if (operandOne.indexOf(".") === -1) {
                                operandOne += "."
                            }
                            $calcWindow.val(operandOne);
                        } else {
                            if (operandTwo.indexOf(".") === -1) {
                                operandTwo += "."
                            }
                            $calcWindow.val(operandTwo);
                        }
                    } else if (whatWasClicked === "=") {
                        if (operandOne && operandTwo && operator) {
                            var args = {
                                url : "calculator/calculate",
                                data: {
                                    operandOne : operandOne,
                                    operandTwo : operandTwo,
                                    operator : operator},
                                dataType : "json",
                                method : "POST",
                                success : function(data) {
                                    $calcWindow.val(data);
                                },
                                error : function() {
                                    $calcWindow.error("No dice.");
                                }
                            };

                            $.ajax(args);

                            operandOne = '';
                            operandTwo = '';
                            operator = null;
                        }
                    }
                }
            });
    }
);

var doOperation = function(firstOperand, secondOperand, operator) {

};

var pressNumber = function() {

};