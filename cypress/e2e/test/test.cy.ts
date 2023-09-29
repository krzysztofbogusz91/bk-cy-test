describe('Test Suite', () => {
  it('2 + 2 = 4', () => {
    expect(2 + 2).to.equal(4);
  });
  it('2 + 2 = 4', () => {
    expect(2 + 5).to.equal(4);
  });


  it('Visits localhost:4200 and checks title', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy="title"]').should('contain', 'cypress-cicd');
  });
});
