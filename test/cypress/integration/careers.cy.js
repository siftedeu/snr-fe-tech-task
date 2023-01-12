describe("Index", () => {
  context("Desktop", () => {
    beforeEach(() => {
      cy.visit("/careers");
      cy.url().should("eq", Cypress.env("APP_URL") + "/careers");
      cy.viewport(1024, 768);
    });

    it("Has a title", () => {
      cy.get("h1").should("contain.text", "Careers at Sifted");
    });

    it("Has a button for open roles", () => {
      cy.get('[data-testid="openroles"]').should(
        "contain.text",
        "See our open roles"
      );
    });
  });

  context("Mobile", () => {
    beforeEach(() => {
      cy.visit("/careers");
      cy.url().should("eq", Cypress.env("APP_URL") + "/careers");
      cy.viewport(375, 667); //iphone 8 viewport
    });

    it("Has a mobile title", () => {
      cy.get("h1").should("contain.text", "Careers at Sifted");
    });

    it("Has a button for open roles", () => {
      cy.get('[data-testid="openroles"]').should(
        "contain.text",
        "See our open roles"
      );
    });
  });
});
