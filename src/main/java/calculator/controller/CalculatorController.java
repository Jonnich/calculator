package calculator.controller;

import calculator.service.OperationService;
import calculator.service.OperationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by jonathan on 2/2/16.
 */
@Controller
@RequestMapping("/calculator")
public class CalculatorController {

    @Autowired
    public OperationService operationService;

    @RequestMapping(method = RequestMethod.GET)
    public String calculator() {

        return "calc.jsp";
    }

    @RequestMapping("/operation/{operation}/{firstOperand}/{secondOperand}/")
    @ResponseBody
    public String operation(@PathVariable String operation, @PathVariable float firstOperand, @PathVariable float secondOperand) {
        return String.valueOf(operationService.doOperation(firstOperand, secondOperand, operation));
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(CalculatorController.class, args);
    }
}
