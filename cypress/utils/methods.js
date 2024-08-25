import { credentials, root } from "./constants";
export class Methods {


clickOnLogo(){
   cy.get('.logo > img')
  .should('exist') 
  .and('be.visible') 
  .click()
};

visitUrl(Url){
    cy.visit(Url);
};

assertUrl(url){
    cy.url().should('eq', url);
};

generateRandomEmail(){
    const characters = 'abcdefghjklmnopqrstuvwxyz0123456789';

    let email = '';

    for (let i = 0; i < 10; i++){
        email += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return `${email}@gmail.com`
}

verifyProducts(){
    cy.get('.product-item').should('have.length.at.least', 1);
}

clickOnProductName(productName){
    cy.get('.product-item')
    .contains(productName)
    .should('be.visible')
    .click();
}

clickOnAddToWishlist(){
    cy.wait(1000)
    cy.contains('Add to Wish List') 
    .should('be.visible') 
    .click(); 
}

assertRequiredFieldAddress(){
    cy.contains('.field-error', 'This is a required field');

}

addAllToCart(){
    cy.get('button[title="Add All to Cart"]').click();
}

clickOnCartNumber(){
    cy.get('.counter-number').click();
}

clickOnProceedToCheckout(){
    cy.wait(100)
    cy.contains('button', 'Proceed to Checkout') 
    .should('be.visible')
    .click();
}

clickOnDiscountCode(){
    cy.get('#block-discount-heading').click();
}

assertCartWishlist(){
    cy.get('.message-success').should('be.visible')
    .and('contain.text', 'Sprite Foam Roller has been added to your Wish List.')
}

assertMyWishlist(){
    cy.get('#wishlist-view-form > .message')
    .should('be.visible')
    .and('contain.text', 'You have no items in your wish list.');
}

assertAvailability(){
    cy.get('.product-info-stock-sku').should('be.visible')
    .and('contain', 'In stock');
}

addToCart() {
    cy.get('#product-addtocart-button')
      .should('be.visible') 
      .click(); 
  }

assertProductAdded(){
    cy.get('.message-success')
    .should('be.visible')
    .and('contain', 'You added');
}

clickOnCart(){
    cy.get('.message-success > div > a')
    .should('exist')
    .click();
}

proceedToCheckout(){
    cy.wait(1000)
    cy.get('.item') 
    .contains('Proceed to Checkout') 
    .should('be.visible') 
    .and('not.be.disabled') 
    .click({force : true}); 
    

}

insertShippingEmail(email){
    cy.get('#email_address').type(email);
  }

insertCustomerEmail(email){
    cy.get('#customer-email-fieldset').type(email)
}

insertLoginEmail(email){
    cy.get('#email').type(email);
}

insertDiscountCode(){
    cy.get('#discount-code').type('12ABg56789pOu0')
}

clickOnEditAddress(){
    cy.get('.box-shipping-address > .box-actions > .action > span').click();
}

insertShippingPhone(phoneShip){
    cy.get('#telephone').type(phoneShip);
}

insertShippingAddress(addressShip){
    cy.get('#street_1').type(addressShip);
}

insertShippingCity(cityShip){
    cy.get('#city').type(cityShip);
}

insertShippingPostCode(postcodeShip){
    cy.get('#zip').type(postcodeShip);
}

insertRegisterFirstName(firstNameRegister){
    cy.get('#firstname').type(firstNameRegister);
}

insertRegisterLastName(lastNameRegister){
    cy.get('#lastname').type(lastNameRegister);
}

insertRegisterPassword(passwordRegister){
    cy.get('#password').type(passwordRegister);
}

insertLoginPassword(loginPass){
    cy.get('#pass').type(loginPass);
}

confirmRegisterPassword(passwordConfirmatio){
    cy.get('#password-confirmation').type(passwordConfirmatio);
}


insertShippingFirstName(firstName){
    cy.get('[name="shippingAddress.firstname"]').type(firstName);
}

insertShippingLastName(lastName){
    cy.get('[name="shippingAddress.lastname"]').type(lastName);
}

insertStreet(street){
    cy.get('[name="street[0]"]').type(street);
}

insertCity(city){
    cy.get('[name="shippingAddress.city"]').type(city);
}

selectCountry(){
    cy.get('select[name="country_id"]').select('United States');
}

selectRegion(){
    cy.get('select[name="region_id"]').select('Alaska');
}


insertPostalCode(postalCode){
    cy.get('[name="shippingAddress.postcode"]').type(postalCode)
}

insertPhoneNumber(phone){
    cy.get('[name="shippingAddress.telephone"]').type(phone);
}

selectTableRateShipping(){
    cy.get('tbody > :nth-child(1) > :nth-child(1) .radio').click();
}

clickNextButton(){
    cy.get('.button')
    .should('be.visible')
    .click();
}

clickSignIn(){
    cy.get('#send2')
    .should('be.visible')
    .click();
}

clickOnMenTab(){
    cy.get('#ui-id-5 > :nth-child(2)')
    .should('be.visible')
    .click();
}

clickOnWomenTab(){
    cy.get('#ui-id-4').click();
}

clickOnBottom(){
    cy.get('dd > .items > :nth-child(2) > a').click();
}

clickOnCustomerArrow(){
    cy.contains('button', 'Change').click();

}

clickOnMyAccountTab(){
    cy.get('a[href="https://magento.softwaretestingboard.com/customer/account/"]').contains('My Account').click();
}

clickOnWishTab(){
    cy.get('a[href="https://magento.softwaretestingboard.com/wishlist/"]').contains('Add to wishlist').click();


}

clickOnWatches(){
    cy.get('.item') 
  .contains('a', 'Watches')
  .click();
}

clickOnFitnessEquipment(){
    cy.get('dd > .items > :nth-child(4) > a').click();
}

clickOnTops(){
    cy.get('dd > .items > :nth-child(1) > a').click();
}

assertLoginSuccess(){
    cy.get('.panel.wrapper > .panel').shoul('be.visible')
    .and('contain.text', 'Welcome');
}

clickOnSameBillingShipping(){
    cy.get('input[name="billing-address-same-as-shipping"]') // Target the checkbox using the name attribute
    .check() // Check the checkbox if it’s not already checked
    .should('be.checked'); // Assert that the checkbox is now checked
}

clickOnPlaceOrderButton(){
    cy.get('button[title="Place Order"]') 
  .should('exist') 
  .and('be.visible')
  .click(); 

}

clickOnApplyDiscount(){
    cy.get('button[class="action action-apply"]').click();
}

clickOnSaveAddress(){
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
}

clickOnMyOrders(){
    cy.get('#block-collapsible-nav')
  .contains('a', 'My Orders')
  .should('be.visible') 
  .and('have.text', 'My Orders') 
  .click(); 

}

clickOnViewOrders(){

    cy.get('table') 
   .find('tr') 
   .eq(1) 
   .find('td') 
   .eq(5) 
   .contains('View Order') 
   .click(); 
}

AssertOrderIdUrl(){

    cy.url().should('contain', 'https://magento.softwaretestingboard.com/sales/order/view/order_id/');
}

assertPendingStatus(){
    cy.get('.order-status').should('contain.text', 'Pending');
}

assertMyOrderTable(){
    cy.get('table') 
  .should('contain', 'Order #', 'Date', 'Ship To', 'Order Total', 'Status', 'View Order');
 
}


assertCouponMessage(){
    cy.get('.messages > .message').should('be.visible')
    .and('contain', 'Verify the code and try again.')
}

assertShippingAddress(){
    cy.get('.box-address-shipping').should('contain', 'Waterfall Street nr. 90');
}

assertOrderId(order){
    cy.get('.checkout-success').should('be.visible').contains(order);
}

assertMultipleOrder(){
    cy.get('.item-info').should('have.length', 3);
}

assertUpdatedOrder(){
    cy.get('.item-info').should('have.length', 2);
}

assertRegisterMessage(){
    cy.get('.message-success')
    .should('be.visible')
    .and('contain','Thank you for registering');
}

assertSignInErrorMessage(){
    cy.get('.page.messages')
  .should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
}

selectSizeL(){
    cy.get('#option-label-size-143-item-169').click({force:true});

}

selectSizeXL(){
    cy.get('#option-label-size-143-item-177').click()
}
selectColourGray(){
    cy.get('#option-label-color-93-item-52').click();
}

selectColourBlue(){
    cy.get('#option-label-color-93-item-50').click();
}

selectColourGreen(){
    cy.get('#option-label-color-93-item-53').click();
}

selectColourBlack(){
    cy.get('#option-label-color-93-item-49').click();
}
clickOnCreateAccount(){
    cy.get('#registration > :nth-child(3) > .action')
    .should('be.visible')
    .click();
}

clickOnSignIn(){
    cy.get('.panel > .header > .authorization-link > a')
    .should('be.visible')
    .click();
}

clickOnGearTab(){
    cy.get('#ui-id-6')
    .should('be.visible')
    .click();
}

insertPassword(password){
    cy.get('#password').type(password);
}

confirmPassword(confirm){
    cy.get('#password-confirmation').type(confirm)
}

clickOnCreateAccount(){
    cy.contains('a', 'Create an Account').click();
}

clickOnCreate(){
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
}

removeProduct(){
    cy.get('.action.action-delete').eq(1).click();
}

assertShippingDetails(){
    cy.get('.shipping-address-item.selected-item').should('exist');
}
}
export const methods = new Methods();








