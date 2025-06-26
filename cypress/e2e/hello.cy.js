describe('Hello World Test', () => {
  it('should display welcome message', () => {
    cy.visit('/');
    cy.contains('Hello World');
  });
});
