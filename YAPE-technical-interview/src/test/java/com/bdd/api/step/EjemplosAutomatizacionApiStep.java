package com.bdd.api.step;

//import api.com.bdd.lib.ServiceDOM;
//import api.com.bdd.util.UtilApi;

import com.bdd.util.lib.ServiceDOM;
import com.bdd.util.UtilApi;

import cucumber.api.DataTable;
import io.restassured.http.Headers;
import io.restassured.response.Response;
import net.thucydides.core.annotations.Step;
import org.apache.commons.io.FileUtils;
import org.json.JSONObject;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;

import static com.bdd.util.Constants.DIR_REQUEST_JSON;

public class EjemplosAutomatizacionApiStep extends ServiceDOM {
    private Headers cabecera;
    private String bodyRequest;
    private Response response;

    @Step("Configurando las cabeceras...")
    public void configuracionDeLasCabeceras(DataTable dataTable) {
        cabecera = configurerHeaders(dataTable);
    }

    @Step("Configurando el body del servicio...")
    public void configurarElBodyDelServicio(String servicio, DataTable dataTable) {
        String pathService = DIR_REQUEST_JSON + servicio + ".json";
        bodyRequest = configurerBodyRequest(pathService, dataTable);
        System.out.println("body configurado es el siguiente:" + bodyRequest);
    }
    @Step("Ejecutando el servicio con la configuración de las cabeceras y el body...")
    public void ejecutarElServicioConLaConfiguracionDelBodyYCabeceras(DataTable dataTable) {
        String tipo = UtilApi.getValueFromDataTable(dataTable, "tipo");
        String url = UtilApi.getValueFromDataTable(dataTable, "url");
        String metodo = UtilApi.getValueFromDataTable(dataTable, "metodo");
        if (cabecera == null) {
            cabecera = new Headers();
        }

        response = ejecutarApiBuilder(apiBuilder()
            .withApiType(tipo)
            .withApiURL(url)
            .withMethod(metodo)
            .withHeaders(cabecera)
            .withBody(bodyRequest)
            .build()
        );
        System.out.println("RESPUESTA:" + response);
        System.out.println("respuesta buena" + response.asString());
    }

    @Step("Validando que el codigo de respuesta sea el esperado...")
    public boolean validarQueElCodigoDeRespuestaSea(int codigoRespuesta) {
        return response.getStatusCode() == codigoRespuesta;
    }
    public String configurerBodyRequest(String pathServiceRequest, DataTable dataTableRequestValues) {
        File file = new File(pathServiceRequest);
        String bodyRequest = "";

        try {
            String content = FileUtils.readFileToString(file, "utf-8");
            JSONObject jsonObject = new JSONObject(content);
            bodyRequest = jsonObject.toString();
            List<Map<String, String>> listBodyRequest = dataTableRequestValues.asMaps(String.class, String.class);

            String newJson;
            for(Iterator var9 = listBodyRequest.iterator(); var9.hasNext(); bodyRequest = newJson) {
                Map<String, String> stringStringMap = (Map)var9.next();
                newJson = UtilApi.updateValueOfNodeInJson(bodyRequest, (String)stringStringMap.get("key"), ((String)stringStringMap.get("valor")).replace("%WHITE%", " ").replace("%BAR%", "|"));
            }
        } catch (IOException var11) {
        }

        UtilApi.logger(this.getClass()).log(Level.INFO, "BODY-REQUEST: {0}", bodyRequest);
        return bodyRequest;
    }

    public void ejecutarElServicioConLaConfiguracionDeCabeceras(DataTable dataTable) {
        String tipo = UtilApi.getValueFromDataTable(dataTable, "tipo");
        String url = UtilApi.getValueFromDataTable(dataTable, "url");
        String metodo = UtilApi.getValueFromDataTable(dataTable, "metodo");
        if (cabecera == null) {
            cabecera = new Headers();
        }

        response = ejecutarApiBuilder(apiBuilder()
                .withApiType(tipo)
                .withApiURL(url)
                .withMethod(metodo)
                .withHeaders(cabecera)
                .build()
        );
        System.out.println("RESPUESTA:" + response);
        System.out.println("respuesta buena" + response.asString());
    }

}
