package com.bdd.api.stepdefinition;

import com.bdd.api.step.ApiStep;
//import cucumber.api.DataTable;
//import cucumber.api.Scenario;
//import cucumber.api.java.Before;
//import cucumber.api.java.es.Cuando;
//import cucumber.api.java.es.Dado;
//import cucumber.api.java.es.Entonces;
//import cucumber.api.java.es.Y;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.Scenario;
import io.cucumber.java.es.Cuando;
import io.cucumber.java.es.Dado;
import io.cucumber.java.es.Entonces;
import io.cucumber.java.es.Y;
import net.thucydides.core.annotations.Steps;
import org.junit.Assert;
import org.junit.Before;

public class ApiStepDefinition {
    private Scenario scenario;

    @Before
    public void before(Scenario scenario) { this.scenario = scenario; }

    @Steps
    private ApiStep apiStep;

    @Dado("^que configuro las cabeceras$")
    public void configuroLasCabeceras(DataTable dataTable) {
        apiStep.configuracionDeLasCabeceras(dataTable);
    }

    @Cuando("^configuro el body del servicio: \"([^\"]*)\"$")
    public void configuroElBodyDelServicio(String servicio, DataTable dataTable) {
        apiStep.configurarElBodyDelServicio(servicio, dataTable);
    }

    @Y("^ejecuto el servicio con la configuracion del body y cabeceras$")
    public void ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable dataTable) {
        apiStep.ejecutarElServicioConLaConfiguracionDelBodyYCabeceras(dataTable);
    }

    @Entonces("^valido que el codigo de respuesta sea \"([^\"]*)\"$")
    public void validoQueElCodigoDeRespuestaSea(int codigoRespuesta) {
        Assert.assertTrue("El código de respuesta, no es el adecuado.",
                apiStep.validarQueElCodigoDeRespuestaSea(codigoRespuesta));
    }

    @Y("^ejecuto el servicio con la configuracion de las cabeceras$")
    public void ejecutoElServicioConLaConfiguracionDeLasCabeceras(DataTable dataTable) {
        apiStep.ejecutarElServicioConLaConfiguracionDeCabeceras(dataTable);
    }
}
