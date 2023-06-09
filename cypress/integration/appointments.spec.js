describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");

    cy.visit("/");

    cy.contains("Monday");
  });


  it("should book an interview", () => {
    cy.get("[alt=Add]")
      .first()
      .click();

    cy.get("[data-testid=student-name-input]")
      .type("Lydia Miller-Jones");

    cy.get("[alt='Sylvia Palmer']")
      .click();

    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Sylvia Palmer");
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
  });


  it("should edit an interview", () => {
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });

    cy.get("[alt='Tori Malcolm']")
      .click();

    cy.get("[data-testid=student-name-input]")
      .clear()
      .type("Some Body");

    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Some Body");
  });

  it("should cancel an interview", () => {
    cy.get("[alt=Delete]")
      .first()
      .click({ force: true });
    cy.contains("Confirm").click();

    cy.contains("deleting...");
    cy.contains("deleting...").should('not.exist');
  });
});