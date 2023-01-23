package com.bdd.ui.step;

import com.bdd.ui.view.WelcomeToBookingView;
import com.bdd.util.UtilMobile;
import net.thucydides.core.annotations.Step;

public class BookingStep {

    private WelcomeToBookingView welcomeToBookingView() {
        return new WelcomeToBookingView();
    }

    public void seleccionoYEscriboDestino(String destino) {
//        UtilMobile.screenShotViewPhone();

        welcomeToBookingView().clickDestinationTextBox();
        welcomeToBookingView().writeDestinationTextBox(destino);

//        UtilMobile.screenShotViewPhone();
    }

}
