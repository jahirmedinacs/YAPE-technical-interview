package com.bdd.util;

import com.bdd.Constant;
import com.bdd.MobileDriverManager;
//import cucumber.api.Scenario;
import io.cucumber.java.Scenario;
import net.serenitybdd.core.Serenity;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class UtilMobile {
    public static void saveVariablesOnSession(String key, Scenario value) {
        Serenity.setSessionVariable(key).to(value);
    }

    public static <T> T getVariableOnSession(String key) {
        return Serenity.sessionVariableCalled(key);
    }

    public static void screenShotViewPhone() {
        System.out.println("Obteniendo pantalla...");
        takeScreenShotMobile(getVariableOnSession(Constant.SCENARIO), MobileDriverManager.getMobileDriver());
    }

    public static void takeScreenShotMobile(Scenario scenario, WebDriver driver) {
        byte[] screenshoot = (byte[]) ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
        scenario.attach(screenshoot, "image/png", "");
    }


}
