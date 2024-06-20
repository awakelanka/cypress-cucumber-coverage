Cypress.Commands.add("login", (username, password) => {
  Cypress.session.clearAllSavedSessions();
  cy.visit("/");
  cy.get("[data-cy='title']").should("exist");
});
