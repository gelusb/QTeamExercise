import { selectors } from "./selectors";
import { methods } from "./methods";
export class OrderMethods {

    singleOrder(){
        methods.verifyProducts();
        //Click on the 5th product (Fusion Backpack)
        methods.clickOnProductName('Fusion')
        //Verify the url for the Fusion backpack is correct 
        methods.assertFusionUrl();
        //Verify the product is in stock
        methods.assertAvailability();
        //Add the product to cart
        methods.addToCart();
        //Assert Successfull message added to cart
        methods.assertProductAdded();
        //Click on Shopping cart
        methods.clickOnCart();
        //Click on Proceed to checkout button
        methods.proceedToCheckout();
    }

    multipleOrder(){
        //Verify there are at least 5 products on the main page
        methods.verifyProducts();
        //Add 3 products to the cart
        methods.clickOnProductName('Fusion Backpack')
        //Verify the url for the Fusion backpack is correct 
        methods.assertFusionUrl();
        //Assert product availability
        methods.assertAvailability();
        //Add the product to cart
        methods.addToCart();
        //Assert Successfull message added to cart
        methods.assertProductAdded();
        //Go back
        methods.clickOnLogo();
        //2nd product
        methods.clickOnProductName('Hero Hoodie')
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
        methods.clickOnLogo();
        //3rd product
        methods.clickOnProductName('Argus All-Weather Tank')
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
    }

    removeItemOrder(){
        //Add men`s item to the cart
        methods.clickOnMenTab();
        //Assert men url
        methods.assertMenUrl();
        //Select the bottoms products
        methods.clickOnBottom();
        //verify products are 12
        methods.verifyProducts();
        //Select the 5h product
        methods.clickOnProductName('Troy Yoga');
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
        methods.clickOnProductName('Antonia Racer');
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
        methods.clickOnProductName('Endurance Watch');
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
        //Proceed to checkout
        methods.proceedToCheckout();
        methods.selectTableRateShipping();
        //Assert shipping address is selected
        methods.assertShippingDetails();
        //Click Next
        methods.clickNextButton();
        //Click on Place order
        methods.clickOnPlaceOrderButton();
    }

    addProductToWishlist(){
        //Select Gear tab
        methods.clickOnGearTab();
        //Assert Gear page
        methods.assertGearUrl();
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
        //Click on Place order
        methods.clickOnPlaceOrderButton();
    }

    invalidDiscountCode(){
        //Select Gear tab
        methods.clickOnGearTab();
        //Assert Gear page
        methods.assertGearUrl();
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

    viewPendingOrders(){
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
    }







}











export const orderMethods = new OrderMethods()