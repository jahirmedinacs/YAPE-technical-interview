package com.bdd.api.stepdefinition;

import com.bdd.api.step.EjemplosAutomatizacionApiStep;
import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;
import cucumber.api.java.es.Y;
import net.thucydides.core.annotations.Steps;
import org.junit.Assert;

public class EjemplosAutomatizacionApiStepDefinition {
    private Scenario scenario;

    @Before
    public void before(Scenario scenario) { this.scenario = scenario; }

    @Steps
    private EjemplosAutomatizacionApiStep ejemplosAutomatizacionApiStep;

    @Dado("^que configuro las cabeceras$")
    public void configuroLasCabeceras(DataTable dataTable) {
        ejemplosAutomatizacionApiStep.configuracionDeLasCabeceras(dataTable);
    }

    @Cuando("^configuro el body del servicio: \"([^\"]*)\"$")
    public void configuroElBodyDelServicio(String servicio, DataTable dataTable) {
        ejemplosAutomatizacionApiStep.configurarElBodyDelServicio(servicio, dataTable);
    }

    @Y("^ejecuto el servicio con la configuracion del body y cabeceras$")
    public void ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable dataTable) {
        ejemplosAutomatizacionApiStep.ejecutarElServicioConLaConfiguracionDelBodyYCabeceras(dataTable);
    }

    @Entonces("^valido que el codigo de respuesta sea \"([^\"]*)\"$")
    public void validoQueElCodigoDeRespuestaSea(int codigoRespuesta) {
        Assert.assertTrue("El código de respuesta, no es el adecuado.",
                ejemplosAutomatizacionApiStep.validarQueElCodigoDeRespuestaSea(codigoRespuesta));
    }

    @Y("^ejecuto el servicio con la configuracion de las cabeceras$")
    public void ejecutoElServicioConLaConfiguracionDeLasCabeceras(DataTable dataTable) {
        ejemplosAutomatizacionApiStep.ejecutarElServicioConLaConfiguracionDeCabeceras(dataTable);
    }
}
