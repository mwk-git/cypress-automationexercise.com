import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";

const mainPage = new MainPage();
const loginPage = new LoginPage();

beforeEach(() => {
  cy.fixture("page-urls.json").then((page) => {
    cy.visit(page.mainPage);
  });
});

describe("Log in user tests", () => {
  it("Verify if user can be logged in with correct email and password", () => {
    mainPage.verifyMainPageURL();
    mainPage.verifyIfBasicElementsAreDisplayed();
    mainPage.visitLoginPage();
    loginPage.verifyIfBasicElementsAreDisplayed();
    cy.fixture("test-user-data.json").then((user) => {
      loginPage.fillInLogInForm(user.alreadyRegisteredUser.email, user.alreadyRegisteredUser.password);
      loginPage.clickLogInButton();
      mainPage.verifyIfLoggedInAsUserIndicatorIsDisplayed(user.alreadyRegisteredUser.name);
    });
  });

  it("Verify if user cannot be logged in with incorrect email and password", () => {
    mainPage.verifyMainPageURL();
    mainPage.verifyIfBasicElementsAreDisplayed();
    mainPage.visitLoginPage();
    loginPage.verifyIfBasicElementsAreDisplayed();
    cy.fixture("test-user-data.json").then((user) => {
      loginPage.fillInLogInForm(user.nonExistingUser.email, user.nonExistingUser.password);
    });
    loginPage.clickLogInButton();
    loginPage.verifyIfEmailOrPasswordIncorrectErrorMessageIsDisplayed();
  });

  it("Verify if logged-in user can be logged out", () => {
    mainPage.verifyMainPageURL();
    mainPage.verifyIfBasicElementsAreDisplayed();
    mainPage.visitLoginPage();
    loginPage.verifyIfBasicElementsAreDisplayed();
    cy.fixture("test-user-data.json").then((user) => {
    loginPage.fillInLogInForm(user.alreadyRegisteredUser.email, user.alreadyRegisteredUser.password);
    loginPage.clickLogInButton();
    mainPage.verifyIfLoggedInAsUserIndicatorIsDisplayed(user.alreadyRegisteredUser.name);
    mainPage.clickLogOutButton();
    loginPage.verifyIfUserIsDirectedToLoginPage();
    loginPage.verifyIfUserIsNotLoggedIn();
    });
  });

});
