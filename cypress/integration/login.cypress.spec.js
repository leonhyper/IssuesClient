describe('Login page',() => {
  beforeEach(() => {
    cy.request('mongodb://issuesdb:1013702057zs@ds139883.mlab.com:39883/issues-test')
    cy.visit("/");
    // Click Donate navbar link
    cy.get('.navbar-nav:nth-child(2)').
    find('.nav-item:first').click()
  });

  it("allows a user with valid name and password to login",() => {
    cy.get('#name').type('Han');
    cy.get('#pass').type('111111');
    cy.get('button[data-test=login]').click();
    cy.url().should('include', 'http://localhost:8080/#/')
  })
})
