import { checkoutMethods } from "../../utils/checkoutMethods";
import { methods } from "../../utils/methods"
import { orderMethods } from "../../utils/orderMethods";
import { selectors } from "../../utils/selectors";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Order Placement regression tests', () => {

  beforeEach(() => {
    methods.visitUrl('https://magento.softwaretestingboard.com/');

  });

    it('Place an order with valid data as a new user', () => {

      orderMethods.singleOrder();
      checkoutMethods.fillCheckoutInformation();
      checkoutMethods.placeOrder();
    });

    it('Place a multiple order as a new user', () => {

      orderMethods.multipleOrder();
      checkoutMethods.fillCheckoutInformation();
      checkoutMethods.placeOrder();
    });

    it('Register a new user and edit the shipping address', () => {

      methods.clickOnCreateAccount();
      checkoutMethods.fillRegisterInformation();
      methods.clickOnSaveAddress();
      methods.assertShippingAddress();
      
    });

    it('Login the registered user with invalid credentials', () => {

      checkoutMethods.invalidSignIn();
      methods.assertSignInErrorMessage();
    });

    it('Sign in a registerd user, place an order and remove one item from the cart', () => {

      checkoutMethods.validSignIn();
      orderMethods.removeItemOrder();
      methods.assertOrderId('Your order number is:');
    });

    it('Add product to the wishlist, add to cart and finalize payment', () => {

      checkoutMethods.validSignIn();
      orderMethods.addProductToWishlist();
      methods.assertOrderId('Your order number is:');
    });

    it('Place an order from the wishlist and apply invalid Discount code, expect error message,continune order', () => {

      checkoutMethods.validSignIn();
      orderMethods.invalidDiscountCode();
      methods.assertOrderId('Your order number is:');
    });


    it('Place an order as a new user without mandatory field for the address, expect error', () => {

      orderMethods.singleOrder();
      checkoutMethods.invalidCheckoutInformation();
      methods.assertRequiredFieldAddress();
    });

    it.only('Verify that users can view order history and track their pending orders', () => {

      orderMethods.viewPendingOrders();
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
  