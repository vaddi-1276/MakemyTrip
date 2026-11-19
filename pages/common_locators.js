class CommonLocators {
    constructor() {
        this.popupCloseButton = '//*[@class="commonModal__close"]';

        this.wholePageTitle = '//span[@class="coachmark"]';

        this.Submodule_Icons = (icon_name) => `//span[contains(@class,"${icon_name}")]`;

        this.Submodule_Icons_text = (icon_name) => `//span[.//span[contains(@class,"${icon_name}")]]//following-sibling::span[contains(@class,"darkGreyText")]`;

        this.Flights_From_City= '//label[@for="fromCity"]'

        this.Flights_From_City_Input = '//input[@placeholder="From"]';

        this.Flights_From_City_List = (city_name) => `//*[text()="${city_name}"]`;
        this.Flights_To_City = '//label[@for="toCity"]';

        this.Flights_To_City_Input = '//input[@placeholder="To"]';

        this.Flights_To_City_List = (city_name) => `//*[text()="${city_name}"]`;

        this.Flights_Departure_Date = '//label[@for="departure"]';

        this.next_month_button = '//span[@aria-label="Next Month"]';

        this.previous_month_button = '//*[@aria-label="Previous Month"]';

        this.current_month_date='//div[@aria-selected="true"]'

        this.flights_search_button = '//*[text()="Search"]';

        this.flights_price_page_title = '//div[@class="flightBody"]';

        this.hotels_city='//label[@for="city"]'

        this.hotels_city_input='//div[contains(@class,"PopupNew")]//input'

        this.hotels_city_select=(city_name)=>`(//div[contains(@class,"searchedResult")][.//span[contains(@class,"recentLocationIcon")]]//*[text()="${city_name}"])[1]`

        this.hotels_checkin_date_placeholder='//label[@for="checkin"]'

        this.hotel_start_date='//div[@class="DayPicker-Month"]//div[contains(@class,"start")]'

        this.hotel_day_after_start_date='//div[@class="DayPicker-Month"]//div[contains(@class,"start")]/following-sibling::div[1]'

        this.hotel_end_date='//div[@class="DayPicker-Month"]//div[contains(@class,"end")]'

        this.hotel_search_button='//*[text()="Search"]'

        this.hotel_price_page_title='//div[@class="hotelBody"]'

        this.hotel_rooms_Add_button='//div[@aria-label="Rooms counter"]//button[contains(@aria-label,"Increase value")]'

        this.hotel_rooms_Subtract_button='//div[@aria-label="Rooms counter"]//button[contains(@aria-label,"Decrease value")]'

        this.hotel_adults_Add_button='//div[@aria-label="Adults counter"]//button[contains(@aria-label,"Increase value")]'

        this.hotel_adults_Subtract_button='//div[@aria-label="Adults counter"]//button[contains(@aria-label,"Decrease value")]'

        this.hotel_children_Add_button='//div[@aria-label="Children counter"]//button[contains(@aria-label,"Increase value")]'

        this.hotel_children_Subtract_button='//div[@aria-label="Children counter"]//button[contains(@aria-label,"Decrease value")]'

        this.hotel_apply_button='//button[contains(@class,"ApplyNew")]'

        this.hotel_name_text='//*[@itemprop="name"]//span[text()]'

    }
    async  waitForElementVisible(page, selector, timeout = 60000) {
        await page.waitForSelector(selector, { state: 'visible', timeout });
    }
}

export default new CommonLocators();