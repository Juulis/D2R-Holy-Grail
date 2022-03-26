import javax.swing.*;
import java.io.File;
import java.io.IOException;

public class HolyGrail {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {

            @Override
            public void run() {
                SimpleSwingBrowser browser = new SimpleSwingBrowser();
                browser.setVisible(true);
                browser.loadURL("File:///C:\\Users\\Min Dator\\git\\D2R-Holy-Grail\\src\\main\\resources\\main.html");
            }
        });
    }
}
