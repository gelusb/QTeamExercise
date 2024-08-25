import { selectors } from "./selectors";
import { methods } from "./methods";
export class CheckoutMethods {
    

    fillCheckoutInformation(){
      methods.insertCustomerEmail('example00109@gmail.com');
      methods.insertShippingFirstName('TestFirstName');
      methods.insertShippingLastName('TestLastName');
      methods.insertStreet('All Saints Rd. nr.40');
      methods.selectCountry();
      methods.selectRegion();
      methods.insertCity('Anchorage');
      methods.insertPostalCode('12345-6789');
      methods.insertPhoneNumber('0743567890');
    }

    invalidCheckoutInformation(){
      methods.insertCustomerEmail('example00109@gmail.com');
      methods.insertShippingFirstName('TestFirstName');
      methods.insertShippingLastName('TestLastName');
      methods.selectCountry();
      methods.selectRegion();
      methods.insertCity('Anchorage');
      methods.insertPostalCode('12345-6789');
      methods.insertPhoneNumber('0743567890');
      methods.selectTableRateShipping();
      methods.clickNextButton();

    }

    fillRegisterInformation(){
    
    //randomEmail is generated randomly from 0-9 and a-z in the methods function generateRandomEmail
    const randomEmail = methods.generateRandomEmail();  
    methods.clickOnCreateAccount();
    methods.insertRegisterFirstName('TestFirstName');
    methods.insertRegisterLastName('TestLastName');
    selectors.insertShippingEmail(randomEmail);
    methods.insertRegisterPassword('example123@');
    methods.confirmRegisterPassword('example123@');
    methods.clickOnCreate();
    methods.assertUrl('https://magento.softwaretestingboard.com/customer/account/');
    methods.assertRegisterMessage();
    methods.clickOnEditAddress();
    methods.insertShippingPhone('0734567876')
    methods.insertShippingAddress('Waterfall Street nr. 90');
    methods.insertShippingCity('Anchorage');
    methods.insertShippingPostCode('12345-6789');
    methods.selectRegion();
    methods.selectCountry();
    }

    invalidSignIn(){
        methods.clickOnSignIn();
        methods.insertLoginEmail('user_rdp@example.com');
        methods.insertLoginPassword('example1234');
        methods.clickSignIn();
    }

    placeOrder(){
        methods.selectTableRateShipping();
        methods.clickNextButton();
        methods.assertUrl('https://magento.softwaretestingboard.com/checkout/#payment');
        methods.clickOnSameBillingShipping();
        methods.clickOnPlaceOrderButton();
        methods.assertOrderId('Your order # is:');
    }

    validSignIn(){
        methods.clickOnSignIn();
        methods.insertLoginEmail('test_user01@example.com');
        methods.insertLoginPassword('example123@');
        methods.clickSignIn();
        methods.assertLoginSuccess()
    }

    placeInvalidAddressOrder(){
        methods.clickOnGearTab();
        methods.assertUrl('https://magento.softwaretestingboard.com/gear.html');
        methods.clickOnBottom();
        methods.clickOnProductName('Sprite Foam Roller');
        methods.assertAvailability();
        methods.clickOnAddToWishlist();
        methods.assertCartWishlist();
        methods.addAllToCart();
        methods.assertMyWishlist();
        methods.clickOnCartNumber();
        methods.clickOnProceedToCheckout();
        methods.selectTableRateShipping();
        methods.assertShippingDetails();
        methods.clickNextButton();
        methods.clickOnDiscountCode();
        methods.insertDiscountCode();
        methods.clickOnApplyDiscount();
        methods.assertCouponMessage();
        methods.clickOnPlaceOrderButton();
    }



}

export const checkoutMethods = new CheckoutMethods()