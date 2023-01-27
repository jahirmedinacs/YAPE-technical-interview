package com.bdd.runner;

import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

import org.junit.runner.RunWith;


@RunWith(CucumberWithSerenity.class)
@CucumberOptions(plugin = {"html:target/build/cucumber-html-report",
        "pretty:target/build/cucumber-pretty.txt",
        "json:target/build/cucumber.json"},
        features = {"src/test/resources/features"},
//        junit = {"--step-notifications"},
        glue = {"com.bdd"}
//        ,tags = {"@Restful-Booker"}
//        ,tags = {"@BookingAutomation"}
        ,tags = "@Restful-Booker or @BookingAutomation"
//        ,tags = "@BookingAutomation and @HappyPath"
)

public class RunnerTest {

}
