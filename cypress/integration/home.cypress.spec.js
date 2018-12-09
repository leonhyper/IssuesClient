describe('Home page', () =>{
  beforeEach(() => {
    cy.visit("/");
  });

  it("Shows a header", () =>{
    cy.get(".vue-title").should('contain','We Handle Your Problems !!');
  })
  describe("Navigation bar", () => {
    it("Shows the required links", () => {
      cy.get(".navbar").find('[data-test=issues]' );
      cy.get(".navbar").find('[data-test=addIssue]' );
      cy.get(".navbar").contains('Home' );
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Home')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Manage Issues')
        cy.get('.nav-item:nth-child(3)').should('contain', 'ShareIssue')
      })
      cy.get('.navbar-nav:nth-child(2)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Log in')
      })
    });

    it("Redirects when links are clicked", () => {
      cy.get(".navbar").contains('Manage Issues' ).click();
      cy.url().should('include','/issues' )
      cy.get(".navbar").contains('ShareIssue' ).click();
      cy.url().should('include','/add' )
      cy.get(".navbar").contains('Log in' ).click();
      cy.url().should('include','/login' )
      // etc
    });
  })
})
