const selectors = {
  mainLogo: ".header-middle .logo img",
  mainNav: ".shop-menu .nav",
  sidebarWithProductCategories: ".left-sidebar",
  featureItemsSection: ".features_items",
  lastNavbarElement: ".navbar-nav li:last-child a",

  loginSignUpPageButton: ".nav a[href='/login']",
  logOutButton: ".nav a[href='/logout']",
  contactUsButton: ".nav a[href='/contact_us']"
};

class MainPage {
  clickContactUsButton() {
    cy.get(selectors.contactUsButton).click();
  }

  clickLogOutButton() {
    cy.get(selectors.logOutButton).click();
  }

  deleteUser(user) {
    cy.fixture("page-urls.json").then((page) => {
      cy.request({
        method: "DELETE",
        url: page.userDeletePage,
        form: true,
        body: { email: user.newUserRegistrationData.email, password: user.newUserRegistrationData.password },
      });
    });
  }

  verifyIfBasicElementsAreDisplayed() {
    cy.get(selectors.mainLogo).should("be.visible");
    cy.get(selectors.mainNav).should("be.visible");
    cy.get(selectors.sidebarWithProductCategories).should("be.visible");
    cy.get(selectors.featureItemsSection).should("be.visible");
  }

  verifyIfLoggedInAsUserIndicatorIsDisplayed(userName) {
    cy.get(selectors.lastNavbarElement).should(
      "contain",
      "Logged in as " + userName
    );
  }

  verifyMainPageURL() {
    cy.fixture("page-urls.json").then((page) => {
      cy.url().should("eql", page.mainPage);
    })
  }

  visitLoginPage() {
    cy.get(selectors.loginSignUpPageButton).click();
  }
}

export default MainPage;
