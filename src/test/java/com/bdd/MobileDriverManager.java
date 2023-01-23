package com.bdd;

import io.appium.java_client.AppiumDriver;
//import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import net.thucydides.core.util.EnvironmentVariables;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class MobileDriverManager {

    private static AppiumDriver appiumDriver;
    private  EnvironmentVariables environmentVariables;
    private static AppiumDriver driver;

    public MobileDriverManager(EnvironmentVariables environmentVariables) {
        this.environmentVariables = environmentVariables;
    }

    public void setMobileDriver() throws MalformedURLException {

        DesiredCapabilities desiredCapabilities = new DesiredCapabilities();

        desiredCapabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "uiautomator2");
        desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
        desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, "8.1");
        desiredCapabilities.setCapability("deviceName", "Pixel_3a_API_30_x86");
        desiredCapabilities.setCapability(MobileCapabilityType.UDID, "emulator-5554");
        desiredCapabilities.setCapability(MobileCapabilityType.NO_RESET, true);
        desiredCapabilities.setCapability("appPackage", "com.booking");
//        desiredCapabilities.setCapability("appActivity", "com.google.android.apps.chrome.Main");
        desiredCapabilities.setCapability("appActivity", "com.booking.startup.HomeActivity");

        appiumDriver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), desiredCapabilities);

        appiumDriver.manage().timeouts().implicitlyWait(30L , TimeUnit.SECONDS);
    }

    public static AppiumDriver getMobileDriver() {
        return appiumDriver;
    }


}
