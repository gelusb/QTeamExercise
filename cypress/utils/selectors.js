export class selectors {

    insertShippingEmail(email){
        cy.get('#email_address').type(email);
      }
      insertCustomerEmail(email){
        cy.get('#customer-email-fieldset > .required > .control > #customer-email').type(email)
    }







}

export const  Selectors = new selectors();