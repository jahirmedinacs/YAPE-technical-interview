package com.bdd.generic;

import io.appium.java_client.MobileElement;

public interface IMobileDriverDOM {

    void clickElement(MobileElement elemento);

    MobileElement esperarHastaElementoVisible(int tiempoSegundos, MobileElement elemento);

    boolean elementoPresente(MobileElement elemento);

    void hacerTouchHaciaArriba();
}
