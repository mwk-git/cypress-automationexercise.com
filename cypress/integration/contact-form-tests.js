import ContactPage from "../pageObjects/contactPage";
import MainPage from "../pageObjects/mainPage";

const mainPage = new MainPage();
const contactPage = new ContactPage();


beforeEach(() => {
  cy.fixture("page-urls.json").then((page) => {
    cy.visit(page.mainPage);
  });
});

describe("Contact form tests", () => {
    it("Verify if it is possible to send a message via contact form with a picture attached", () => {
        mainPage.verifyMainPageURL();
        mainPage.verifyIfBasicElementsAreDisplayed();
        mainPage.clickContactUsButton();
        contactPage.verifyIfBasicElementsAreDisplayed();
        cy.fixture("test-messages.json").then((message) => {
          contactPage.fillInContactUsForm(message.contactUsMessage);
        })
        contactPage.attachImagetoContactForm("testImage.png");
        contactPage.clickSubmitButton();
        contactPage.verifyIfMessageSuccessfullySentAlertIsVisible();
        contactPage.clickVisitHomePageButton();
        mainPage.verifyMainPageURL();
        mainPage.verifyIfBasicElementsAreDisplayed();
    });
});