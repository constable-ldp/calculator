describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it('should let multiple number buttons concatenate', () => {
    cy.get('#number5').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '52');
  });

  it('should let 562 / 2 = 281', () => {
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '281');
  });

  it('should handle very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '99999999980000000000');
  });

  it('should handle negative numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-90');
  })

  it('should handle decimals', () => {
    cy.get('#number3').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.5');
  })

  it('should update display while completing multiple operations', () => {
    cy.get('#number4').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '2');
    cy.get('#number3').click();
    cy.get('#operator_subtract').click();
    cy.get('.display').should('contain', '5');
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-4');
  })

  it('should not allow dividing by 0', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Infinity');
  })
});
