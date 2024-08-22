import { credentials, root } from "./constants";
export class Methods {

goBack(){
    cy.go('back');
}

visitUrl(Url){
    cy.visit(Url);
};

changeViewPort(width, height){
    cy.viewport(width, height);
  };

verifyProducts(){
    cy.get('.product-item').should('have.length.at.least', 5);
}

clickOnFusionProduct(){
    cy.get('.product-item').eq(4).click();
}

clickOnHoodieProduct(){
    cy.get('.product-item').eq(3).click();
}

clickOnTankProduct(){
    cy.get('.product-item').eq(2).click();
}

clickOnShortProduct(){
    cy.get('.product-item').eq(5).click();
}

clickOnTopProduct(){
    cy.get('.product-item').eq(1).click();
}

clickOnWatchProduct(){
    cy.get('.product-item').last().click();
}

clickOnFitnessProduct(){
    cy.get('.product-item').eq(3).click();
}
    
clickOnAddToWishlist(){
    cy.get('.product-addto-links > .towishlist').contains('Add to Wish List').click();

}

assertFusionUrl(){
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/fusion-backpack.html');
}

assertRequiredFieldAddress(){
    cy.get('.field-error').should('contain.text', 'This is a required field');

}

addAllToCart(){
    cy.get('button[title="Add All to Cart"]').click();
}

clickOnCartNumber(){
    cy.get('.counter-number').click();
}

clickOnProceedToCheckout(){
    cy.get('#top-cart-btn-checkout').click();
}

clickOnDiscountCode(){
    cy.get('#block-discount-heading').click();
}

assertCartWishlist(){
    cy.get('.message-success').should('contain.text', 'Sprite Foam Roller has been added to your Wish List.')
}

assertMyWishlist(){
    cy.get('#wishlist-view-form > .message').should('contain.text', 'You have no items in your wish list.');
}

assertMenUrl(){
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/men.html');
}

assertGearUrl(){
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/gear.html');
}
assertWomenUrl(){
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/women.html');
}

assertAvailability(){
    cy.get('.product-info-stock-sku').should('contain', 'In stock');
}

addToCart(){
    cy.get('#product-addtocart-button').click();
}

assertProductAdded(){
    cy.get('.message-success').should('contain', 'You added')
}

clickOnCart(){
    cy.get('.message-success > div > a').click()
}

assertCheckoutUrl(){
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/checkout/cart');
}

proceedToCheckout(){
    cy.get('.checkout-methods-items > :nth-child(1) > .action').click();

}

assertShippingUrl(){
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/checkout/#shipping');

}

assertCustomerUrl(){
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
}

insertShippingEmail(email){
    cy.get('#email_address').type(email);
  }

insertCustomerEmail(email){
    cy.get('#customer-email-fieldset > .required > .control > #customer-email').type(email)
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
    cy.get('.button').click();
}

clickSignIn(){
    cy.get('#send2').click();
}

clickOnMenTab(){
    cy.get('#ui-id-5 > :nth-child(2)').click();
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

clickOnWishTab(){
    cy.get('a[href="https://magento.softwaretestingboard.com/wishlist/"]').contains('Add to wishlist').click();


}

clickOnWatches(){
    cy.get('dd > .items > :nth-child(3) > a').click();
}

clickOnFitnessEquipment(){
    cy.get('dd > .items > :nth-child(4) > a').click();
}

clickOnTops(){
    cy.get('dd > .items > :nth-child(1) > a').click();
}

assertPaymentPageUrl(){
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/checkout/#payment');
}

assertLoginSuccess(){
    cy.get('.panel.wrapper > .panel').should('contain.text', 'Welcome');
}

clickOnSameBillingShipping(){
    cy.get('#billing-address-same-as-shipping-checkmo').click();
}

clickOnPlaceOrderButton(){
    cy.get('button[title="Place Order"]').click();
}

clickOnApplyDiscount(){
    cy.get('button[class="action action-apply"]').click();
}

clickOnSaveAddress(){
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
}

assertCouponMessage(){
    cy.get('.messages > .message').should('contain', 'Verify the code and try again.')
}

assertShippingAddress(){
    cy.get('.box-address-shipping').should('contain', 'Waterfall Street nr. 90');
}

assertOrderPage(){
    cy.url().should('eq','https://magento.softwaretestingboard.com/checkout/onepage/success/')
}

assertOrderId(order){
    cy.get('.checkout-success').contains(order);
}

assertMultipleOrder(){
    cy.get('.item-info').should('have.length', 3);
}

assertUpdatedOrder(){
    cy.get('.item-info').should('have.length', 2);
}

assertRegisterMessage(){
    cy.get('.message-success').should('contain','Thank you for registering');
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
    cy.get('#registration > :nth-child(3) > .action').click();
}

clickOnSignIn(){
    cy.get('.panel > .header > .authorization-link > a').click();
}

clickOnGearTab(){
    cy.get('#ui-id-6 > :nth-child(2)').click();
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
    cy.get('.shipping-address-item.selected-item').should('exist');;
}
}
export const methods = new Methods();








