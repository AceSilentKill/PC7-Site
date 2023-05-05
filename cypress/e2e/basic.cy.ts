describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('title')
    .contains('PC7 Client');
  })
})
