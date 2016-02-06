package calculator.service;

/**
 * Interface for the operation service.
 *
 * Created by jonathan on 2/2/16.
 */
public interface OperationService {

    /**
     * Performs the desired operation for the calculator.
     * @param firstOperand the first operand
     * @param secondOperand the second operand
     * @param operator the desired operation
     *
     * @return the result of the operation
     */
    float doOperation(float firstOperand, float secondOperand, String operator);
}
