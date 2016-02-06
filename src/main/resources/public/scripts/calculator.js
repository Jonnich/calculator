/**
 * Handles the calculator operations.
 * Created by jonathan on 2/3/16.
 */
$(
    function() {

        var operandOne = '';
        var operandTwo = '';
        var operator;

        /**
         * Handles a user clicking an operand.
         * @param whatWasClicked the id of the button being pressed
         * @param $calcWindow a jquery object representation of the result window
         */
        function handleOperand(whatWasClicked, $calcWindow) {
            if (!operator) {
                if (!operandOne && whatWasClicked !== "0") {
                    operandOne += whatWasClicked;
                } else if (operandOne) {
                    operandOne += whatWasClicked;
                }
                $calcWindow.val(operandOne);
            } else {
                if (!operandTwo && whatWasClicked !== "0") {
                    operandTwo += whatWasClicked;
                } else if (operandTwo) {
                    operandTwo += whatWasClicked;
                }
                $calcWindow.val(operandTwo);
            }
        }

        /**
         * Handles a user clicking an operator.
         * @param whatWasClicked the id of the button being pressed
         * @param $calcWindow a jquery object representation of the result window
         */
        function handleOperator(whatWasClicked, $calcWindow) {
            if (whatWasClicked === "-") {
                if (!operandOne && !operator) {
                    operandOne += whatWasClicked;
                    $calcWindow.val(operandTwo);
                } else if (!operandTwo && operator) {
                    operandTwo += whatWasClicked;
                    $calcWindow.val(operandTwo);
                } else {
                    operator = whatWasClicked;
                }
            } else {
                operator = whatWasClicked;
            }
        }

        /**
         * Handles the clicking of the "." button.
         * @param $calcWindow a jquery object representation of the result window
         */
        function handleDecimal($calcWindow) {
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
        }

        /**
         * Resets the state of the calculator.
         * @param $calcWindow a jquery object representation of the result window
         */
        function resetCalculatorState($calcWindow) {
            $calcWindow.val('');
            operandOne = '';
            operandTwo = '';
            operator = null;
        }

        /**
         * Handles the actions initiated by clicking the "=" button.
         * @param $calcWindow a jquery object representation of the result window
         */
        function handleOperation($calcWindow) {
            if (operandOne && operandTwo && operator) {
                var args = {
                    url: "calculator/calculate",
                    data: {
                        operandOne: operandOne,
                        operandTwo: operandTwo,
                        operator: operator
                    },
                    dataType: "json",
                    method: "POST",
                    success: function (data) {
                        $calcWindow.val(data);
                    }
                };

                $.ajax(args);

                resetCalculatorState($calcWindow);
            } else {
                resetCalculatorState($calcWindow);
            }
        }

        /**
         * Binds the click event of the calculator form.
         */
        $("#calculatorForm").click(
            function(evt) {
                var $calcWindow = $("#calcWindow");
                var whatWasClicked = evt.target.id;
                var $whatWasClicked = $(evt.target);

                if (whatWasClicked != 'calcWindow') {
                    if ($whatWasClicked.hasClass("operand")) {
                        handleOperand(whatWasClicked, $calcWindow);
                    } else if ($whatWasClicked.hasClass("operator")) {
                        handleOperator(whatWasClicked, $calcWindow);
                    } else if (whatWasClicked === ".") {
                        handleDecimal($calcWindow);
                    } else if (whatWasClicked === "=") {
                        handleOperation($calcWindow);
                    }
                }
            }
        );
    }
);