describe("Calculator", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    it('should have working number buttons', () => {
        cy.get('#number2').click();
        cy.get('.display').should('contain', '2')
    })

    it('should have number buttons update the display of the running total', () => {
        cy.get('#number2').click();
        cy.get('#operator_add').click();
        cy.get('#number3').click();
        cy.get('#operator_equals').click();
        cy.get('.display').should('contain', '5')
    })

    it('should have multiple operations chained together', () => {
        cy.get('#number8').click();
        cy.get('#operator_add').click();
        cy.get('#number2').click();
        cy.get('#operator_equals').click();
        cy.get('#operator_subtract').click();
        cy.get('#number3').click();
        cy.get('#operator_equals').click();
        cy.get('#operator_multiply').click();
        cy.get('#number1').click();
        cy.get('#operator_equals').click();
        cy.get('.display').should('contain', '7')
    })

    it('should display the correct answer using negative numbers', () => {
        cy.get('#number2').click();
        cy.get('#operator_add').click();
        cy.get('#number3').click();
        cy.get('#operator_equals').click();
        cy.get('#operator_subtract').click();
        cy.get('#number9').click();
        cy.get('#operator_equals').click();
        cy.get('.display').should('contain', '-4')
    })

    it('should display the correct answer using decimal numbers', () => {
        cy.get('#number2').click();
        cy.get('#number0').click();
        cy.get('#operator_add').click();
        cy.get('#number3').click();
        cy.get('#number0').click();
        cy.get('#operator_equals').click();
        cy.get('#operator_subtract').click();
        cy.get('#number9').click();
        cy.get('#operator_equals').click();
        cy.get('.display').should('contain', '41')
    })

    it('should display the correct answer using very large numbers', () => {
        cy.get('#number2').click();
        cy.get('#number0').click();
        cy.get('#number0').click();
        cy.get('#number0').click();
        cy.get('#operator_add').click();
        cy.get('#number3').click();
        cy.get('#number0').click();
        cy.get('#number0').click();
        cy.get('#number0').click();
        cy.get('#number0').click();
        cy.get('#operator_equals').click();
        cy.get('#operator_subtract').click();
        cy.get('#number9').click();
        cy.get('#number0').click();
        cy.get('#number0').click();
        cy.get('#operator_equals').click();
        cy.get('.display').should('contain', '31100')
    })

    it('should display an error message when dividing by zero', () => {
        cy.get('#number2').click();
        cy.get('#operator_divide').click();
        cy.get('#number0').click();
        cy.get('#operator_equals').click();
        cy.get('.display').should('contain', 'Cannot divide by Zero')
    })





})