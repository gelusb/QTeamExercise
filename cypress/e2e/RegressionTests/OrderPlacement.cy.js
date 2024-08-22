import { methods } from "../../utils/methods"

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Order Placement regression tests', () => {

  beforeEach(() => {

    // Set the viewport
    methods.changeViewPort(1920, 1080);
    // Visit the main site URL before each test
    methods.visitUrl('https://magento.softwaretestingboard.com/');

  });

    it.only('Place an order with valid data as a new user', () => {

      //Verify there are at least 5 products on the main page
      methods.verifyProducts();
      //Click on the 5th product (Fusion Backpack)
      methods.clickOnFusionProduct();
      //Verify the url for the Fusion backpack is correct 
      methods.assertFusionUrl();
      //Verify the product is in stock
      methods.assertAvailability();
      //Add the product to cart
      methods.addToCart();
      //wait for the message to load
      cy.wait(1000);
      //Assert Successfull message added to cart
      methods.assertProductAdded();
      //Click on Shopping cart
      methods.clickOnCart();
      //Click on Proceed to checkout button
      cy.wait(1000);
      methods.proceedToCheckout();
      //Assert shipping url
      methods.assertShippingUrl();
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
      //Select shipping method
      methods.selectTableRateShipping();
      //click Next
      methods.clickNextButton();
      //Assert the payment page url
     // methods.assertPaymentPageUrl();
      cy.wait(1000)
      //Select same billing and shipping address
      methods.clickOnSameBillingShipping();
      //click on the Place Order button
      cy.wait(1000)
      methods.clickOnPlaceOrderButton();
      //Assert Order page
      methods.assertOrderPage();
      //Assert order ID exists
      methods.assertOrderId('Your order # is:');
    });

    it('Place a multiple order as a new user', () => {

      cy.wait(1000)
      //Verify there are at least 5 products on the main page
      methods.verifyProducts();
      //Add 3 products to the cart
      methods.clickOnFusionProduct();
      //Verify the url for the Fusion backpack is correct 
      methods.assertFusionUrl();
      //Assert product availability
      methods.assertAvailability();
      //Add the product to cart
      methods.addToCart();
      cy.wait(1000)
      //Assert Successfull message added to cart
      methods.assertProductAdded();
      //Go back
      methods.goBack();
      //2nd product
      methods.clickOnHoodieProduct();
      //Assert product availability
      methods.assertAvailability();
      //Select product size - L
      methods.selectSizeL();
      //Select product colour - green
      methods.selectColourGreen();
      //Add to cart
      methods.addToCart();
      //Assert Successfull message added to cart
      methods.assertProductAdded();
      //Go back
      methods.goBack();
      //3rd product
      methods.clickOnTankProduct();
      //Select product size -L
      methods.selectSizeL();
      //Select colour - gray
      methods.selectColourGray();
      //Add to cart
       methods.addToCart();
      //Assert Successfull message added to cart
      methods.assertProductAdded();
      //Click on the shopping cart
      methods.clickOnCart();
      //Verify there are 3 products added in the cart
      methods.assertMultipleOrder();
      methods.proceedToCheckout();
      //Assert shipping url
      methods.assertShippingUrl();
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
      //Select shipping method
      methods.selectTableRateShipping();
      //click Next
      methods.clickNextButton();
      //Assert the payment page url
      methods.assertPaymentPageUrl();
      cy.wait(1000)
      //Select same billing and shipping address
      methods.clickOnSameBillingShipping();
      //click on the Place Order button
      methods.clickOnPlaceOrderButton();
      cy.wait(10000)
      //Assert Order page
      methods.assertOrderPage();
      //Assert order ID exists
      methods.assertOrderId('Your order # is:');
    })

    it('Register a new user and edit the shipping address', () => {

      cy.wait(1000)    
      //click on Create an Account
      methods.clickOnCreateAccount();
      //Insert registration first name
      methods.insertRegisterFirstName('TestFirstName');
      //Insert registration Last name
      methods.insertRegisterLastName('TestLastName');
      //Insert registration email
      methods.insertShippingEmail('user_rdpl710000111j@example.com');
      //Insert register password
      methods.insertRegisterPassword('example123@');
      //confirm the passowrd
      methods.confirmRegisterPassword('example123@');
      //Create account
      methods.clickOnCreate();
      //Assert customer url
      methods.assertCustomerUrl();
      //assert registration succesfull message
      methods.assertRegisterMessage();
      //Click on Edit shipping address
      methods.clickOnEditAddress();
      //Insert Shipping phone number
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
      //Save shipping address
      methods.clickOnSaveAddress();
      //Assert primary shipping address has been saved
      methods.assertShippingAddress();
      
    });

    it('Login the registered user with invalid credentials', () => {

      //Sign in registered user
      methods.clickOnSignIn();
      methods.insertLoginEmail('user_rdpl7100j@example.com');
      methods.insertLoginPassword('example1234');
      methods.clickSignIn();
      //Assert error message and account locked
      methods.assertSignInErrorMessage();
    });

    it('Sign in a registerd user, place an order and remove one item from the cart', () => {

      //Click on Sign in
      methods.clickOnSignIn();
      //Insert email
      methods.insertLoginEmail('user_rdpl710000111j@example.com');
      //Insert password
      methods.insertLoginPassword('example123@');
      //Click on Sign in
      methods.clickSignIn();
      //Assert login successfull and welcome message
      methods.assertLoginSuccess()
      //Add a gear item to the cart
      //Assert item succes message
      //Add men`s item to the cart
      methods.clickOnMenTab();
      //Assert men url
      methods.assertMenUrl();
      //Select the bottoms products
      methods.clickOnBottom();
      //verify products are 12
      methods.verifyProducts();
      //Select the 5h product
      methods.clickOnShortProduct();
      //Assert Availability
      methods.assertAvailability();
      //Select size
      methods.selectSizeXL();
      //Select colour
      methods.selectColourBlue();
      //Add to cart
      methods.addToCart();
      //Assert item success message
      methods.assertProductAdded();
      //Click woman tab
      methods.clickOnWomenTab();
      //Assert the Url
      methods.assertWomenUrl();
      //Click on bottom products
      methods.clickOnTops();
      //Select the 2nd Tops product
      methods.clickOnTopProduct();
      //Assert availabilityy
      methods.assertAvailability();
      //Select size
      methods.selectSizeL();
      //Assert item success message
      methods.selectColourBlack();
      //Add to cart
      methods.addToCart();
      //Assert item success message
      methods.assertProductAdded();
      //Click on gear tab
      methods.clickOnGearTab();
      //Assert Gear page
      methods.assertGearUrl();
      //Click on Watches
      methods.clickOnWatches();
      //Select the watch product
      methods.clickOnWatchProduct();
      //Add to cart
      methods.addToCart();
      //Assert Successfull message
      methods.assertProductAdded();
      //Click on Cart
      methods.clickOnCart();
      //Verify there are 3 products added in the cart
      methods.assertMultipleOrder();
      //Remove the second product from the cart
      methods.removeProduct();
      //Assert the list contains only 2 products
      methods.assertUpdatedOrder();
      cy.wait(10000)
      //Proceed to checkout
      methods.proceedToCheckout();
      //Assert shipping url
      //methods.assertShippingUrl();
      //Select shipping
      methods.selectTableRateShipping();
      //Assert shipping address is selected
      methods.assertShippingDetails();
      //Click Next
      methods.clickNextButton();
      //Click on Place order
      methods.clickOnPlaceOrderButton();
      //Assert Order page
      methods.assertOrderPage();
      //Assert order ID exists
      methods.assertOrderId('Your order number is:');
    });

    it('Add product to the wishlist, add to cart and finalize payment', () => {

      //Sign in
      methods.clickOnSignIn();
      //Insert email
      methods.insertLoginEmail('user_rdpl710000111j@example.com');
      //Insert password
      methods.insertLoginPassword('example123@');
      //Click on Sign in
      methods.clickSignIn();
      //Assert login successfull and welcome message
      methods.assertLoginSuccess()
      //Select Gear tab
      methods.clickOnGearTab();
      //Assert Gear page
      methods.assertGearUrl();
      //Click on Fitness Equipment
      methods.clickOnBottom();
      //Click On Fitness product
      methods.clickOnFitnessProduct();
      //Assert Availability
      methods.assertAvailability();
      //Click on add to Wishlist button
      cy.wait(1000)
      methods.clickOnAddToWishlist();
      //check the wishlist
      methods.assertCartWishlist();
      //Add all to cart
      methods.addAllToCart();
      cy.wait(1000);
      //Assert cart wishlist
      methods.assertMyWishlist();
      //Click on the cart number
      methods.clickOnCartNumber();
      //wait for the page to load
      cy.wait(100)
      //Click on the proceed to checkout button
      methods.clickOnProceedToCheckout();
      //Select the shipping rate
      methods.selectTableRateShipping();
      //Assert shipping address is selected
      methods.assertShippingDetails();
      //Click Next
      methods.clickNextButton();
      //Click on Place order
      methods.clickOnPlaceOrderButton();
      //Assert Order page
      // methods.assertOrderPage();
      //Assert order ID exists
      methods.assertOrderId('Your order number is:');
    });

    it('Place an order from the wishlist and apply invalid Discount code, expect error message,continune order', () => {

      //Sign in
      methods.clickOnSignIn();
      //Insert email
      methods.insertLoginEmail('user_rdpl710000111j@example.com');
      //Insert password
      methods.insertLoginPassword('example123@');
      //Click on Sign in
      methods.clickSignIn();
      //Assert login successfull and welcome message
      methods.assertLoginSuccess()
      //Select Gear tab
      methods.clickOnGearTab();
      //Assert Gear page
      methods.assertGearUrl();
      //Click on Fitness Equipment
      methods.clickOnBottom();
      //Click On Fitness product
      methods.clickOnFitnessProduct();
      //Assert Availability
      methods.assertAvailability();
      //Click on add to Wishlist button
      cy.wait(1000)
      methods.clickOnAddToWishlist();
      //check the wishlist
      methods.assertCartWishlist();
      //Add all to cart
      methods.addAllToCart();
      cy.wait(1000);
      //Assert cart wishlist
      methods.assertMyWishlist();
      //Click on the cart number
      methods.clickOnCartNumber();
      //wait for the page to load
      cy.wait(100)
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
      //Assert Order page
      methods.assertOrderPage();
      //Assert order ID exists
      methods.assertOrderId('Your order number is:');
    });


    it('Place an order as a new user without mandatory field for the address, expect error', () => {

      methods.clickOnMenTab();
      //Assert men url
      methods.assertMenUrl();
      //Select the bottoms products
      methods.clickOnBottom();
      //verify products are 12
      methods.verifyProducts();
      //Select the 5h product
      methods.clickOnShortProduct();
      //Assert Availability
      methods.assertAvailability();
      //Select size
      methods.selectSizeXL();
      //Select colour
      methods.selectColourBlue();
      //Add to cart
      methods.addToCart();
      //Assert item success message
      methods.assertProductAdded();
      //Click on cart
      methods.clickOnCart();
      cy.wait(1000);
      //Proceed to checkout
      methods.proceedToCheckout();
      //Assert shipping url
      methods.assertShippingUrl();
      //Insert Email Address
      methods.insertCustomerEmail('example00109@gmail.com');
      //Insert First Name
      methods.insertShippingFirstName('TestFirstName');
      //Insert Last Name
      methods.insertShippingLastName('TestLastName');
      //Select country
      methods.selectCountry();
      //Select region
      methods.selectRegion();
      //Add the city
      methods.insertCity('Anchorage');
      //Insert Postal code
      methods.insertPostalCode('12345-6789');
      //enter the phone number
      methods.insertPhoneNumber('0743567890');
      //Select shipping method
      methods.selectTableRateShipping();
      //click On Next
      methods.clickNextButton();
      //Assert this is a required field 
      methods.assertRequiredFieldAddress();
    });

    it('Verify that users can view order history and track their pending orders', () => {

      //Sign in registered user
      methods.clickOnSignIn();
      methods.insertLoginEmail('user_rdpl7100j@example.com');
      methods.insertLoginPassword('example123@');
      methods.clickSignIn();
      //Assert login successfull and welcome message
      methods.assertLoginSuccess();
      //Click on My Account from dropdown
      methods.clickOnCustomerArrow();
      //Select My Account tab
      methods.clickOnMyAccountTab();
      //Assert My account page url
      methods.assertMyAccountPageUrl();
      //Clcik on My orders and assert
      methods.clickOnMyOrders();
      //Assert My orders
      methods.assertMyOrdersPageHistoryUrl();
      //Click on my orders
      methods.assertMyOrderTable();
      //Click on my first ored to view the order
      methods.clickOnViewOrders();
      //Assert page has Pending message
      methods.AssertOrderIdUrl();
      //Assert pending status of the order
      methods.assertPendingStatus();
    });

    it('Verify you can add a new shipping address and make an order', () => {
      
    });

    it('Attempt to add a product from the Add to Cart button on the picture, expect message', () => {
      
    });

    it('Place an order, register succesfully with correct details', () => {
      
    });

    it('Place an order, register succesfully with correct details', () => {
      
    });
    
})
  