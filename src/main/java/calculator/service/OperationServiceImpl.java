package calculator.service;

import org.springframework.stereotype.Service;

/**
 * Performs the operations for the calculator.
 * Created by jonathan on 2/2/16.
 */
@Service
public class OperationServiceImpl implements OperationService {
    @Override
    public float doOperation(final float firstOperand, final float secondOperand, final String operator) {
        float result;
        switch (operator) {
            case "+":
                result = firstOperand + secondOperand;
                break;
            case "-":
                result = firstOperand - secondOperand;
                break;
            case "X":
                result = firstOperand * secondOperand;
                break;
            case "/":
                result = firstOperand / secondOperand;
                break;
            default:
                throw new UnsupportedOperationException("This operation is not supported by the calculator!");
        }
        return result;
    }

    @Override
    public boolean validate(float firstOperand, float secondOperand, String operator) {
        return false;
    }
}
