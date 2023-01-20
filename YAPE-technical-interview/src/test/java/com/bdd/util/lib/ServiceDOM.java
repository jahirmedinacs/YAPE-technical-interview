package com.bdd.util.lib;

import com.bdd.util.UtilApi;
import com.bdd.util.builder.ApiConfig;
import com.bdd.util.builder.ApiConfigBuilder;
import com.bdd.util.generic.ServiceDomImpl;
import cucumber.api.DataTable;
import io.restassured.http.Header;
import io.restassured.http.Headers;
import io.restassured.module.jsv.JsonSchemaValidator;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.QueryableRequestSpecification;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.SpecificationQuerier;
import net.serenitybdd.core.environment.EnvironmentSpecificConfiguration;
import net.serenitybdd.rest.SerenityRest;
import net.thucydides.core.steps.ScenarioSteps;
import net.thucydides.core.util.EnvironmentVariables;
import org.apache.commons.io.FileUtils;
import org.hamcrest.Matcher;
import org.json.JSONObject;

import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.logging.Level;

public class ServiceDOM extends ScenarioSteps implements ServiceDomImpl {
    private final String sourceClass = this.getClass().getName();
    private transient EnvironmentVariables environmentVariables;
    private transient RequestSpecification reqConfig = null;

    public ServiceDOM() {
    }

    public Headers configurerHeaders(DataTable dataTable) {
        List<Header> headerList = new LinkedList();
        List<Map<String, String>> listCabeceras = dataTable.asMaps(String.class, String.class);
        Iterator var4 = listCabeceras.iterator();

        while (var4.hasNext()) {
            Map<String, String> stringStringMap = (Map) var4.next();
            Header header = new Header((String) stringStringMap.get("cabeceras"), (String) stringStringMap.get("valor"));
            headerList.add(header);
        }

        Headers headers = new Headers(headerList);
        UtilApi.logger(ServiceDOM.class).log(Level.INFO, "CABECERAS: {0}", headers);
        return headers;
    }

    public Map<String, Object> configurerParameters(DataTable dataTable) {
        List<Map<String, String>> listParemetros = dataTable.asMaps(String.class, String.class);
        Map<String, Object> parameters = new HashMap();
        Iterator var4 = listParemetros.iterator();

        while (var4.hasNext()) {
            Map<String, String> stringStringMap = (Map) var4.next();
            parameters.put(stringStringMap.get("parametros"), stringStringMap.get("valor"));
        }

        UtilApi.logger(ServiceDOM.class).log(Level.INFO, "PARAMETROS: {0}", parameters);
        return parameters;
    }

    public Map<String, Object> configurerPathVariable(DataTable dataTable) {
        List<Map<String, String>> listPathVariable = dataTable.asMaps(String.class, String.class);
        Map<String, Object> pathVariables = new HashMap();
        Iterator var4 = listPathVariable.iterator();

        while (var4.hasNext()) {
            Map<String, String> stringStringMap = (Map) var4.next();
            pathVariables.put(stringStringMap.get("pathVariables"), stringStringMap.get("valor"));
        }

        UtilApi.logger(ServiceDOM.class).log(Level.INFO, "PATH-VARIABLES: {0}", pathVariables);
        return pathVariables;
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
            for (Iterator var9 = listBodyRequest.iterator(); var9.hasNext(); bodyRequest = newJson) {
                Map<String, String> stringStringMap = (Map) var9.next();
                newJson = UtilApi.updateValueOfNodeInJson(bodyRequest, (String) stringStringMap.get("key"), ((String) stringStringMap.get("valor")).replace("%WHITE%", " ").replace("%BAR%", "|"));
            }
        } catch (IOException var11) {
            UtilApi.logger(this.getClass()).throwing(this.sourceClass, "configurerBodyRequest()", var11);
        }

        UtilApi.logger(this.getClass()).log(Level.INFO, "BODY-REQUEST: {0}", bodyRequest);
        return bodyRequest;
    }

    public Response ejecutarApiBuilder(ApiConfig apiConfig) {
        SerenityRest.useRelaxedHTTPSValidation();
        Response response = null;
        Map<String, Object> pathParams = Collections.emptyMap();
        Map<String, Object> queryParams = Collections.emptyMap();
        Map<String, Object> formUrlEncoded = Collections.emptyMap();
        String body = "";
        String tipoMetodo = apiConfig.getMethod().toUpperCase();
        String tipoApi = apiConfig.getApiType();
        String apiURL = apiConfig.getApiURL();
        Headers headers = apiConfig.getHeaders();
        if (!tipoApi.equals("junit")) {
            apiURL = EnvironmentSpecificConfiguration.from(this.environmentVariables).getProperty("url.base.api." + tipoApi) + apiURL;
        }

        if (apiConfig.getPathVariables() != null) {
            pathParams = apiConfig.getPathVariables();
        }

        if (apiConfig.getParams() != null) {
            queryParams = apiConfig.getParams();
        }

        if (apiConfig.getFormUrlEncoded() != null) {
            formUrlEncoded = apiConfig.getFormUrlEncoded();
        }

        if (apiConfig.getBody() != null) {
            body = apiConfig.getBody();
        }

        try {
            switch (tipoMetodo.toUpperCase(Locale.getDefault())) {
                case "GET":
                    this.reqConfig = SerenityRest.given().headers(headers).pathParams(pathParams).queryParams(queryParams);
                    response = (Response) ((RequestSpecification) this.reqConfig.when().log().all()).get(apiURL, new Object[0]);
                    break;
                case "POST":
                    this.reqConfig = SerenityRest.given().headers(headers);
                    if (!formUrlEncoded.isEmpty() && body.isEmpty()) {
                        UtilApi.logger(this.getClass()).log(Level.INFO, "Enviado formParams (form-url-encode)");
                        this.reqConfig.formParams(formUrlEncoded);
                    } else {
                        UtilApi.logger(this.getClass()).log(Level.INFO, "Enviado bodyRequest");
                        this.reqConfig.body(body);
                    }

                    this.reqConfig.pathParams(pathParams);
                    this.reqConfig.queryParams(queryParams);
                    response = (Response) ((RequestSpecification) this.reqConfig.when().log().all()).post(apiURL, new Object[0]);
                    break;
                case "PATCH":
                    this.reqConfig = SerenityRest.given().headers(apiConfig.getHeaders()).body(body);
                    if (queryParams.isEmpty()) {
                        this.reqConfig.pathParams(pathParams);
                    }

                    if (pathParams.isEmpty()) {
                        this.reqConfig.queryParams(queryParams);
                    }

                    response = (Response) ((RequestSpecification) this.reqConfig.when().log().all()).patch(apiURL, new Object[0]);
                    break;
                case "DELETE":
                    this.reqConfig = SerenityRest.given().headers(headers);
                    response = (Response) ((RequestSpecification) this.reqConfig.when().log().all()).delete(apiURL, new Object[0]);
                    break;
                case "PUT":
                    this.reqConfig = SerenityRest.given().headers(headers).queryParams(queryParams).body(body);
                    response = (Response) ((RequestSpecification) this.reqConfig.when().log().all()).put(apiURL, new Object[0]);
                    break;
                default:
                    UtilApi.logger(ServiceDOM.class).log(Level.INFO, "Método {0} no soportado.", tipoMetodo);
            }
        } catch (Exception var13) {
            UtilApi.logger(ServiceDOM.class).log(Level.WARNING, "Message {0}", var13.getMessage());
            UtilApi.logger(ServiceDOM.class).throwing(this.sourceClass, "ejecutarApiBuilder()", var13);
        }

        assert response != null;

        UtilApi.logger(this.getClass()).log(Level.INFO, "Response: ");
        response.prettyPeek();
        return response;
    }

    public QueryableRequestSpecification requestSpecification() {
        UtilApi.logger(this.getClass()).log(Level.INFO, "Retornando el request configuration...");
        return SpecificationQuerier.query(this.reqConfig);
    }

    public Object obtenerValorNodoRespuestaJson(String nodo, Response response) {
        UtilApi.logger(this.getClass()).log(Level.INFO, "Obteniendo el valor del nodo {0} del object", nodo);
        return JsonPath.with(response.getBody().asString()).get(nodo);
    }

    public String extraerValorNodoDeLaRespuesta(Response response, String nodo) {
        UtilApi.logger(this.getClass()).log(Level.INFO, "Obteniendo el valor del nodo {0}", nodo);
        return (String) ((ValidatableResponse) response.then()).extract().body().jsonPath().get(nodo);
    }

    public Object obtenerValorNodoDeArrayRespuestaJson(String nodo, Response response) {
        UtilApi.logger(this.getClass()).log(Level.INFO, "Obteniendo el valor del nodo {0} del arrayObject", nodo);
        return JsonPath.with(response.getBody().asString()).getList(nodo);
    }

    public ValidatableResponse validarCodigoRespuesta(Response response, int statusCode) {
        UtilApi.logger(this.getClass()).log(Level.INFO, "Validando código de la respuesta {0}", statusCode);
        return (ValidatableResponse) ((ValidatableResponse) ((ValidatableResponse) response.then()).assertThat()).statusCode(statusCode);
    }

    public void validarEsquema(Response response, String schemaFile) {
        UtilApi.logger(this.getClass()).log(Level.INFO, "Validando el esquema de la respuesta...");
        File file = new File(schemaFile);
        String jsonObjectString = "";

        try {
            String content = FileUtils.readFileToString(file, "utf-8");
            JSONObject jsonObject = new JSONObject(content);
            jsonObjectString = jsonObject.toString();
        } catch (IOException var8) {
            UtilApi.logger(this.getClass()).throwing(this.sourceClass, "validarEsquema()", var8);
        }

        ((ValidatableResponse) ((ValidatableResponse) response.then()).assertThat()).body(JsonSchemaValidator.matchesJsonSchema(jsonObjectString), new Matcher[0]);
    }

    public String obtenerHeaderDelResponse(Response response, String headerName) {
        UtilApi.logger(this.getClass()).log(Level.INFO, "Obteniendo valor de la cabecera: {0}", headerName);
        return response.getHeader(headerName);
    }

    protected ApiConfigBuilder apiBuilder() {
        return new ApiConfigBuilder();
    }
}
