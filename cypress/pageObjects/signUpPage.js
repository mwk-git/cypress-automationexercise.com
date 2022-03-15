const selectors = {
  nameField: "#name",
  emailField: "#email",
  passwordField: "#password",
  firstNameField: "#first_name",
  lastNameField: "#last_name",
  addressField: "#address1",
  countrySelect: "#country",
  stateField: "#state",
  cityField: "#city",
  zipcodeField: "#zipcode",
  mobileNumberField: "#mobile_number",


  nameFieldLabel: "label[for='name']",
  emailFieldLabel: "label[for='email']",
  passwordFieldLabel: "label[for='password']",
  firstNameFieldLabel: "label[for='first_name']",
  lastNameFieldLabel: "label[for='last_name']",
  addressFieldLabel: "label[for='address1']",
  countrySelectLabel: "label[for='country']",
  stateFieldLabel: "label[for='state']",
  cityFieldLabel: "label[for='city']",
  mobileNumberFieldLabel: "label[for='mobile_number']",

  createAccountButton: "button[data-qa='create-account']",
  continueButton: "[data-qa='continue-button']",

  accountCreatedInfoHeader: "[data-qa='account-created']",
  accountCreatedInfoHeaderText: "[data-qa='account-created'] b"
};

class SignUpPage {
  clickContinueButton() {
    cy.get(selectors.continueButton).click();
  }

  clickCreateAccountButton() {
    cy.get(selectors.createAccountButton).click();
  }

  fillInRequiredFormFields(user) {
    cy.get(selectors.passwordField).type(user.newUserRegistrationData.password, { delay: 30 });
    cy.get(selectors.firstNameField).type(user.newUserRegistrationData.firstName, { delay: 30 });
    cy.get(selectors.lastNameField).type(user.newUserRegistrationData.lastName, { delay: 30 });
    cy.get(selectors.addressField).type(user.newUserRegistrationData.address, { delay: 30 });
    cy.get(selectors.countrySelect).select(user.newUserRegistrationData.country);
    cy.get(selectors.stateField).type(user.newUserRegistrationData.state, { delay: 30 });
    cy.get(selectors.cityField).type(user.newUserRegistrationData.city, { delay: 30 });
    cy.get(selectors.zipcodeField).type(user.newUserRegistrationData.zipcode, { delay: 30 });
    cy.get(selectors.mobileNumberField).type(user.newUserRegistrationData.mobileNumber, { delay: 30 });
  }

  verifyIfAccountCreatedMessageIsDisplayed() {
    cy.get(selectors.accountCreatedInfoHeader).should("be.visible");
    cy.get(selectors.accountCreatedInfoHeaderText).should("contain", "Account Created!");
  }

  verifyIfRequiredFormElementsAreDisplayed() {
    cy.get(selectors.nameField).should("be.visible");
    cy.get(selectors.nameFieldLabel).should("be.visible");
    cy.get(selectors.emailField).should("be.visible");
    cy.get(selectors.emailFieldLabel).should("be.visible");
    cy.get(selectors.passwordField).should("be.visible");
    cy.get(selectors.passwordFieldLabel).should("be.visible");
    cy.get(selectors.firstNameField).should("be.visible");
    cy.get(selectors.firstNameFieldLabel).should("be.visible");
    cy.get(selectors.lastNameField).should("be.visible");
    cy.get(selectors.lastNameFieldLabel).should("be.visible");
    cy.get(selectors.addressField).should("be.visible");
    cy.get(selectors.addressFieldLabel).should("be.visible");
    cy.get(selectors.countrySelect).should("be.visible");
    cy.get(selectors.countrySelectLabel).should("be.visible");
    cy.get(selectors.stateField).should("be.visible");
    cy.get(selectors.stateFieldLabel).should("be.visible");
    cy.get(selectors.cityField).should("be.visible");
    cy.get(selectors.cityFieldLabel).should("be.visible");
    cy.get(selectors.zipcodeField).should("be.visible");
    cy.get(selectors.mobileNumberField).should("be.visible");
    cy.get(selectors.mobileNumberFieldLabel).should("be.visible");
    cy.get(selectors.createAccountButton).should("be.visible");
  }
}

export default SignUpPage;
