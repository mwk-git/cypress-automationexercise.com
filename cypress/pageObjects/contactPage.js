const selectors = {
  contactFormHeader: ".contact-form h2",

  emailField: "[data-qa='email']",
  filePicker: "[name='upload_file']",
  nameField: "[data-qa='name']",
  messageTextArea: "[data-qa='message']",
  subjectField: "[data-qa='subject']",

  submitButton: "[data-qa='submit-button']",
  visitHomePageButton: ".btn-success",
  
  messageSuccessfullySentAlert: ".contact-form .alert-success"
};

class ContactPage {
  attachImagetoContactForm(image) {
    cy.get(selectors.filePicker).attachFile(image);
  }

  clickSubmitButton() {
    cy.get(selectors.submitButton).click();
  }

  clickVisitHomePageButton() {
    cy.get(selectors.visitHomePageButton).click();
  }

  fillInContactUsForm(message) {
    cy.get(selectors.nameField).type(message.name, { delay: 30 });
    cy.get(selectors.emailField).type(message.email, { delay: 30 });
    cy.get(selectors.subjectField).type(message.subject, { delay: 30 });
    cy.get(selectors.messageTextArea).type(message.messageContent, {delay: 30});
  }

  verifyIfBasicElementsAreDisplayed() {
    cy.get(selectors.contactFormHeader).should("be.visible");
    cy.get(selectors.nameField).should("be.visible");
    cy.get(selectors.emailField).should("be.visible");
    cy.get(selectors.subjectField).should("be.visible");
    cy.get(selectors.messageTextArea).should("be.visible");
    cy.get(selectors.filePicker).should("be.visible");
    cy.get(selectors.submitButton).should("be.visible");
  }

  verifyIfMessageSuccessfullySentAlertIsVisible() {
    cy.get(selectors.messageSuccessfullySentAlert).should("be.visible").and("contain", "Success! Your details have been submitted successfully.")
  }
}

export default ContactPage;
