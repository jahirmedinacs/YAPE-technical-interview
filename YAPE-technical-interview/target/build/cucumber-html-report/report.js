$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/EjemplosAutomatizacionApi.feature");
formatter.feature({
  "name": "Automatización de apis",
  "description": "    Como colaborador de everis\n    Quiero redactar y automatizar APIs Booker\n    Para obtener valores y respuestas de las solucitudes ejecutadas",
  "keyword": "Característica",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    }
  ]
});
formatter.scenario({
  "name": "Crear Token estático correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@CreateTokenHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearToken\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "username",
        "admin"
      ]
    },
    {
      "cells": [
        "password",
        "password123"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/auth",
        "post"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear Token estático correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@CreateTokenUnHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearToken\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "username",
        "admin"
      ]
    },
    {
      "cells": [
        "password",
        "password123"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/au",
        "post"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener libros correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@ObtenerLibrosHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "User-Agent",
        "PostmanRuntime/7.28.3"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    },
    {
      "cells": [
        "Accept-Encoding",
        "gzip, deflate, br"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion de las cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/booking",
        "get"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDeLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener libros correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@ObtenerLibrosUnHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "User-Agent",
        "PostmanRuntime/7.28.3"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    },
    {
      "cells": [
        "Accept-Encoding",
        "gzip, deflate, br"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion de las cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/bokin",
        "get"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDeLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener libros por un id especifico correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@ObtenerLibrosIdEspecificoHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "User-Agent",
        "PostmanRuntime/7.28.3"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    },
    {
      "cells": [
        "Accept-Encoding",
        "gzip, deflate, br"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion de las cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/booking/10",
        "get"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDeLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener libros por un id especifico correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@ObtenerLibrosIdEspecificoUnHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "User-Agent",
        "PostmanRuntime/7.28.3"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    },
    {
      "cells": [
        "Accept-Encoding",
        "gzip, deflate, br"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion de las cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/bookin/20",
        "get"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDeLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear una libreria correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@CreateBookingHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "User-Agent",
        "PostmanRuntime/7.28.3"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    },
    {
      "cells": [
        "Accept-Encoding",
        "gzip, deflate, br"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearLibro\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "firstname",
        "EJEMPLO"
      ]
    },
    {
      "cells": [
        "additionalneeds",
        "Breakfast"
      ]
    },
    {
      "cells": [
        "bookingdates.checkin",
        "2020-01-01"
      ]
    },
    {
      "cells": [
        "bookingdates.checkout",
        "2021-06-01"
      ]
    },
    {
      "cells": [
        "totalprice",
        "123"
      ]
    },
    {
      "cells": [
        "depositpaid",
        "true"
      ]
    },
    {
      "cells": [
        "lastname",
        "API TEST"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/booking",
        "post"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear una libreria correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@CreateBookingUnHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "User-Agent",
        "PostmanRuntime/7.28.3"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    },
    {
      "cells": [
        "Accept-Encoding",
        "gzip, deflate, br"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearLibro\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "firstname",
        "LIBRO_O1"
      ]
    },
    {
      "cells": [
        "additionalneeds",
        "Breakfast"
      ]
    },
    {
      "cells": [
        "bookingdates.checkin",
        "2020-01-01"
      ]
    },
    {
      "cells": [
        "bookingdates.checkout",
        "2021-06-01"
      ]
    },
    {
      "cells": [
        "totalprice",
        "123"
      ]
    },
    {
      "cells": [
        "depositpaid",
        "true"
      ]
    },
    {
      "cells": [
        "lastname",
        "API TEST"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/booking/new",
        "post"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actualizar un libro correctamente con token actualizado",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@ActualizarLibroHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ]
    },
    {
      "cells": [
        "Cookie",
        "token\u003d9415ce1a20ed026"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearLibro\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "firstname",
        "Libro_creado"
      ]
    },
    {
      "cells": [
        "lastname",
        "API TEST"
      ]
    },
    {
      "cells": [
        "totalprice",
        "123"
      ]
    },
    {
      "cells": [
        "depositpaid",
        "true"
      ]
    },
    {
      "cells": [
        "bookingdates.checkin",
        "2020-01-01"
      ]
    },
    {
      "cells": [
        "bookingdates.checkout",
        "2021-06-01"
      ]
    },
    {
      "cells": [
        "additionalneeds",
        "Breakfast"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/booking/3",
        "put"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: El código de respuesta, no es el adecuado.\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat com.bdd.api.stepdefinition.EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(EjemplosAutomatizacionApiStepDefinition.java:40)\n\tat ✽.valido que el codigo de respuesta sea \"200\"(src/test/resources/features/EjemplosAutomatizacionApi.feature:167)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Actualizar un libro correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@ActualizarLibroUnHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ]
    },
    {
      "cells": [
        "Cookie",
        "token\u003dabc"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearLibro\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "firstname",
        "Libro_creado"
      ]
    },
    {
      "cells": [
        "lastname",
        "API TEST"
      ]
    },
    {
      "cells": [
        "totalprice",
        "123"
      ]
    },
    {
      "cells": [
        "depositpaid",
        "true"
      ]
    },
    {
      "cells": [
        "bookingdates.checkin",
        "2020-01-01"
      ]
    },
    {
      "cells": [
        "bookingdates.checkout",
        "2021-06-01"
      ]
    },
    {
      "cells": [
        "additionalneeds",
        "Breakfast"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/booking/3",
        "put"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"403\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actualiza una reserva actual con una carga útil parcial correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@PartialUpdateBookingHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Authorization",
        "Basic YWRtaW46cGFzc3dvcmQxMjM\u003d"
      ]
    },
    {
      "cells": [
        "Cookie",
        "token\u003d7a5fa25ad30e529"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearLibro_totalprice\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "totalprice",
        "345345"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/booking/3",
        "patch"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actualiza una reserva actual con una carga útil parcial correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@PartialUpdateBookingUnHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Authorization",
        "Basic YWRtaW46cGFzc3dvcmQxMjM\u003d"
      ]
    },
    {
      "cells": [
        "Cookie",
        "token\u003d7a5fa25ad30e529"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearLibro_totalprice\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "totalprice",
        "345345"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/bookin/3",
        "patch"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Eliminar un libro correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@EliminarLibroHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Authorization",
        "Basic YWRtaW46cGFzc3dvcmQxMjM\u003d"
      ]
    },
    {
      "cells": [
        "Cookie",
        "token\u003d26f19d37551dce0"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion de las cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/booking/5",
        "delete"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDeLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"201\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Eliminar un libro previamente eliminado correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemplosAutomatizacionApi"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@EliminarLibroUnHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Authorization",
        "Basic YWRtaW46cGFzc3dvcmQxMjM\u003d"
      ]
    },
    {
      "cells": [
        "Cookie",
        "token\u003d26f19d37551dce0"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion de las cabeceras",
  "rows": [
    {
      "cells": [
        "tipo",
        "url",
        "metodo"
      ]
    },
    {
      "cells": [
        "ux",
        "/booking/5",
        "delete"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.ejecutoElServicioConLaConfiguracionDeLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"405\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EjemplosAutomatizacionApiStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
});