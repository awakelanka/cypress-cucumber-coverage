import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

Before(function () {
  cy.visit("/");
  // cy.wait(['@userStatus', '@userProjectStatus', '@allProjectDetails']).spread((userStatus, userProjectStatus, allProjectDetails) => {
  //     console.log(userStatus, userProjectStatus, allProjectDetails);
  //     // Dispatch Redux actions
  //     dispatch({
  //         type: types.GET_INPUT_INITIAL_DATA,
  //         payload: {project_list: allProjectDetails.response.body.message}
  //     });
  // });
});

// Scenario: Welcome to Login Page
Given("I see Login Page with title", () => {
  cy.get("[data-cy='title']").should("have.value", "This is the Login Page.");
});
Then("I should see Menu with 5 items", () => {
  const menu = cy.get(".ant-menu-horizontal");
  menu.should("exist");
  menu.find("li").should("have.length", 5);
});

// Scenario: Show dropdown menu
Given("I see 5 Menu Items", () => {
  cy.get(".ant-menu-horizontal").find("li").should("have.length", 5);
});
Then("I should see 2 item is disabled", () => {
  cy.get(".ant-menu-horizontal")
    .should("exist")
    .then((menu) => {
      cy.wrap(menu)
        .find("li:nth-child(2)")
        .should("have.class", "ant-menu-item-disabled");
      cy.wrap(menu).find("li:nth-child(2)").should("have.attr", "disabled");
    });
});

When("I mouseover on 3 item", () => {
  cy.get(".ant-menu-horizontal").find("li:nth-child(3)").trigger("mouseover");
});

Then("I see dropdown menu", () => {
  cy.get(".ant-menu-horizontal")
    .find("li:nth-child(3)")
    .find(".ant-menu-submenu")
    .should("exist");
});
