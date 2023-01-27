# Prueba Tecnica YAPE

## Video Demo (Ejecucion con Jenkins)

[![Watch the video](https://img.youtube.com/vi/zOlobbafeEg/default.jpg)](https://youtu.be/zOlobbafeEg)

## Live Web Report (Reporte de Ejecucion de las Pruebas)

[WebPage](https://jahirmedinacs.github.io/YAPE-technical-interview/)



## YAPE-technical interview Repo - Pasos para Reproducir

- Se incluye el archivo collections.json para Postman con los servicios a probar (RestFullBooker EndPoint)
- Para la ejecucion del proyecto usar java 17
- El emulador o dispositivo android en el que se ejecutara la APK de Booking.com debe tener ya instalada la app.
- Para modificar el puerto, nombre o uidd del emulador revisar el archivo "src/test/java/com/bdd/MobileDriverManager.java"
- La ejecucion via Jenkins se realiza empleando el Runner (JUnit Class que carga todos los escenarios en gerkin)

- Para una video demo de la ejecucion con herramientas CI/CD, revisar el video adjunto.

