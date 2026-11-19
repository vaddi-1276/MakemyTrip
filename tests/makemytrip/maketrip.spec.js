import { test, expect } from '@playwright/test';
import commonLocators from '../../pages/common_locators';

test.setTimeout(60000)
test('Navigate to MakeMyTrip and verify the submodule icons and text', async ({ page }) => {
    await page.goto('https://www.makemytrip.com/');
    await commonLocators.waitForElementVisible(page, commonLocators.popupCloseButton);
    await page.locator(commonLocators.popupCloseButton).click();
    await commonLocators.waitForElementVisible(page, commonLocators.Submodule_Icons('chFlights'));

    const objecttypes = ['chFlights', 'chHotels', 'chHomestays', 'chHolidays', 'chTrains', 'chBuses', 'chCabs', 'chToursAttractions', 'chVisa', 'chCruise', 'chForex', 'chTravelInsurance'];
    const objecttypes_text = ["Flights", "Hotels", "Villas & Homestays", "Holiday Packages", "Trains", "Buses", "Cabs", "Tours & Attractions", "Visa", "Cruise", "Forex Card & Currency", "Travel Insurance"];
    for (const objecttype of objecttypes) {
        await commonLocators.waitForElementVisible(page, commonLocators.Submodule_Icons(objecttype));
        await expect(page.locator(commonLocators.Submodule_Icons(objecttype))).toBeVisible();

        const text = await page.locator(commonLocators.Submodule_Icons_text(objecttype)).textContent();
        expect(text.trim()).toBe(objecttypes_text[objecttypes.indexOf(objecttype)]);
    }
});
test('Click on Flights and search for flights from New Delhi to Mumbai and navigated to Flights Price Page', async ({ page }) => {
    await page.goto('https://www.makemytrip.com/');
    await commonLocators.waitForElementVisible(page, commonLocators.popupCloseButton);
    await page.locator(commonLocators.popupCloseButton).click();
    await commonLocators.waitForElementVisible(page, commonLocators.Submodule_Icons('chFlights'));

    await page.locator(commonLocators.Submodule_Icons('chFlights')).click();
    await commonLocators.waitForElementVisible(page, commonLocators.Flights_From_City);
    await page.locator(commonLocators.Flights_From_City).click();

    await commonLocators.waitForElementVisible(page, commonLocators.Flights_From_City_Input);
    await page.locator(commonLocators.Flights_From_City_Input).fill('New Delhi, India');
    await commonLocators.waitForElementVisible(page, commonLocators.Flights_From_City_List('New Delhi, India'));
    await page.locator(commonLocators.Flights_From_City_List('New Delhi, India')).click();
    await commonLocators.waitForElementVisible(page, commonLocators.Flights_To_City);
    await page.locator(commonLocators.Flights_To_City).click();
    await commonLocators.waitForElementVisible(page, commonLocators.Flights_To_City_Input);
    await page.locator(commonLocators.Flights_To_City_Input).fill('Mumbai, India');
    await commonLocators.waitForElementVisible(page, commonLocators.Flights_To_City_List('Mumbai, India'));
    await page.locator(commonLocators.Flights_To_City_List('Mumbai, India')).click();
    await commonLocators.waitForElementVisible(page, commonLocators.Flights_Departure_Date);
    await page.locator(commonLocators.Flights_Departure_Date).click();
    await commonLocators.waitForElementVisible(page, commonLocators.current_month_date);
    await page.locator(commonLocators.current_month_date).click();

    await commonLocators.waitForElementVisible(page, commonLocators.flights_search_button);
    await page.locator(commonLocators.flights_search_button).click();

    await commonLocators.waitForElementVisible(page, commonLocators.flights_price_page_title);
    
})

test('Click on Hotels and applying the Data and Click on Search Button', async ({ page }) => {
    test.setTimeout(60000)
    await page.goto('https://www.makemytrip.com/');
    await commonLocators.waitForElementVisible(page, commonLocators.popupCloseButton);
    await page.locator(commonLocators.popupCloseButton).click();
    await commonLocators.waitForElementVisible(page, commonLocators.Submodule_Icons('chHotels'));

    await page.locator(commonLocators.Submodule_Icons('chHotels')).click();

    await commonLocators.waitForElementVisible(page, commonLocators.hotels_city);
    await page.locator(commonLocators.hotels_city).click();
    await commonLocators.waitForElementVisible(page, commonLocators.hotels_city_input);

    await page.locator(commonLocators.hotels_city_input).click();
    await page.locator(commonLocators.hotels_city_input).fill('Delhi'); // wait for autocomplete suggestions to load
    await commonLocators.waitForElementVisible(page, commonLocators.hotels_city_select('Delhi'));
    await page.locator(commonLocators.hotels_city_select('Delhi')).click();
    await commonLocators.waitForElementVisible(page, commonLocators.hotels_checkin_date_placeholder);
    await page.locator(commonLocators.hotels_checkin_date_placeholder).click();
    await commonLocators.waitForElementVisible(page, commonLocators.hotel_start_date);
    await page.locator(commonLocators.hotel_start_date).click();
    await commonLocators.waitForElementVisible(page, commonLocators.hotel_day_after_start_date);
    await page.locator(commonLocators.hotel_day_after_start_date).click();

    await page.waitForTimeout(5000);

    await commonLocators.waitForElementVisible(page, commonLocators.hotel_rooms_Add_button);
    await page.locator(commonLocators.hotel_rooms_Add_button).click();
   
    await commonLocators.waitForElementVisible(page, commonLocators.hotel_adults_Add_button);
    await page.locator(commonLocators.hotel_adults_Add_button).click();
   
    // await commonLocators.waitForElementVisible(page, commonLocators.hotel_children_Add_button);
    // await page.locator(commonLocators.hotel_children_Add_button).click();

    await commonLocators.waitForElementVisible(page, commonLocators.hotel_apply_button);

    await page.locator(commonLocators.hotel_apply_button).click();
   
    
    await commonLocators.waitForElementVisible(page, commonLocators.hotel_search_button);
    await page.locator(commonLocators.hotel_search_button).click();

})

test('Click on Hotels and navigated to Hotels Price Page', async ({ page }) => {
    test.setTimeout(60000)
    await page.goto('https://www.makemytrip.com/');
    await commonLocators.waitForElementVisible(page, commonLocators.popupCloseButton);
    await page.locator(commonLocators.popupCloseButton).click();
    await commonLocators.waitForElementVisible(page, commonLocators.Submodule_Icons('chHotels'));

    await page.locator(commonLocators.Submodule_Icons('chHotels')).click();

    await commonLocators.waitForElementVisible(page, commonLocators.hotels_city);

    await commonLocators.waitForElementVisible(page, commonLocators.hotel_search_button);
    await page.locator(commonLocators.hotel_search_button).click();

    await page.goto('https://www.makemytrip.com/hotels/')

    await commonLocators.waitForElementVisible(page, commonLocators.hotel_search_button);

    const hotel_name_text = await page.locator(commonLocators.hotel_name_text).count();

    for(let i = 0; i < hotel_name_text; i++) {
        const hotel_name = await page.locator(commonLocators.hotel_name_text).nth(i).textContent();
        console.log(hotel_name);
    }
})


