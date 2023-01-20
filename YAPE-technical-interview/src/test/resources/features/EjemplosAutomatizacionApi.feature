  #language: es
  @EjemplosAutomatizacionApi
  Característica: Automatización de apis
    Como colaborador de everis
    Quiero redactar y automatizar APIs Booker
    Para obtener valores y respuestas de las solucitudes ejecutadas

  #CREAR TOKEN
    @Restful-Booker  @CreateTokenHappyPath
    Escenario: Crear Token estático correctamente
      Dado que configuro las cabeceras
        | cabeceras    | valor            |
        | Content-Type | application/json |
      Cuando configuro el body del servicio: "crearToken"
        | key      | valor       |
        | username | admin       |
        | password | password123 |
      Y ejecuto el servicio con la configuracion del body y cabeceras
        | tipo | url   | metodo |
        | ux   | /auth | post   |
      Entonces valido que el codigo de respuesta sea "200"

    @Restful-Booker  @CreateTokenUnHappyPath
    Escenario: Crear Token estático correctamente
      Dado que configuro las cabeceras
        | cabeceras    | valor            |
        | Content-Type | application/json |
      Cuando configuro el body del servicio: "crearToken"
        | key      | valor       |
        | username | admin       |
        | password | password123 |
      Y ejecuto el servicio con la configuracion del body y cabeceras
        | tipo | url | metodo |
        | ux   | /au | post   |
      Entonces valido que el codigo de respuesta sea "404"


  # 1. OBTENER ID DE LIBROS (GET) 2 ESCENARIOS: HAPPY Y UNHAPPY
  # 2. OBTENER UN LIBRO POR  UN ID ESPECÍFICO  (GET) 2 ESCENARIOS: HAPPY Y UNHAPPY
  # 3. BOOKING - CREATEBOOKING (POST) 2 ESCENARIOS: HAPPY Y UNHAPPY
  # 4. BOOKING - UPDATE (PUT) 2 ESCENARIOS: HAPPY Y UNHAPPY
  # 5. BOOKING - PARTIALUPDATEBOOKING (PATCH) 2 ESCENARIOS: HAPPY Y UNHAPPY
  # 6. DELETEBOOKING (DELETE) 2 ESCENARIOS: HAPPY Y UNHAPPY


  # 1. OBTENER ID DE LIBROS (GET) 2 ESCENARIOS: HAPPY Y UNHAPPY
    @Restful-Booker  @ObtenerLibrosHappyPath
    Escenario: Obtener libros correctamente
      Dado que configuro las cabeceras
        | cabeceras       | valor                 |
        | User-Agent      | PostmanRuntime/7.28.3 |
        | Accept          | */*                   |
        | Accept-Encoding | gzip, deflate, br     |
        | Connection      | keep-alive            |
      Y ejecuto el servicio con la configuracion de las cabeceras
        | tipo | url      | metodo |
        | ux   | /booking | get    |
      Entonces valido que el codigo de respuesta sea "200"

    @Restful-Booker  @ObtenerLibrosUnHappyPath
    Escenario: Obtener libros correctamente
      Dado que configuro las cabeceras
        | cabeceras       | valor                 |
        | User-Agent      | PostmanRuntime/7.28.3 |
        | Accept          | */*                   |
        | Accept-Encoding | gzip, deflate, br     |
        | Connection      | keep-alive            |
      Y ejecuto el servicio con la configuracion de las cabeceras
        | tipo | url     | metodo |
        | ux   | /bokin | get    |
      Entonces valido que el codigo de respuesta sea "404"

  # 2. OBTENER UN LIBRO POR  UN ID ESPECÍFICO  (GET) 2 ESCENARIOS: HAPPY Y UNHAPPY
    @Restful-Booker  @ObtenerLibrosIdEspecificoHappyPath
    Escenario: Obtener libros por un id especifico correctamente
      Dado que configuro las cabeceras
        | cabeceras       | valor                 |
        | User-Agent      | PostmanRuntime/7.28.3 |
        | Accept          | */*                   |
        | Accept-Encoding | gzip, deflate, br     |
        | Connection      | keep-alive            |
      Y ejecuto el servicio con la configuracion de las cabeceras
        | tipo | url         | metodo |
        | ux   | /booking/10 | get    |
      Entonces valido que el codigo de respuesta sea "200"

    @Restful-Booker  @ObtenerLibrosIdEspecificoUnHappyPath
    Escenario: Obtener libros por un id especifico correctamente
      Dado que configuro las cabeceras
        | cabeceras       | valor                 |
        | User-Agent      | PostmanRuntime/7.28.3 |
        | Accept          | */*                   |
        | Accept-Encoding | gzip, deflate, br     |
        | Connection      | keep-alive            |
      Y ejecuto el servicio con la configuracion de las cabeceras
        | tipo | url        | metodo |
        | ux   | /bookin/20 | get    |
      Entonces valido que el codigo de respuesta sea "404"

  # 3. BOOKING - CREATEBOOKING (POST) 2 ESCENARIOS: HAPPY Y UNHAPPY
    @Restful-Booker  @CreateBookingHappyPath
    Escenario: Crear una libreria correctamente
      Dado que configuro las cabeceras
        | cabeceras       | valor                 |
        | Content-Type    | application/json      |
        | User-Agent      | PostmanRuntime/7.28.3 |
        | Accept          | */*                   |
        | Accept-Encoding | gzip, deflate, br     |
        | Connection      | keep-alive            |
      Cuando configuro el body del servicio: "crearLibro"
        | key                   | valor      |
        | firstname             | EJEMPLO    |
        | additionalneeds       | Breakfast  |
        | bookingdates.checkin  | 2020-01-01 |
        | bookingdates.checkout | 2021-06-01 |
        | totalprice            | 123        |
        | depositpaid           | true       |
        | lastname              | API TEST   |
      Y ejecuto el servicio con la configuracion del body y cabeceras
        | tipo | url      | metodo |
        | ux   | /booking | post   |
      Entonces valido que el codigo de respuesta sea "200"

    @Restful-Booker  @CreateBookingUnHappyPath
    Escenario: Crear una libreria correctamente
      Dado que configuro las cabeceras
        | cabeceras       | valor                 |
        | Content-Type    | application/json      |
        | User-Agent      | PostmanRuntime/7.28.3 |
        | Accept          | */*                   |
        | Accept-Encoding | gzip, deflate, br     |
        | Connection      | keep-alive            |
      Cuando configuro el body del servicio: "crearLibro"
        | key                   | valor      |
        | firstname             | LIBRO_O1   |
        | additionalneeds       | Breakfast  |
        | bookingdates.checkin  | 2020-01-01 |
        | bookingdates.checkout | 2021-06-01 |
        | totalprice            | 123        |
        | depositpaid           | true       |
        | lastname              | API TEST   |
      Y ejecuto el servicio con la configuracion del body y cabeceras
        | tipo | url          | metodo |
        | ux   | /booking/new | post   |
      Entonces valido que el codigo de respuesta sea "404"

  # 4. BOOKING - UPDATE (PUT) 2 ESCENARIOS: HAPPY Y UNHAPPY
    @Restful-Booker  @ActualizarLibroHappyPath
    Escenario: Actualizar un libro correctamente con token actualizado
      Dado que configuro las cabeceras
        | cabeceras    | valor                 |
        | Content-Type | application/json      |
        | Accept       | application/json      |
        | Cookie       | token=9415ce1a20ed026 |
      Cuando configuro el body del servicio: "crearLibro"
        | key                   | valor        |
        | firstname             | Libro_creado |
        | lastname              | API TEST     |
        | totalprice            | 123          |
        | depositpaid           | true         |
        | bookingdates.checkin  | 2020-01-01   |
        | bookingdates.checkout | 2021-06-01   |
        | additionalneeds       | Breakfast    |
      Y ejecuto el servicio con la configuracion del body y cabeceras
        | tipo | url        | metodo |
        | ux   | /booking/3 | put    |
      Entonces valido que el codigo de respuesta sea "200"

    @Restful-Booker  @ActualizarLibroUnHappyPath
    Escenario: Actualizar un libro correctamente
      Dado que configuro las cabeceras
        | cabeceras    | valor            |
        | Content-Type | application/json |
        | Accept       | application/json |
        | Cookie       | token=abc        |
      Cuando configuro el body del servicio: "crearLibro"
        | key                   | valor        |
        | firstname             | Libro_creado |
        | lastname              | API TEST     |
        | totalprice            | 123          |
        | depositpaid           | true         |
        | bookingdates.checkin  | 2020-01-01   |
        | bookingdates.checkout | 2021-06-01   |
        | additionalneeds       | Breakfast    |
      Y ejecuto el servicio con la configuracion del body y cabeceras
        | tipo | url        | metodo |
        | ux   | /booking/3 | put    |
      Entonces valido que el codigo de respuesta sea "403"

  # 5. BOOKING - PARTIALUPDATEBOOKING (PATCH) 2 ESCENARIOS: HAPPY Y UNHAPPY
    @Restful-Booker  @PartialUpdateBookingHappyPath
    Escenario: Actualiza una reserva actual con una carga útil parcial correctamente
      Dado que configuro las cabeceras
        | cabeceras     | valor                          |
        | Content-Type  | application/json               |
        | Authorization | Basic YWRtaW46cGFzc3dvcmQxMjM= |
        | Cookie        | token=7a5fa25ad30e529          |
      Cuando configuro el body del servicio: "crearLibro_totalprice"
        | key        | valor  |
        | totalprice | 345345 |
      Y ejecuto el servicio con la configuracion del body y cabeceras
        | tipo | url        | metodo |
        | ux   | /booking/3 | patch  |
      Entonces valido que el codigo de respuesta sea "200"

    @Restful-Booker  @PartialUpdateBookingUnHappyPath
    Escenario: Actualiza una reserva actual con una carga útil parcial correctamente
      Dado que configuro las cabeceras
        | cabeceras     | valor                          |
        | Content-Type  | application/json               |
        | Authorization | Basic YWRtaW46cGFzc3dvcmQxMjM= |
        | Cookie        | token=7a5fa25ad30e529          |
      Cuando configuro el body del servicio: "crearLibro_totalprice"
        | key        | valor  |
        | totalprice | 345345 |
      Y ejecuto el servicio con la configuracion del body y cabeceras
        | tipo | url       | metodo |
        | ux   | /bookin/3 | patch  |
      Entonces valido que el codigo de respuesta sea "404"

  # 6. DELETEBOOKING (DELETE) 2 ESCENARIOS: HAPPY Y UNHAPPY
    @Restful-Booker  @EliminarLibroHappyPath
    Escenario: Eliminar un libro correctamente
      Dado que configuro las cabeceras
        | cabeceras     | valor                          |
        | Content-Type  | application/json               |
        | Authorization | Basic YWRtaW46cGFzc3dvcmQxMjM= |
        | Cookie        | token=26f19d37551dce0          |
      Y ejecuto el servicio con la configuracion de las cabeceras
        | tipo | url        | metodo |
        | ux   | /booking/5 | delete |
      Entonces valido que el codigo de respuesta sea "201"

    @Restful-Booker  @EliminarLibroUnHappyPath
    Escenario: Eliminar un libro previamente eliminado correctamente
      Dado que configuro las cabeceras
        | cabeceras     | valor                          |
        | Content-Type  | application/json               |
        | Authorization | Basic YWRtaW46cGFzc3dvcmQxMjM= |
        | Cookie        | token=26f19d37551dce0          |
      Y ejecuto el servicio con la configuracion de las cabeceras
        | tipo | url        | metodo |
        | ux   | /booking/5 | delete |
      Entonces valido que el codigo de respuesta sea "405"