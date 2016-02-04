package calculator.controller;

import calculator.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * The main controller for the calculator application.
 * Created by jonathan on 2/2/16.
 */
@RequestMapping("calculator")
@Controller
public class CalculatorController {

    @Autowired
    public OperationService operationService;

    @RequestMapping(method = RequestMethod.GET)
    public String calculator() {
        return "pages/calc.html";
    }

    @RequestMapping("/operation/{operation}/{firstOperand}/{secondOperand}/")
    @ResponseBody
    public String operation(@PathVariable String operation, @PathVariable float firstOperand, @PathVariable float secondOperand) {
        return String.valueOf(operationService.doOperation(firstOperand, secondOperand, operation));
    }
}
