describe('AddIssue page', () => {
  beforeEach(() => {
    cy.visit("/");
    // Click Donate navbar link
    cy.get('.navbar-nav:nth-child(1)').
    find('.nav-item:nth-child(3)').click()
  });

  it("allows a valid issue to be submitted", () => {
    // Fill out web form
    cy.get('#category').select('Art')
    cy.get('input[data-test=text]').type('Who is Van Gogh?');
    cy.contains('Thanks for your sharing').should('not.exist');
    cy.get('.error').should('not.exist')
    cy.get('button[type=submit]').click();
    cy.contains('Thanks for your sharing!').should('exist');
  });

} )
