import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import SignUpPage from "../pageObjects/signUpPage";

const mainPage = new MainPage();
const loginPage = new LoginPage();
const signUpPage = new SignUpPage();

beforeEach(() => {
  cy.fixture("page-urls.json").then((page) => {
    cy.visit(page.mainPage);
  });
});

describe("Register a new user tests", () => {

  it("Verify if a new user can be sucessfully registered", () => {
    mainPage.verifyMainPageURL();
    mainPage.verifyIfBasicElementsAreDisplayed();
    mainPage.visitLoginPage();
    loginPage.verifyIfBasicElementsAreDisplayed();
    cy.fixture("test-user-data.json").then((user) => {
      loginPage.fillInSignUpForm(user.newUserRegistrationData.name, user.newUserRegistrationData.email);
      loginPage.clickSignUpButton();
      signUpPage.verifyIfRequiredFormElementsAreDisplayed();
      signUpPage.fillInRequiredFormFields(user);
      signUpPage.clickCreateAccountButton();
      signUpPage.verifyIfAccountCreatedMessageIsDisplayed();
      signUpPage.clickContinueButton();
      mainPage.verifyIfLoggedInAsUserIndicatorIsDisplayed(user.newUserRegistrationData.name);
      mainPage.deleteUser(user);
    });
  });

  it("Verify if it is not possible to register another account with already existing e-mail", () => {
    mainPage.verifyMainPageURL();
    mainPage.verifyIfBasicElementsAreDisplayed();
    mainPage.visitLoginPage();
    loginPage.verifyIfBasicElementsAreDisplayed();
    cy.fixture("test-user-data.json").then((user) => {
      loginPage.fillInSignUpForm(user.alreadyRegisteredUser.name, user.alreadyRegisteredUser.email);
    });
    loginPage.clickSignUpButton();
    loginPage.verifyIfEmailAlreadyExistErrorMessageIsDisplayed();
  });
});
