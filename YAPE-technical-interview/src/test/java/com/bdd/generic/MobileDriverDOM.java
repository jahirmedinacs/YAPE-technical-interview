package com.bdd.generic;

import com.bdd.MobileDriverManager;
import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

public class MobileDriverDOM implements IMobileDriverDOM {
    public MobileDriverDOM() {
        PageFactory.initElements(new AppiumFieldDecorator(MobileDriverManager.getMobileDriver()), this);
    }

    public MobileElement esperarHastaElementoVisible(int tiempoSegundos, MobileElement elemento) {
        WebDriverWait webDriverWait = new WebDriverWait(MobileDriverManager.getMobileDriver(), (long)tiempoSegundos);
        return (MobileElement) webDriverWait.until(ExpectedConditions.visibilityOf(elemento));
    }

    public void clickElement(MobileElement elemento) {
        elemento.click();
    }
    public boolean elementoPresente(MobileElement elemento) {
        MobileDriverManager.getMobileDriver().manage().timeouts().implicitlyWait(10L, TimeUnit.SECONDS);
        boolean esVisible = false;

        try {
            esVisible = elemento.isDisplayed();
        } catch (NoSuchElementException e) {
            System.out.println("e" + e);
        }

        return esVisible;
    }


    public void hacerTouchHaciaArriba() {
        int pressX = MobileDriverManager.getMobileDriver().manage().window().getSize().width/2;
        int bottomY = MobileDriverManager.getMobileDriver().manage().window().getSize().height * 4 /5;
        int topY = MobileDriverManager.getMobileDriver().manage().window().getSize().height / 6;

        TouchAction touchAction = new TouchAction(MobileDriverManager.getMobileDriver());
        touchAction.longPress(PointOption.point(pressX, bottomY)).moveTo(PointOption.point(pressX, topY)).release().perform();
    }
}
