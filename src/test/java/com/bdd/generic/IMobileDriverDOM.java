package com.bdd.generic;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public interface IMobileDriverDOM {

    void clickElement(WebElement elemento);

    WebElement esperarHastaElementoVisible(long tiempoSegundos, By elemento);

    boolean elementoPresente(WebElement elemento);

    void hacerTouchHaciaArriba();
}
