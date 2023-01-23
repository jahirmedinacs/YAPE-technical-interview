package com.bdd.ui.stepdefinition;

import com.bdd.Constant;
import com.bdd.MobileDriverManager;
import com.bdd.ui.step.BookingStep;
import com.bdd.util.UtilMobile;
//import cucumber.api.Scenario;
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.es.Cuando;
//import cucumber.api.java.es.Dado;
//import cucumber.api.java.es.Entonces;
//import cucumber.api.java.es.Y;
import io.cucumber.java.Scenario;
import io.cucumber.java.es.Dado;
import net.thucydides.core.annotations.Steps;
import net.thucydides.core.util.EnvironmentVariables;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;

import java.net.MalformedURLException;

public class BookingStepDefinition {

    private EnvironmentVariables environmentVariables;
    private Scenario scenario;

    @Steps
    private BookingStep bookingStep;

    //HOOK - >
    @Before
    public void beforeScenario(Scenario scenario) {
        this.scenario = scenario;
        UtilMobile.saveVariablesOnSession(Constant.SCENARIO, this.scenario);
    }

    @After
    public void afterScenario() {
        Scenario scenario = UtilMobile.getVariableOnSession(Constant.SCENARIO);
    }


    @Dado("^que cargo el aplicativo de Booking$")
    public void cargoElAplicativoDeGoogleChrome() throws MalformedURLException {
        MobileDriverManager mobileDriverManager = new MobileDriverManager(environmentVariables);
        mobileDriverManager.setMobileDriver();
    }

    @Dado("^Selecciono y Escribo como destino \"([^\"]*)\"$")
    public void seleccionoYEscriboDestino(String destino){
        bookingStep.seleccionoYEscriboDestino(destino);
    }

}
