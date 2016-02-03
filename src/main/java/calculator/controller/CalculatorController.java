package calculator.controller;

import calculator.service.OperationService;
import calculator.service.OperationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.expression.Operation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by jonathan on 2/2/16.
 */
@Controller
@EnableAutoConfiguration
@RequestMapping("/calculator")
public class CalculatorController {

    // TODO - autowire this
    public OperationService operationService = new OperationServiceImpl();

    @RequestMapping(method = RequestMethod.GET)
    public String calculator() {

        return "calc.jsp";
    }

    @RequestMapping("/operation/{operation}/{firstOperand}/{secondOperand}")
    @ResponseBody
    public String operation(@PathVariable String operation, @PathVariable float firstOperand, @PathVariable float secondOperand) {
        return String.valueOf(operationService.doOperation(firstOperand, secondOperand, operation));
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(CalculatorController.class, args);
    }
}
