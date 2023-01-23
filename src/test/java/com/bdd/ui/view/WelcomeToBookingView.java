package com.bdd.ui.view;

import com.bdd.MobileDriverManager;
import com.bdd.generic.MobileDriverDOM;
import com.bdd.util.UtilMobile;
//import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

public class WelcomeToBookingView extends MobileDriverDOM{
    @AndroidFindBy(id = "com.booking:id/facet_search_box_accommodation_destination")
    private WebElement DestinationTextBox;

    @AndroidFindBy(id = "com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content")
    private WebElement DestinationTextBoxActive;

    public void clickDestinationTextBox() {
        esperarHastaElementoVisible(5, DestinationTextBox);
        DestinationTextBox.click();
    }

    public void writeDestinationTextBox(String text) {
        esperarHastaElementoVisible(5, DestinationTextBoxActive);
        DestinationTextBoxActive.sendKeys(text + Keys.ENTER);


    }
}
