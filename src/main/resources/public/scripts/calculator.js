/**
 * Created by jonathan on 2/3/16.
 */

$(
    function() {
        $("#calculatorForm").click(
            function(evt) {
                var $calcWindow = $("#calcWindow");
                var whatWasClicked = evt.target.id;

                // validate that the input window does not contain multiple .
                // when an operator (other than =) is clicked, store value currently in window to operandOne
                // when = is pressed call doOperation to send REST request to java to perform operation
                // update calcWindow with returned JSON

                if (whatWasClicked != 'calcWindow') {
                    $calcWindow.val($calcWindow.val() + whatWasClicked);
                }
            });
    }
);

var doOperation = function(firstOperand, secondOperand, operator) {

};

var pressNumber = function() {

};