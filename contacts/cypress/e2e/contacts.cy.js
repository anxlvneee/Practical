// Тест на додавання контакту
describe('Adding a contact', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should add a new contact', () => {
    cy.get('input[placeholder="Ім\'я"]').type('Ганна');
    cy.get('input[placeholder="Телефон"]').type('0668854495');
    cy.contains('Додати').click();
    
    cy.get('.contacts-list').should('contain', 'Ганна - 0668854495');
  });
});