#language:es
@BookingAutomation
  Característica: Voy a automatizar en la android
    Como prueba tecnica
    Quiero automatizar un apk mobile de Booking
    Para testear funcionalidades asociadas a la APK

  Antecedentes:
    Dado que cargo el aplicativo de Booking

  @BookingAutomation @HappyPath
  Esquema del escenario: Carga correcta de Booking.com
    Dado Selecciono y Escribo como destino "<destino>"
#    Y Escojo Fechas entre el "<fechaInicio>" y "<fechaFinal>"
#    Y Defino cuantos
    Ejemplos:
    | destino |
    | cuzco |
