package calculator.controller;

import calculator.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * The REST endpoint for the calculator's calculations.
 * Created by jonathan on 2/5/16.
 */
@RequestMapping("calculator/calculate")
@RestController
public class OperationController {

    @Autowired
    public OperationService operationService;

    @RequestMapping(method = RequestMethod.POST)
    public float calculate(float operandOne, float operandTwo, String operator) {
        return operationService.doOperation(operandOne, operandTwo, operator);
    }
}
