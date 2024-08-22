export class Selectors {

    insertShippingEmail(email){
        cy.get('#email_address').type(email);
      }
      insertCustomerEmail(email){
        cy.get('#customer-email-fieldset > .required > .control > #customer-email').type(email)
    }

    insertLoginEmail(email){
        cy.get('#email').type(email);
    }
    






}

export const  selectors = new Selectors();