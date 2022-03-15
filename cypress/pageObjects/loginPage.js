const selectors = {
  loginHeader: ".login-form > h2",

  emailFieldForLogIn: ".login-form [name='email']",
  passwordFieldForLogIn: ".login-form [name='password']",
  loginButton: ".login-form [data-qa='login-button']",

  signUpHeader: ".signup-form > h2",
  nameFieldForSignUp: ".signup-form [name='name']",
  emailFieldForSignUp: ".signup-form [name='email']",
  signUpButton: ".signup-form [data-qa='signup-button']",

  emailAlreadyExistErrorMessage: ".signup-form p",
  emailOrPasswordIncorrectErrorMessage: ".login-form p",

  lastNavbarElement: ".navbar-nav li:last-child a",
};

class LoginPage {
  clickLogInButton() {
    cy.get(selectors.loginButton).click();
  }

  clickSignUpButton() {
    cy.get(selectors.signUpButton).click();
  }

  fillInLogInForm(email, password) {
    cy.get(selectors.emailFieldForLogIn).type(email, { delay: 30 });
    cy.get(selectors.passwordFieldForLogIn).type(password, { delay: 30 });
  }

  fillInSignUpForm(name, address) {
    cy.get(selectors.nameFieldForSignUp).type(name, { delay: 30 });
    cy.get(selectors.emailFieldForSignUp).type(address, { delay: 30 });
  }

  verifyIfBasicElementsAreDisplayed() {
    cy.get(selectors.loginHeader).should("be.visible");
    cy.get(selectors.emailFieldForLogIn).should("be.visible");
    cy.get(selectors.passwordFieldForLogIn).should("be.visible");
    cy.get(selectors.loginButton).should("be.visible");
    cy.get(selectors.signUpHeader).should("be.visible");
    cy.get(selectors.nameFieldForSignUp).should("be.visible");
    cy.get(selectors.emailFieldForSignUp).should("be.visible");
    cy.get(selectors.signUpButton).should("be.visible");
  }

  verifyIfEmailAlreadyExistErrorMessageIsDisplayed() {
    cy.get(selectors.emailAlreadyExistErrorMessage)
      .contains("Email Address already exist!")
      .should("be.visible");
  }

  verifyIfEmailOrPasswordIncorrectErrorMessageIsDisplayed() {
    cy.get(selectors.emailOrPasswordIncorrectErrorMessage)
      .contains("Your email or password is incorrect!")
      .should("be.visible");
  }

  verifyIfUserIsDirectedToLoginPage() {
    cy.fixture("page-urls.json").then((page) => {
      cy.url().should("eq", page.loginPage);
    });
  }

  verifyIfUserIsNotLoggedIn() {
    cy.get(selectors.lastNavbarElement).should("not.contain", "Logged in as");
  }
}

export default LoginPage;
