import { selectors } from "./selectors";
import { methods } from "./methods";
export class CheckoutMethods {
    

    fillCheckoutInformation(){

      //Insert Email Address
      methods.insertCustomerEmail('example00109@gmail.com');
      //Insert First Name
      methods.insertShippingFirstName('TestFirstName');
      //Insert Last Name
      methods.insertShippingLastName('TestLastName');
      //Insert street address
      methods.insertStreet('All Saints Rd. nr.40');
      //Select country
      methods.selectCountry();
      //Select region
      methods.selectRegion();
      //Add the city
      methods.insertCity('Anchorage');
      //Insert Postal code
      methods.insertPostalCode('12345-6789');
      //insert phone number
      methods.insertPhoneNumber('0743567890');
    }

    invalidCheckoutInformation(){
    //Insert Email Address
      methods.insertCustomerEmail('example00109@gmail.com');
      //Insert First Name
      methods.insertShippingFirstName('TestFirstName');
      //Insert Last Name
      methods.insertShippingLastName('TestLastName');
      methods.selectCountry();
      //Select region
      methods.selectRegion();
      //Add the city
      methods.insertCity('Anchorage');
      //Insert Postal code
      methods.insertPostalCode('12345-6789');
      //insert phone number
      methods.insertPhoneNumber('0743567890');
      methods.selectTableRateShipping();
      //click Next
      methods.clickNextButton();

    }

    fillRegisterInformation(){
    
    //randomEmail is generated randomly from 0-9 and a-z in the methods function generateRandomEmail
    const randomEmail = methods.generateRandomEmail();  
    //Insert registration first name
    methods.insertRegisterFirstName('TestFirstName');
    //Insert registration Last name
    methods.insertRegisterLastName('TestLastName');
    //Insert registration email
    selectors.insertShippingEmail(randomEmail);
    //Insert register password
    methods.insertRegisterPassword('example123@');
    //confirm the passowrd
    methods.confirmRegisterPassword('example123@');
    //Create account
    methods.clickOnCreate();
    //Assert customer url
    methods.assertUrl('https://magento.softwaretestingboard.com/customer/account/');
    //assert registration succesfull message
    methods.assertRegisterMessage();
    //Click on Edit shipping address
    methods.clickOnEditAddress();
    methods.insertShippingPhone('0734567876')
    //Insert Shipping address
    methods.insertShippingAddress('Waterfall Street nr. 90');
    //Insert city
    methods.insertShippingCity('Anchorage');
    //Insert Zip code
    methods.insertShippingPostCode('12345-6789');
    //Select region
    methods.selectRegion();
    //Select Country
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
        //click Next
        methods.clickNextButton();
        //Assert the payment page url
        methods.assertUrl('https://magento.softwaretestingboard.com/checkout/#payment');
        //Select same billing and shipping address
        methods.clickOnSameBillingShipping();
        //click on the Place Order button
        methods.clickOnPlaceOrderButton();
        methods.assertOrderId('Your order # is:');
    }

    validSignIn(){
        //Click on Sign in
        methods.clickOnSignIn();
        //Insert email
        methods.insertLoginEmail('test_user01@example.com');
        //Insert password
        methods.insertLoginPassword('example123@');
        //Click on Sign in
        methods.clickSignIn();
        //Assert login successfull and welcome message
        methods.assertLoginSuccess()
    }

    placeInvalidAddressOrder(){
        //Select Gear tab
        methods.clickOnGearTab();
        //Assert Gear page
        methods.assertUrl('https://magento.softwaretestingboard.com/gear.html');
        //Click on Fitness Equipment
        methods.clickOnBottom();
        //Click On Fitness product
        methods.clickOnProductName('Sprite Foam Roller');
        //Assert Availability
        methods.assertAvailability();
        //Click on add to Wishlist button
        methods.clickOnAddToWishlist();
        //check the wishlist
        methods.assertCartWishlist();
        //Add all to cart
        methods.addAllToCart();
        //Assert cart wishlist
        methods.assertMyWishlist();
        //Click on the cart number
        methods.clickOnCartNumber();
        //Click on the proceed to checkout button
        methods.clickOnProceedToCheckout();
        //Select the shipping rate
        methods.selectTableRateShipping();
        //Assert shipping address is selected
        methods.assertShippingDetails();
        //Click Next
        methods.clickNextButton();
        //click on discount arrow
        methods.clickOnDiscountCode();
        //insert discount code
        methods.insertDiscountCode();
        //click on apply discount
        methods.clickOnApplyDiscount();
        //Assert coupon error message
        methods.assertCouponMessage();
        //Click on Place order
        methods.clickOnPlaceOrderButton();
    }



}

export const checkoutMethods = new CheckoutMethods()