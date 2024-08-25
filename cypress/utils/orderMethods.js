import { selectors } from "./selectors";
import { methods } from "./methods";
export class OrderMethods {

    singleOrder(){
        methods.verifyProducts();
        methods.clickOnProductName('Fusion')
        methods.assertUrl('https://magento.softwaretestingboard.com/fusion-backpack.html');
        methods.assertAvailability();
        methods.addToCart();
        methods.assertProductAdded();
        methods.clickOnCart();
        methods.proceedToCheckout();
    }

    multipleOrder(){
        methods.verifyProducts();
        methods.clickOnProductName('Fusion Backpack')
        methods.assertUrl('https://magento.softwaretestingboard.com/fusion-backpack.html');
        methods.assertAvailability();
        methods.addToCart();
        methods.assertProductAdded();
        methods.clickOnLogo();
        methods.clickOnProductName('Hero Hoodie')
        methods.assertAvailability();
        methods.selectSizeL();
        methods.selectColourGreen();
        methods.addToCart();
        methods.assertProductAdded();
        methods.clickOnLogo();
        methods.clickOnProductName('Argus All-Weather Tank')
        methods.selectSizeL();
        methods.selectColourGray();
        methods.addToCart();
        methods.assertProductAdded();
        methods.clickOnCart();
        methods.assertMultipleOrder();
        methods.proceedToCheckout();
    }

    removeItemOrder(){
        methods.clickOnMenTab();
        methods.assertUrl('https://magento.softwaretestingboard.com/men.html');
        methods.clickOnBottom();
        methods.verifyProducts();
        methods.clickOnProductName('Troy Yoga');
        methods.assertAvailability();
        methods.selectSizeXL();
        methods.selectColourBlue();
        methods.addToCart();
        methods.assertProductAdded();
        methods.clickOnWomenTab();
        methods.assertUrl('https://magento.softwaretestingboard.com/women.html');
        methods.clickOnTops();
        methods.clickOnProductName('Antonia Racer');
        methods.assertAvailability();
        methods.selectSizeL();
        methods.selectColourBlack();
        methods.addToCart();
        methods.assertProductAdded();
        methods.clickOnGearTab();
        methods.assertUrl('https://magento.softwaretestingboard.com/gear.html');
        methods.clickOnWatches();
        methods.clickOnProductName('Endurance Watch');
        methods.addToCart();
        methods.assertProductAdded();
        methods.clickOnCart();
        methods.assertMultipleOrder();
        methods.removeProduct();
        methods.assertUpdatedOrder();
        methods.proceedToCheckout();
        methods.selectTableRateShipping();
        methods.assertShippingDetails();
        methods.clickNextButton();
        methods.clickOnPlaceOrderButton();
    }

    addProductToWishlist(){
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
        methods.clickOnPlaceOrderButton();
    }

    invalidDiscountCode(){
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

    viewPendingOrders(){
        methods.clickOnSignIn();
        methods.insertLoginEmail('user_rdpl7100j@example.com');
        methods.insertLoginPassword('example123@');
        methods.clickSignIn();
        methods.assertLoginSuccess();
        methods.clickOnCustomerArrow();
        methods.clickOnMyAccountTab();
        methods.assertUrl('https://magento.softwaretestingboard.com/customer/account/');
        methods.clickOnMyOrders();
        methods.assertUrl('https://magento.softwaretestingboard.com/sales/order/history/');
        methods.assertMyOrderTable();
        methods.clickOnViewOrders();
        methods.AssertOrderIdUrl('https://magento.softwaretestingboard.com/sales/order/view/order_id/');
    }

}





export const orderMethods = new OrderMethods()