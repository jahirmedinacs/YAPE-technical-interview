package com.bdd.generic;

import org.openqa.selenium.WebElement;

public interface IMobileDriverDOM {

    void clickElement(WebElement elemento);

    WebElement esperarHastaElementoVisible(int tiempoSegundos, WebElement elemento);

    boolean elementoPresente(WebElement elemento);

    void hacerTouchHaciaArriba();
}
