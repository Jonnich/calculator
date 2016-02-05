package calculator.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * The main controller for the calculator application.
 * Created by jonathan on 2/2/16.
 */
@RequestMapping("calculator")
@Controller
public class CalculatorController {
    @RequestMapping(method = RequestMethod.GET)
    public String calculator() {
        return "pages/calc.html";
    }
}
