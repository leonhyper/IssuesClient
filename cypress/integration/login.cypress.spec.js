describe('Login page',() => {
  beforeEach(() => {
    cy.visit("/");
    // Click Donate navbar link
    cy.get('.navbar-nav:nth-child(2)').
    find('.nav-item:first').click()
  });

  it("allows a user with valid name and password to login",() => {
    cy.get('#name').type('Han');
    cy.get('#pass').type('111111');
    cy.get('button[data-test=login]').click();
    cy.contains('Welcome,Han!').should('exist');
    cy.wait(5000)
    cy.url().should('include', 'http://localhost:8080/#/')
  })
  it("shows error message if either name and pass is valid ",() => {
    cy.get('button[data-test=login]').click();
    cy.contains('User name can not be empty!').should('exist');
    cy.contains('Password cannot be empty!').should('exist');
    cy.get('#name').type('1');
    cy.get('#pass').type('11');
    cy.get('button[data-test=login]').click();
    cy.contains('Invalid username or password!').should('exist');
    cy.wait(5000)
  })

})
