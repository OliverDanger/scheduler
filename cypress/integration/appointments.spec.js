describe("Appointments", () => {
  cy.visit('/api/debug/reset')

  it("should book an interview", () => {
    cy.visit('/');
    cy.contains("Monday")
  })
})